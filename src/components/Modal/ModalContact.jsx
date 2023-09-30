import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import DetailsModal from './detailsModal';



const ModalContact = (props) => {

  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [detailsData, setDetailsData] = useState(null)
  const handleClose = () => setShowDetailsModal(false);
  const handleShow = () => setShowDetailsModal(true);
  const [data, setData] = useState(null)


const view = props.view
const allData= props.data

useEffect(() => {
  if(checked) setData(allData.filter(val => val.id % 2 === 0))
  else setData(allData)
},[allData,checked])

  
  return (
    <div>
   {detailsData && <DetailsModal show={showDetailsModal} handleClose={handleClose} data={detailsData}></DetailsModal>}

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

                          {data.map(val => <tr key={val.id}>
                            <th scope="col">{val.country.name}</th>
                            <th scope="col">{val.phone}</th>
                            <th scope="col">
                            <Button 
                            variant='primary' 
                            onClick={() => {
                            handleShow();
                            setDetailsData(data.find(item => item.id === val.id))
                            }}
                            >View Details
                            </Button>
                            </th>
                        </tr>)}
                       
                        </tbody>
                    </table>
      </Modal.Body>
      <Modal.Footer>
      <input type="checkbox" id='check' aria-label="Checkbox for following text input" name="checkbox" onChange={() => setChecked(!checked)}/>
      <label htmlFor='check'>check the box for even</label>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
}
    
    </div>
  )
}

export default ModalContact