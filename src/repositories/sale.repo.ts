import Sale from '../models/Sale';

export const createSale = async (data: any) => Sale.create(data);
export const getSales = async () => Sale.find().populate('business');
