import * as BusinessRepo from "../repositories/business.repo";

export const addBusiness = async (data: any) => {
  if (!data || typeof data.name !== "string" || !data.name.trim()) {
    const err: any = new Error("Business name is required");
    err.status = 400;
    throw err;
  }

  return BusinessRepo.createBusiness({ name: data.name.trim() });
};

export const listBusinesses = async () => BusinessRepo.getBusinesses();
