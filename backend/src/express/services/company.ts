import * as companiesApi from '../../api/companies';
import { savedCompanyRepo } from '../../mongo/savedCompany.repo';
import { companyBasic, companyType } from '../../types/company';

export async function getCompanyByDomainBasic(domainName: string, isNew: boolean = true) {
    const companyDetails: companyBasic = await companiesApi.getCompanyByDomain(domainName);
    const { name, logo, type, domain } = companyDetails;

    const basicDetails = { name, logo, type, domain };
    if (isNew) await savedCompanyRepo.addCompany(domain);

    return basicDetails;
}

export async function getCompanyByDomainFull(domainName: string) {
    const companyDetails: companyType = await companiesApi.getCompanyByDomain(domainName);

    return companyDetails;
}

export async function getSavedCompanies() {
    const savedCompaniesDomain: { domain: string }[] = await savedCompanyRepo.getAllSavedCompany();
    const companies: companyBasic[] = [];

    for (let i = 0; i < savedCompaniesDomain.length; i++) {
        const { domain } = savedCompaniesDomain[i];
        const company: companyBasic = await getCompanyByDomainBasic(domain, false);
        companies.push(company);
    }

    return companies;
}
