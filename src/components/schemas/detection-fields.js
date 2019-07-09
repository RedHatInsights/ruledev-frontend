import { componentTypes } from '@data-driven-forms/react-form-renderer';

export default {
    title: 'Rule Detection',
    name: 'step-2',
    stepKey: 'detection',
    nextStep: 'details',
    fields: [
        {
            component: componentTypes.TEXTAREA_FIELD,
            name: 'detection',
            type: 'text',
            label: 'How can this issue be proactively detected prior to a customer' +
            ' noticing it or before the host is impacted?'
        },
        {
            component: componentTypes.TEXTAREA_FIELD,
            name: 'symptoms',
            type: 'text',
            label: 'What conditions and/or events on the host cause this problem to happen?'
        },
        {
            component: componentTypes.TEXTAREA_FIELD,
            name: 'environment',
            type: 'text',
            label: 'What environmental details are required for this issue to occur?'
        },
        {
            component: componentTypes.SELECT,
            name: 'likelyhood',
            label: 'Given the current conditions being detected, how likely is' +
                ' the problem about to occur in their environment?',
            options: [
                {
                    label: 'Select One'
                },
                {
                    value: 'low',
                    label: 'Low'
                },
                {
                    value: 'medium',
                    label: 'Medium'
                },
                {
                    value: 'high',
                    label: 'High'
                },
                {
                    value: 'critical',
                    label: 'Critical'
                }
            ]
        },
        {
            component: componentTypes.TEXTAREA_FIELD,
            name: 'consequence',
            type: 'text',
            label: 'What is the consequence if this issue was not resolved in time?'
        },
        {
            component: componentTypes.SELECT,
            name: 'impact',
            label: 'Given if the consequence provided above was to occur,' +
            ' how severely will this impact the host’s operations?',
            options: [
                {
                    label: 'Select One'
                },
                {
                    value: 'low',
                    label: 'Low'
                },
                {
                    value: 'medium',
                    label: 'Medium'
                },
                {
                    value: 'high',
                    label: 'High'
                },
                {
                    value: 'critical',
                    label: 'Critical'
                }
            ]
        }
    ]
};
