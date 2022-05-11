import type { NextApiRequest, NextApiResponse } from "next";
import { toBackend } from "../../config/backendPath";
import api from "../../utils/api";
import { companyDetails } from '../../types/companyCard';

export default async function handler(
  { method }: NextApiRequest,
  res: NextApiResponse
) {  if (method === 'GET') {
    const result = await api.get(toBackend.getCompanies);

    const companyDetails: companyDetails[] = result.ok ? await result.json() : null;

    if (companyDetails) {
      res.status(200).json(companyDetails);
    } else {
      res.status(404).json({ message: `not found` });
    }
  } 
}
