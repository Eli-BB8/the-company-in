import * as express from 'express';
import { wrapController } from '../wraps';
import * as controller from '../controllers/company';
import validateRequest from '../joi/joi';
import { companySchema } from '../joi/validator.schema';

const router = express.Router();

router.get('/company/basic/:domainName', validateRequest(companySchema), wrapController(controller.getCompanyBasic));
router.get('/company/full/:domainName', validateRequest(companySchema), wrapController(controller.getCompanyFull));
router.get('/companies', validateRequest(companySchema), wrapController(controller.getSavedCompanies));

export default router;

