import savedCompanyModel from './savedCompany.model';

export const savedCompanyRepo = {
    getAllSavedCompany: async () => {
        return await savedCompanyModel.find({}).lean();
    },
    addCompany: async (domain: string) => {
        await savedCompanyModel.create({ domain });
    },
};
