import Investment from "../models/Investment";

// Keep repository very small — DB access only
export const createInvestment = async (data: any) => {
  return Investment.create(data);
};

export const getInvestments = async () => {
  return Investment.find()
    .populate("business")      // show business name/id
    .lean();                   // return plain objects (faster)
};