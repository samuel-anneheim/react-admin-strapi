import { Edit, SimpleForm, TextInput } from 'ra-ui-materialui'
import React from 'react'

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nom" />
            <TextInput source="prenom" />
            <TextInput source="age" />
            <TextInput source="sexe" />
            <TextInput source="telephone" />
            <TextInput source="poste" />
        </SimpleForm>
    </Edit>
)