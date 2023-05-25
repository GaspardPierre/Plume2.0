import React, { useCallback, useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome} from "@fortawesome/free-solid-svg-icons";
import { getAllMembers , deleteMember} from "../../reducers/member";
import MemberList from "../MemberList/MemberList";
import LogoutButton from "../LogoutButton/LogoutButton";
import "./AdminMember.scss";

// Composant AdminMember
 export default function AdminMember() {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  
  // handle delete member
  const [memberDeleted, setMemberDeleted] = useState(false);
  const onDeleteMember = useCallback ((id) => {
    console.log(`id: ${id}`);
   
     dispatch(deleteMember(parseInt(id)));
    setMemberDeleted(true);
    },
    [dispatch]
  );

  useEffect(() => {
    try {
      dispatch(getAllMembers());
      setMemberDeleted(false);
    } catch (error) {
      console.log(error);
    }
  }, [memberDeleted]);

  

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
    <> 
    <div className="d-flex justify-content-around mt-3 w80">
    <Link to="/" className="nav_link">
    <FontAwesomeIcon icon={faHome} color="rgb(224, 176, 72)" size="2x"  /> Accueil
    </Link>
    

   < LogoutButton />
  </div>
    <div  className="d-flex justify-content-center align-items-center vh-100 w-80">
   
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
    </>
  );

 }

