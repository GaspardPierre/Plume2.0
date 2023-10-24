import React , {useEffect}from 'react';
import {  SelectArrayInput,Filter, List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, NumberInput, Create , required } from 'react-admin';
import TextareaAutosize from 'react-textarea-autosize';



//function to validate the input : number
const validateNumber = value => {
    const pattern = /^[0-9]+$/;
    if (!pattern.test(value)) {
        return 'Le tag doit être un nombre';
    }
    return undefined;
};

// WorkList Component
const WorkFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Entrez un numéro de catégories" source="labelId"  validate={validateNumber} />
    </Filter>
);

export const WorkList = (props) => {


    return (
        <List {...props} filters={<WorkFilter />}>
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

    useEffect(() => {
        console.log("Props actuelles :", props);
      }, [props]);
  
    return (
        <Edit title='Edit Work' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='title' validate={[required]} />
                <TextInput source='author' validate={[required]} />
                <TextInput source='content' validate={[required]} />
                <div className="col-md-6">
                            <SelectArrayInput label="Labels" source="labelIds" choices={[
                                { id: '1', name: 'Nature' },
                                { id: '2', name: 'Romantique' },
                                { id: '3', name: 'Engagés' },
                                { id: '4', name: 'Dieu' },
                                { id: '5', name: 'Dialogues Poétiques' },
                           
                            ]} />
                        </div>
        
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
                        <div className="col-md-6">
                            <SelectArrayInput label="Labels" source="labelIds" choices={[
                                { id: '1', name: 'Nature' },
                                { id: '2', name: 'Romantique' },
                                { id: '3', name: 'Engagés' },
                                { id: '4', name: 'Dieu' },
                                { id: '5', name: 'Dialogues Poétiques' },
                                // Add more choices here
                            ]} />
                        </div>
                    </div>
                </div>
            </SimpleForm>
        </Create>
    );
};