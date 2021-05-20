import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'ra-ui-materialui';
import React from 'react';

export const ConsoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="mois" />
            <TextInput source="type" />
            <TextInput source="valeur" />
            <ReferenceInput label="Utilisateur" source="client" reference="clients">
                <SelectInput optionText="nom" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
)