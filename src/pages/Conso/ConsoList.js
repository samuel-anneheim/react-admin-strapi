import { Datagrid, EditButton, List, ShowButton, TextField } from 'ra-ui-materialui';
import React from 'react';

export const ConsoList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="mois" />
            <TextField source="type" />
            <TextField source="valeur" />
            <TextField label="Nom" source="client.nom" />
            <TextField label="Prenom" source="client.prenom" />
            <ShowButton basePath="/consommations" label="Plus" record={props} />
            <EditButton />
        </Datagrid>
    </List>
)