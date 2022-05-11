import * as env from 'env-var';
import './dotenv';

const config = {
    server: {
        port: env.get('PORT').required().asPortNumber(),
    },
    api: {
           companies: { url: env.get('COMPANIES_URL').required().asString(),
           token: env.get('COMPANIES_TOKEN').required().asString() 
        },
    },
    mongo: {
        uri: env.get('MONGO_URI').required().asString(),
        collections: {
            savedCompanies: env.get('SAVED_COMPANIES').required().asString(),
        }
    }
};

export default config;
