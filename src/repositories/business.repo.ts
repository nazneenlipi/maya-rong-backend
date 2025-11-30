import Business from "../models/Business";

export const getBusinesses = async () => Business.find();

export const createBusiness = async (data: { name: string }) => {
  return Business.create(data);
};
