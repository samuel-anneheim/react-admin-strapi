import { Show, SimpleShowLayout, TextField } from 'ra-ui-materialui'
import React from 'react'

export const UserShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="nom" />
            <TextField source="prenom" />
            <TextField source="age" />
            <TextField source="sexe" />
            <TextField source="telephone" />
            <TextField source="poste" />
        </SimpleShowLayout>
    </Show>
)