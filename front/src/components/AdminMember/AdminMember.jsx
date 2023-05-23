import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllMembers } from "../../reducers/member";
import MemberList from "../MemberList/MemberList";

import "./AdminMember.scss";

// Composant AdminMember
 export default function AdminMember() {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  const onDeleteMember = async (id) => {
    console.log(`id: ${id}`);
    try{
      const response = await dispatch(deleteMember(id));
    } catch(error) {
      console.log(error);
    }
   
  };

  

  const handleSelectChange = async (event) => {
    setSelectedOption(event.target.value);
    if(event.target.value === "list") {
      try {
      const response = await  dispatch(getAllMembers());
      console.log(`response.payload: ${JSON.stringify(response.payload)}`);
    }catch
    (error) {
      console.log(error);
    } 

  };
}


 
   
  return (
    <div  className="d-flex justify-content-center align-items-center vh-100 wh-60">
   
          <div>
            <Form.Select 
            className="mb-3 "
            onChange={handleSelectChange}>
              <option value=""> Option</option>
              <option value="list">Voir la liste des membres</option>
          
            </Form.Select>
          
            {selectedOption === "list" && 
            <MemberList
            onDeleteMember={onDeleteMember}
           />}
           
          
          </div>
  
    </div>
  );

 }

