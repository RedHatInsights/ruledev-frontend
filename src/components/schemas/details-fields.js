import React from 'react';
import { componentTypes } from '@data-driven-forms/react-form-renderer';

export default {
    title: 'Resolution Details',
    stepKey: 'details',
    name: 'step-3',
    fields: [
        {
            component: 'description-text',
            name: 'description-text',
            text: <p>
                What is the procedure needed to be taken to resolve the problem.
            </p>
        },
        {
            component: componentTypes.SWITCH,
            name: 'workaround-enabled',
            label: 'Is there a workaround?'
        },
        {
            component: componentTypes.TEXTAREA_FIELD,
            name: 'workaround',
            type: 'text',
            condition: {
                when: 'workaround-enabled',
                is: true
            }
        },
        {
            component: componentTypes.SELECT,
            name: 'workaround-risk',
            label: 'What is the risk of the workaround?',
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
            ],
            condition: {
                when: 'workaround',
                is: true
            }
        },
        {
            component: componentTypes.SWITCH,
            name: 'support_required',
            label: 'Can the problem be resolved without contacting support?'
        },
        {
            component: componentTypes.SELECT,
            name: 'risk_of_change',
            label: 'Given the steps needed to be taken to resolve the problem,' +
            ' what is the risk of acting on these changes?',
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
            component: 'description-text',
            name: 'description-text',
            text: <a href="https://access.redhat.com/articles/3263881">More info</a>
        }
    ]
};
