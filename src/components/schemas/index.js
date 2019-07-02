import resolutionDetails from  './details-fields';
import ruleDetection from './detection-fields';
import generalInfo from  './general-fields';

export const wizardSchema = {
    component: 'wizard',
    name: 'wizzard',
    inModal: true,
    title: 'Create Rule Nomination',
    fields: [
        generalInfo,
        ruleDetection,
        resolutionDetails
    ]
};
