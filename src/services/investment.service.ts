import * as InvestmentRepo from '../repositories/investment.repo';

export const addInvestment = async (data: any) => InvestmentRepo.createInvestment(data);
export const listInvestments = async () => InvestmentRepo.getInvestments();
