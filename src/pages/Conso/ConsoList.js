import { CreateButton, Datagrid, EditButton, ExportButton, List, ShowButton, TextField, TopToolbar } from 'ra-ui-materialui';
import React from 'react';

const ActionButton = ({basePath, data }) =>(
    <TopToolbar>
        <CreateButton label="Creer" basePath={basePath} record={data} />
        <ExportButton label="Exporter" basePath={basePath} record={data} />
    </TopToolbar>
)

export const ConsoList = props => (
    <List actions={<ActionButton />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="mois" />
            <TextField source="type" />
            <TextField source="valeur" />
            <TextField label="Nom" source="client.nom" />
            <TextField label="Prenom" source="client.prenom" />
            <ShowButton basePath="/consommations" label="Detail" record={props} />
            <EditButton label="Modifier"/>
        </Datagrid>
    </List>
)