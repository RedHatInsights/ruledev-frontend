import React from 'react';
import { componentTypes } from '@data-driven-forms/react-form-renderer';

export default {
    title: 'General Info',
    name: 'step-1',
    stepKey: 1,
    nextStep: 'detection',
    fields: [
        {
            component: 'description-text',
            name: 'description-text',
            text: <i>
                The intended use for this form is to nominate known issues,
                optimizations or problematic conditions for their evaluation
                to be added into Red Hat Insights as a new rule. The submission
                of this form will initiate a review process of the proposed
                rule candidate prior to its development by our team and release.
                If there are any questions, please
                email <a href="mailto:insights-rule-discuss@redhat.com">insights-rule-discuss@redhat.com</a>
            </i>
        },
        {
            component: componentTypes.TEXT_FIELD,
            name: 'description',
            type: 'text',
            isRequired: true,
            label: 'Provide a brief description of the issue'
        },
        {
            component: componentTypes.TEXTAREA_FIELD,
            name: 'documentation',
            type: 'text',
            isRequired: true,
            label: 'Provide any associated supporting documentation'
        },
        {
            component: componentTypes.SELECT,
            name: 'category',
            label: 'Which category does this issue fall under?',
            isRequired: true,
            options: [
                {
                    label: 'Select One'
                },
                {
                    value: 'availability',
                    label: 'Availability'
                },
                {
                    value: 'stability',
                    label: 'Stability'
                },
                {
                    value: 'security',
                    label: 'Security'
                },
                {
                    value: 'performance',
                    label: 'Performance'
                }
            ]
        },
        {
            component: componentTypes.SELECT,
            name: 'select-one',
            label: 'What supported Red Hat products and versions does this issue impact?',
            isRequired: true,
            options: [
                {
                    label: 'Multi-Select '
                },
                {
                    value: 'rhel-6',
                    label: 'RHEL 6'
                },
                {
                    value: 'rhel-7',
                    label: 'RHEL 7'
                },
                {
                    value: 'rhel-8',
                    label: 'RHEL 8'
                },
                {
                    value: 'ocp',
                    label: 'OCP'
                },
                {
                    value: 'osp',
                    label: 'OSP'
                },
                {
                    value: 'rhv',
                    label: 'RHV'
                },
                {
                    value: 'jboss',
                    label: 'JBoss'
                },
                {
                    value: 'satelite',
                    label: 'Satellite'
                },
                {
                    value: 'cloudforms',
                    label: 'Cloudforms'
                },
                {
                    value: 'ansible',
                    label: 'Ansible'
                },
                {
                    value: 'other',
                    label: 'Other'
                }
            ],
            multi: true
        }
    ]
};
