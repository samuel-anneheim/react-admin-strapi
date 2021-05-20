import React from 'react';
import { List, Datagrid, TextField, ShowButton, EditButton } from 'react-admin';

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nom" />
            <TextField source="prenom" />
            <TextField source="age" />
            <ShowButton basePath="/clients" label="" record={props} />
            <EditButton />
        </Datagrid>
    </List>
);