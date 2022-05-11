import * as mongoose from 'mongoose';
import config from '../config';

const savedCompanySchema = new mongoose.Schema({
    domain: { type: String, unique: true },
});

const savedCompanyModel = mongoose.model(config.mongo.collections.savedCompanies, savedCompanySchema);

export default savedCompanyModel;
