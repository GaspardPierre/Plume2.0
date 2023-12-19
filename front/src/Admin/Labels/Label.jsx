import { List, Datagrid, TextField, EditButton, DeleteButton, Edit, SimpleForm, TextInput, NumberInput, Create , required } from 'react-admin';
import TextareaAutosize from 'react-textarea-autosize';
// LabelList Component
export const LabelList = (props) => {



    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='tag' />
                <EditButton basePath='/label' />
                <DeleteButton basePath='/label' />
            </Datagrid>
        </List>
    );
};

// LabelEdit Component

export const LabelEdit = (props) => {
    console.log(props)
    return (
        <Edit title='Edit Label' {...props}>
            {console.log(props,"PROPS")}
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='tag' validate={[required()]}  />

        
            </SimpleForm>
        </Edit>
    );
};

// LabelCreate Component
export const LabelCreate = (props) => {
    return (
        <Create title='Create a Label' {...props}>
            <SimpleForm>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <TextInput source='tag' validate={[required()]}  className="form-control" />
                        </div>
                      
                    </div>
                </div>
            </SimpleForm>
        </Create>
    );
};