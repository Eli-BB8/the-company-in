const backend = process.env.BACKED_URL;

export const toBackend = {
  getCompanies: `${backend}/api/companies/`,
  getCompanyBasic: (domainName: string) =>
    `${backend}/api/company/basic/${domainName}`,
  getCompanyFull: (domainName: string) =>
    `${backend}/api/company/full/${domainName}`,
};
