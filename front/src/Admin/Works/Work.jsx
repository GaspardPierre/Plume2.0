import useLabels from "../../hooks/useLabels";
import { RichTextInput } from "ra-input-rich-text";
import {
  SelectArrayInput,
  Filter,
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  Create,
  required,
  AutocompleteArrayInput,
  FileInput,
  ImageField,
 DateField,
  ShowButton,
  TopToolbar,
  CreateButton,
  
} from "react-admin";

import "./Work.scss";


export const WorkListActions = (props) => {
  return (
    <TopToolbar>
      <CreateButton label="Create Work" className="mobile" />
    </TopToolbar>
  );
};


//function to validate the input : number
const validateNumber = (value) => {
  const pattern = /^[0-9]+$/;
  if (!pattern.test(value)) {
    return "Le tag doit être un nombre";
  }
  return undefined;
};

// WorkList Component
const WorkFilter = (props) => (
  <Filter {...props}>
    <TextInput
      label="Entrez un numéro de catégories"
      source="labelId"
      validate={validateNumber}
    />

    <TextInput
   
      label="Rechercher par titre"
      source="title" 
      alwaysOn
    />
 
  
  </Filter>
);

export const WorkList = (props) => {



   
    return (
      <List {...props} filters={<WorkFilter />} actions={<WorkListActions />} sort={{ field: 'id', order: 'DESC' }}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
  
          <EditButton basePath="/work" />
        <ShowButton basePath="/work" /> 
        <DeleteButton basePath="/work" />
        
        </Datagrid>
      </List>
    );
  };

// WorkEdit Component
export const WorkEdit = (props) => {
  const labels = useLabels();

  return (
    <Edit title="Edit Work" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput source="author" />
        <TextInput source="content" />
        <NumberInput
          source="member_id"
          validate={[required()]}
          className="form-control"
        />
        <AutocompleteArrayInput
          label="Ajouter un label"
          source="labelIds"
          choices={labels}
          optionText="name"
          optionValue="id"
          translateChoice={false}
          fullWidth
        />
      </SimpleForm>
    </Edit>
  );
};

// WorkCreate Component
export const WorkCreate = (props) => {
  const labels = useLabels();
  return (
    <Create title="Create a Work" {...props}>
      <SimpleForm>
        <div className="row">
   
          <div className="col-12 col-md-12">
            <TextInput
              source="title"
              validate={[required()]}
              className="form-control"
              fullWidth
            />
          </div>
          <div className="col-12 col-md-12">
            <TextInput
              source="author"
              validate={[required()]}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <RichTextInput
              label="Contenu du poème"
              source="content"
              validate={[required()]}
              className="form-control rounded rich-text-input-responsive"
              multiline
              fullWidth
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12">
            <FileInput
              source="picture"
              label="Images"
              accept="image/*"
              multiple={false}
            >
              <ImageField source="src" title="title" />
            </FileInput>
          </div>
     
          <div className="col-12 col-md-6">
            <SelectArrayInput
              label="Labels"
              source="labelIds"
              choices={labels}
            />
          </div>
          <div className="col-12 col-md-6">
            <NumberInput
              source="member_id"
              validate={[required()]}
              className="form-control"
            />
          </div>
        </div>
      </SimpleForm>
    </Create>
  );
};
