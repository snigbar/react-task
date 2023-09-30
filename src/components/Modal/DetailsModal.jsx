import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DetailsModal = ({show, handleClose, data}) => {
    
    const {id, country,phone} = data

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
            <div className="row">
            <div className="col">Id: {id}</div>
            <div className="col">Conuntry: {country.name}</div>
            </div>
            <div className="row">
            <div className="col">Phone: {phone}</div>
            <div className="col">Code: {phone.slice(0, 4)}</div>
            </div>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default DetailsModal