import axios from 'axios';
import config from '../config';

export const getCompanyByDomain = async (domainName: string) => {
    const companyDetails = await axios.get(config.api.companies.url, {
        headers: {
            Authorization: config.api.companies.token,
        },
        params: {
           domain: domainName,
        },
    });

    return companyDetails.data;
}
