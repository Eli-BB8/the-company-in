export type companyType = {
    id: string;
    name: string;
    legalName: string;
    domain: string;
    domainAliases: string[];
    site: {
        phoneNumbers: string[];
        emailAddresses: string[];
    };
    category: {
        sector: string;
        industryGroup: string;
        industry: string;
        subIndustry: string;
        sicCode: string;
        naicsCode: string;
    };
    tags: string[];
    description: string;
    foundedYear: number;
    location: string;
    timeZone: string;
    utcOffset: -7;
    geo: {
        streetNumber: string;
        streetName: string;
        subPremise: string;
        city: string;
        postalCode: string;
        state: string;
        stateCode: string;
        country: string;
        countryCode: string;
        lat: number;
        lng: number;
    };
    logo: string;
    facebook: {
        handle: string;
        likes: string;
    };
    linkedin: {
        handle: string;
    };
    twitter: {
        handle: string;
        id: string;
        bio: string;
        followers: number;
        following: number;
        location: string;
        site: string;
        avatar: string;
    };
    crunchbase: {
        handle: string;
    };
    emailProvider: true;
    type: string;
    ticker: string;
    identifiers: {
        usEIN: string;
    };
    phone: string;
    metrics: {
        alexaUsRank: number;
        alexaGlobalRank: number;
        employees: number;
        employeesRange: string;
        marketCap: number;
        raised: string;
        annualRevenue: string;
        estimatedAnnualRevenue: string;
        fiscalYearEnd: number;
    };
    indexedAt: string;
    tech: string[];
    techCategories: string[];
    parent: {
        domain: string;
    };
    ultimate_parent: {
        domain: string;
    };
};

export type companyBasic = {
    name: string;
    logo: string;
    type: string;
    domain: string;
};
