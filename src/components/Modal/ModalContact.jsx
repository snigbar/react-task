import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import DetailsModal from './detailsModal';



const ModalContact = (props) => {

  const [show, setShow] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const handleClose = () => setShowDetailsModal(false);
  const handleShow = () => setShowDetailsModal(true);


  const data = props.data
  const view = props.view
 
console.log(data)
  return (
    <div>
 <DetailsModal show={showDetailsModal} handleClose={handleClose}></DetailsModal>

   {data && <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {view === 'US'? "US Contacts": "All Contacts"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Details</th>
                        </tr>
                        </thead>
                        <tbody>

                          {data.map(val =>  <tr key={val.id}>
                            <th scope="col">{val.country.name}</th>
                            <th scope="col">{val.phone}</th>
                            <th scope="col"><Button variant='primary' onClick={handleShow}>View Details</Button></th>
                        </tr>)}
                       
                        </tbody>
                    </table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
}
    
    </div>
  )
}

export default ModalContact