import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import MemberList from "../MemberList/MemberList";
import MemberSearch from "../MemberSearch/MemberSearch";
import MemberModify from "../MemberModify/MemberModify";
import "./AdminMember.scss";

// Composant AdminMember
function AdminMember() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleMemberSelect = (member) => {
    setSelectedMember(member);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Card className="admin-card text-center">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Membres</Card.Title>
        <Card.Text>
          <div>
            <Form.Select onChange={handleSelectChange}>
              <option value="">Sélectionnez une option</option>
              <option value="list">Voir la liste des membres</option>
              <option value="modify">Modifier un membre</option>
            </Form.Select>
            <Button onClick={() => {}}>Valider</Button>
            {selectedOption === "list" && <MemberList />}
            {selectedOption === "modify" && (
              <MemberSearch onSelect={handleMemberSelect} />
            )}
            {selectedMember && <MemberModify member={selectedMember} />}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default AdminMember;
