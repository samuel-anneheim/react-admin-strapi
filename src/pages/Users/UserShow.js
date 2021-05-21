import { EditButton, Show, SimpleShowLayout, TextField, TopToolbar } from 'ra-ui-materialui'
import React from 'react'

const ActionButton = ({basePath, data }) =>(
    <TopToolbar>
        <EditButton label="Modifier" basePath={basePath} record={data} />
    </TopToolbar>
)

export const UserShow = props => (
    <Show actions={<ActionButton />} {...props}>
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