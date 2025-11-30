import Investment from '../models/Investment';

export const createInvestment = async (data: any) => Investment.create(data);
export const getInvestments = async () => Investment.find().populate('business');