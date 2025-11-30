import Business from '../models/Business';

export const createBusiness = async (data: any) => Business.create(data);
export const getBusinesses = async () => Business.find();
