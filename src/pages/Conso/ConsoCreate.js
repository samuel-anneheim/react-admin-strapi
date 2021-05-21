import { Edit, ReferenceInput, SelectInput, ShowButton, SimpleForm, FormWithRedirect, SaveButton, TextInput, TopToolbar, Create, EditButton } from 'react-admin';
import React from 'react';
import { Typography, Box, Toolbar } from '@material-ui/core';

const ActionButton = ({ basePath, data }) => (
    <TopToolbar>
        <EditButton label="Modifier" basePath={basePath} record={data} />
    </TopToolbar>
)

const ConsoForm = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            <form>
                <Box p="1em">
                    <Box display="flex">
                        <Box flex={2} mr="1em">

                            <Typography variant="h6" gutterBottom>Identité</Typography>

                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="type" resource="" fullWidth />
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <TextInput source="mois" resource="clients" fullWidth />
                                </Box>
                            </Box>
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="valeur" resource="clients" fullWidth />
                                </Box>
                                <ReferenceInput label="Utilisateur" source="client" reference="clients" flex={1} ml="0.5em">
                                    <SelectInput optionText="nom" />
                                </ReferenceInput>
                            </Box>
                            <Box mt="1em" />
                        </Box>
                    </Box>
                </Box>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <SaveButton
                            label="Modifier"
                            saving={formProps.saving}
                            handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                        />
                    </Box>
                </Toolbar>
            </form>
        )}
    />
)

export const ConsoCreate = props => (
    <Create {...props}>
        <ConsoForm />
    </Create>
)