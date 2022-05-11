import type { NextApiRequest, NextApiResponse } from 'next';
import { toBackend } from '../../../../config/backendPath';
import { companyDetails } from '../../../../types/companyCard';

import api from '../../../../utils/api';

export default async function handler(
  { method, query: { domainName } }: NextApiRequest,
  res: NextApiResponse
) {
  if (method === 'GET') {
    const result = await api.get(toBackend.getCompanyFull(domainName as string));

    const companyDetails: companyDetails = result.ok ? await result.json() : null;

    if (companyDetails) {
      res.status(200).json(companyDetails);
    } else {
      res.status(404).json({ message: `comapny with the domainName: ${domainName} not found` });
    }
  } 
}
