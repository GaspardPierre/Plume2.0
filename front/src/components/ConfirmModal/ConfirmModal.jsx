import React, { useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


export default function ConfirmModal({ onClose }) {


    const handleSubmit = (event) => {
        event.preventDefault();
        onClose();
    }
  return (
    <>
 
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Button variant="primary" type="submit">
            Oeuvre ajoutée !
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  </>
  );
}
