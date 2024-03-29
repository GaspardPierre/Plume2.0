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
  useListController,
  
} from "react-admin";

import "./Work.scss";

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
  </Filter>
);

export const WorkList = (props) => {
  const {
    data,
    page,
    setPage,
    perPage,
    // ... autres propriétés et méthodes retournées par useListController
  } = useListController();

  return (
   
    <List {...props} 

    filters={<WorkFilter />}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <EditButton basePath="/work" />
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
          <div className="col-md-12">
            <TextInput
              source="title"
              validate={[required()]}
              className="form-control"
              fullWidth
            />
          </div>
          <div className="col-md-12">
            <TextInput
              source="author"
              validate={[required()]}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
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
          <FileInput
            source="picture"
            label="Images"
            accept="image/*"
            multiple={false}
          >
            <ImageField source="src" title="title" />
          </FileInput>

          <div className="col-md-6">
            <SelectArrayInput
              label="Labels"
              source="labelIds"
              choices={labels}
            />
          </div>
          <div className="col-md-6">
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
