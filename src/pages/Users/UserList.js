import React from 'react';
import { List, Datagrid, TextField, ShowButton, EditButton, CreateButton, ExportButton, TopToolbar } from 'react-admin';

const ActionButton = ({basePath, data }) =>(
    <TopToolbar>
        <CreateButton label="Creer" basePath={basePath} record={data} />
        <ExportButton label="Exporter" basePath={basePath} record={data} />
    </TopToolbar>
)

export const UserList = (props) => (
    <List actions={<ActionButton />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nom" />
            <TextField source="prenom" />
            <TextField source="age" />
            <ShowButton basePath="/clients" label="Detail" record={props} />
            <EditButton label="Modifier"/>
        </Datagrid>
    </List>
);