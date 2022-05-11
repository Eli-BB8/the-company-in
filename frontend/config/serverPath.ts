export const serverPath = {
    getCompanies: 'http://localhost:3000/api/companies/',
    getCompanyBasic: (domainName: string) => `http://localhost:3000/api/company/basic/${domainName}`,
    getCompanyFull: (domainName: string) => `http://localhost:3000/api/company/full/${domainName}`,
}