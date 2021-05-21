import { CreateButton, ExportButton, ReferenceField, Show, SimpleShowLayout, TextField, TopToolbar } from 'ra-ui-materialui';
import React from 'react';

export const ConsoShow = props => (
    <Show  {...props}>
        <SimpleShowLayout>
            <TextField source="mois" />
            <TextField source="type" />
            <TextField source="client" />
            <ReferenceField label="prenom" source="client" reference="clients">
                <TextField source="prenom" />
            </ReferenceField>
            <ReferenceField label="nom" source="client" reference="clients">
                <TextField source="nom" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
)
