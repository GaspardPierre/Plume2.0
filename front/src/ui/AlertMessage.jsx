import { Modal } from 'react-bootstrap';

export default function AlertMessage( {  show, handleClose , title, message}) {
  return (
      <Modal show={show} onHide={handleClose} centered>
<Modal.Header closeButton>
<Modal.Title> {title }</Modal.Title>

</Modal.Header>
<Modal.Body>{message}</Modal.Body>
</Modal>
);
};
 