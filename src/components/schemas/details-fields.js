import { componentTypes } from '@data-driven-forms/react-form-renderer';

export default {
    title: 'Resolution Details',
    stepKey: 'details',
    name: 'step-3',
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
