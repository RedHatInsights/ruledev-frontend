import { componentTypes } from '@data-driven-forms/react-form-renderer';

export default {
    title: 'Rule Detection',
    name: 'step-2',
    stepKey: 'detection',
    nextStep: 'details',
    fields: [
        {
            component: componentTypes.TEXT_FIELD,
            name: 'description',
            type: 'text',
            isRequired: true,
            label: 'Provide a brief description of the issue'
        }
    ]
};
