import React from 'react';
import { Typography, Box, Toolbar } from '@material-ui/core';
import { FormWithRedirect, TextInput, SaveButton, Create } from 'react-admin';

const  UserForm = props => (
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
                                <TextInput source="nom" resource="client.nom" fullWidth />
                            </Box>
                            <Box flex={1} ml="0.5em">
                                <TextInput source="prenom" resource="clients" fullWidth />
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box flex={1} mr="0.5em">
                                <TextInput source="sexe" resource="clients" fullWidth />
                            </Box>
                            <Box flex={1} ml="0.5em">
                                <TextInput source="age" resource="clients" fullWidth />
                            </Box>
                        </Box>
                        <TextInput source="telephone" resource="clients" fullWidth />
                        <TextInput source="poste" resource="clients" fullWidth />
                        <Box mt="1em" />
                    </Box>
                </Box>
            </Box>
            <Toolbar>
                <Box display="flex" justifyContent="space-between" width="100%">
                <SaveButton
                        label="Créer"
                        saving={formProps.saving}
                        handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                        />
                </Box>
            </Toolbar>
        </form>
    )}
    />
)

export const UserCreate = props => (
 <Create {...props}>
     <UserForm />
 </Create>
);