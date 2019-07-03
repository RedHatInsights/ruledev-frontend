import React, { useState } from 'react';
import { PageHeader, PageHeaderTitle, Main } from '@redhat-cloud-services/frontend-components';
import {
    Card,
    CardBody,
    Grid,
    Stack,
    StackItem,
    Button,
    ButtonVariant
} from '@patternfly/react-core';
import DataDrivenForm from '../components/WizardForm';

const Home = () => {
    const [ isModalOpen, onModalToggle ] = useState(false);
    return (
        <React.Fragment>
            <PageHeader className="pf-m-light">
                <PageHeaderTitle title='Rules definition' />
            </PageHeader>
            <Main>
                <Grid gutter="md" sm={ 12 } md={ 6 } lg={ 4 }>
                    <Card>
                        <CardBody>
                            <Stack>
                                <StackItem isFilled>
                                    To recommend a known issue, optimization or problematic
                                    condition to be added into Red Hat Insights as a new rule
                                    to be developed by the Insights team:
                                </StackItem>
                                <StackItem>
                                    <Button variant={ ButtonVariant.link } onClick={ () => onModalToggle(true) }>Visit Nomination Form</Button>
                                </StackItem>
                            </Stack>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <Stack>
                                <StackItem isFilled>
                                    If interested in developing and contributing Insights rules
                                    on your own, or viewing Red Hat Insights rule developer
                                    documentation:
                                </StackItem>
                                <StackItem>
                                    <Button variant={ ButtonVariant.link }>Visit Rule Documentation</Button>
                                </StackItem>
                            </Stack>
                        </CardBody>
                    </Card>
                </Grid>
                <DataDrivenForm
                    onCancel={ () => onModalToggle(false) }
                    onSubmit={ () => onModalToggle(false) }
                    isOpen={ isModalOpen }
                />
            </Main>
        </React.Fragment>
    );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
