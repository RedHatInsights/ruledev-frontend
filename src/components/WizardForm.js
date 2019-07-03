import React from 'react';
import FormRender from '@data-driven-forms/react-form-renderer';
import { layoutMapper, formFieldsMapper } from '@data-driven-forms/pf4-component-mapper';
import PropTypes from 'prop-types';
import { wizardSchema } from './schemas';

const DescriptionText = ({ text }) => (<span>{ text }</span>);

DescriptionText.propTypes = {
    text: PropTypes.string
};

const DataDrivenForm = ({ onSubmit, onCancel, isOpen }) => (
    <React.Fragment>
        {
            isOpen && <FormRender
                formFieldsMapper={ {
                    ...formFieldsMapper,
                    'description-text': DescriptionText
                } }
                layoutMapper={ layoutMapper }
                schema={ { fields: [ wizardSchema ]} }
                onSubmit={ onSubmit }
                onCancel={ onCancel }
                showFormControls={ false }
            /> }
    </React.Fragment>
);

DataDrivenForm.propTypes = {
    isOpen: PropTypes.bool,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
};

DataDrivenForm.defaultProps = {
    isOpen: false,
    onSubmit: () => undefined,
    onCancel: () => undefined
};

export default DataDrivenForm;
