// Admin/Members/Member.jsx
import { List, Datagrid, TextField, EditButton, DeleteButton,SimpleForm,Create, TextInput, Edit } from 'react-admin';
// MemberList Component
export const MemberList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='pseudo' />
                <TextField source='email' />
                <TextField source='role' />
                <EditButton basePath='/member' />
                <DeleteButton basePath='/member' />
            </Datagrid>
        </List>
    );
};

// MemberEdit Component
export const MemberEdit = (props) => {
    return (
        <Edit title='Edit Member' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='pseudo' />
                <TextInput source='email' />
                <TextInput source='role' />
            </SimpleForm>
        </Edit>
    );
};
// MemberCreate Component
export const MemberCreate = (props) => {
    return (
        <Create title='Create a Member' {...props}>
            <SimpleForm>
                <TextInput source='pseudo' />
                <TextInput source='email' />
                <TextInput source='role' />
            </SimpleForm>
        </Create>
    );
};
