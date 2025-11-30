import mongoose from "mongoose";
import * as InvestmentRepo from "../repositories/investment.repo";
import Business from "../models/Business";

export const createInvestment = async (data: any) => {
  if (!data.business) {
    throw { status: 400, message: "business is required" };
  }

  let businessId = "";
  let businessName = "";

  // CASE 1: business is an ObjectId
  if (mongoose.isValidObjectId(data.business)) {
    const found = await Business.findById(data.business);
    if (!found) {
      throw { status: 400, message: "Business ID not found" };
    }
    businessId = found._id.toString();
    businessName = found.name;
  }
  // CASE 2: business is a name → find by name
  else {
    const found = await Business.findOne({ name: data.business.trim() });
    if (!found) {
      throw {
        status: 400,
        message: `Business with name "${data.business}" not found.`,
      };
    }
    businessId = found._id.toString();
    businessName = found.name;
  }

  const payload = {
    investorName: data.investorName,
    description: data.description || "",
    business: businessId,
    businessName: businessName, // <-- SAVE NAME HERE
    date: data.date ? new Date(data.date) : new Date(),
    amount: Number(data.amount),
    category: data.category,
    createdBy: data.createdBy,
  };

  return InvestmentRepo.createInvestment(payload);
};

export const listInvestments = async () => {
  return InvestmentRepo.getInvestments();
};
