import * as BusinessRepo from '../repositories/business.repo';

export const addBusiness = async (data: any) => BusinessRepo.createBusiness(data);
export const listBusinesses = async () => BusinessRepo.getBusinesses();