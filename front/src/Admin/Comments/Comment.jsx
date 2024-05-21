
import { List, Datagrid, TextField, EditButton, DeleteButton, SimpleForm , Edit, TextInput, NumberInput,Filter} from 'react-admin';


export const CommentList = (props) => {
    return (
        <List filters ={<WorkFilter />} {...props}>
            <Datagrid>
                <TextField source='content' />
                <TextField source='member_id' />
                <TextField source='work_id' />
                <EditButton basePath='/comment' />
                <DeleteButton basePath='/comment' />
            </Datagrid>
        </List>
    );
};


export const CommentEdit = (props) => {
    return (
        <Edit title='Edit Comment' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='content' />
                <NumberInput source='member_id' />
                <NumberInput source='work_id' />
            </SimpleForm>
        </Edit>
    );
};

 export const WorkFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Work ID" source="workId" alwaysOn />
    </Filter>
);
