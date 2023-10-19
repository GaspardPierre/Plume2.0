import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, NumberInput, Create , required } from 'react-admin';
import TextareaAutosize from 'react-textarea-autosize';
// WorkList Component


export const WorkList = (props) => {

    console.log("WorkList est monté", props);

    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='title' />
                <EditButton basePath='/work' />
                <DeleteButton basePath='/work' />
            </Datagrid>
        </List>
    );
};

// WorkEdit Component
export const WorkEdit = (props) => {
    console.log(props)
    return (
        <Edit title='Edit Work' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' validate={[required]} />
                <TextInput source='author' validate={[required]} />
                <TextInput source='content' validate={[required]} />
        
            </SimpleForm>
        </Edit>
    );
};

// WorkCreate Component
export const WorkCreate = (props) => {
    return (
        <Create title='Create a Work' {...props}>
            <SimpleForm>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <TextInput source='title' validate={[required()]}  className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <TextInput source='author' validate={[required()]}  className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <TextInput source='content' validate={[required()]} className="form-control rounded" multiline fullWidth />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <NumberInput source='member_id' validate={[required()]}  className="form-control" />
                        </div>
                    </div>
                </div>
            </SimpleForm>
        </Create>
    );
};