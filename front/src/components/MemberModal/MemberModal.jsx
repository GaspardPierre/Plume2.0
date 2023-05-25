import React, { useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";





export default function MemberModal({member,onRoleChange}) {
    const {id} = member;
    const [show, setShow] = useState(false);
    const[role, setRole] = useState(member.role);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        onRoleChange(id, {role: role });
        
        handleClose();
    }

        return (
            <>
              <FontAwesomeIcon icon={faPencilAlt}
               onClick={handleShow}
               className="edit-role-button" />

        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modifier le rôle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="roleSelect">
                      <Form.Label>Rôle de {member.pseudo}</Form.Label>
                      <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="admin">Admin</option>
                        <option value="visiteur">Visiteur</option>
                      </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Valider
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            </>
          );
        }   
        