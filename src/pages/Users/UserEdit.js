import { Typography, Box, Toolbar } from '@material-ui/core';
import { FormWithRedirect, TextInput, SaveButton, DeleteButton, Edit, EditButton, TopToolbar, ShowButton } from 'react-admin';

const UserForm = props => (
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
                                <TextInput source="nom" resource="client" fullWidth />
                            </Box>
                            <Box flex={1} ml="0.5em">
                                <TextInput source="prenom" resource="client" fullWidth />
                            </Box>
                        </Box>
                        <Box display="flex">
                            <Box flex={1} mr="0.5em">
                                <TextInput source="sexe" resource="client" fullWidth />
                            </Box>
                            <Box flex={1} ml="0.5em">
                                <TextInput source="age" resource="client" fullWidth />
                            </Box>
                        </Box>
                        <TextInput source="telephone" resource="client" fullWidth />
                        <TextInput source="poste" resource="client" fullWidth />
                        <Box mt="1em" />
                    </Box>
                </Box>
            </Box>
            <Toolbar>
                <Box display="flex" justifyContent="space-between" width="100%">
                    <SaveButton
                        label="modifier"
                        saving={formProps.saving}
                        handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                        />
                    <DeleteButton label="supprimer" record={formProps.record} />
                </Box>
            </Toolbar>
        </form>
    )}
    />
);
const ActionButton = ({basePath, data }) =>(
    <TopToolbar>
        <ShowButton label="Detail" basePath={basePath} record={data} />
    </TopToolbar>
)

export const UserEdit = props => (
 <Edit actions={<ActionButton />} {...props}>
     <UserForm />
 </Edit>
);
