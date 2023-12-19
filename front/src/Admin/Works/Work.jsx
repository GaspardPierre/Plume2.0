import React, { useEffect, useState } from "react";
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
} from "react-admin";
import useLabels from "../../hooks/useLabels"

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
  return (
    <List {...props} filters={<WorkFilter />}>
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
        < AutocompleteArrayInput 
        label="Ajouter un label"
         source="labelIds"
          choices={labels}
          optionText="name"
          optionValue="id"
          translateChoice={false}
          fullWidth />
      </SimpleForm>
    </Edit>
  );
};

// WorkCreate Component
export const WorkCreate = (props) => {
  const labels = useLabels();
  return (
    <Create title="Create a Work" {...props}>
      <SimpleForm >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <TextInput
                source="title"
                validate={[required()]}
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <TextInput
                source="author"
                validate={[required()]}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <TextInput
                source="content"
                validate={[required()]}
                className="form-control rounded"
                multiline
                fullWidth
              />
            </div>
          </div>
          <div className="row">
           
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
        </div>
      </SimpleForm>
    </Create>
  );
};
