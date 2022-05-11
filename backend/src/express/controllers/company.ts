import { Request, Response } from 'express';
import * as service from '../services/company';

export const getCompanyBasic = async (req: Request, res: Response): Promise<void> => {
   const domainName = req.params.domainName;

   const companyDetails = await service.getCompanyByDomainBasic(domainName);

   res.send(companyDetails)
};

export const getCompanyFull = async (req: Request, res: Response): Promise<void> => {
   const domainName = req.params.domainName;

   const companyDetails = await service.getCompanyByDomainFull(domainName);

   res.send(companyDetails)
};


export const getSavedCompanies = async (_req: Request, res: Response): Promise<void> => {

   const companies = await service.getSavedCompanies();

   res.send(companies)
};
