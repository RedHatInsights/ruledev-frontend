import { CREATE_NOMINATION } from './actionTypes';
import submitNomination from '../api';

export const onSubmitWizard = (payload) => ({
    type: CREATE_NOMINATION,
    payload: submitNomination(payload),
    meta: {
        notifications: {
            fulfilled: {
                variant: 'success',
                title: 'Nomination submitted',
                description: `Your nomination has been successfully submitted.`,
                dismissable: true
            }
        }
    }
});
