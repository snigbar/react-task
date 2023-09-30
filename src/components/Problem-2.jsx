import React, { useEffect, useState } from 'react';
import ModalContact from './Modal/ModalContact';


const Problem2 = () => {

    const [data, setData] = useState(null)
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState("All")
  

    useEffect(() => {
        fetch("https://contact.mediusware.com/api/contacts/")
          .then(res => res.json())
          .then(apiData => {
            const contactData = apiData.results;
            setData(contactData)
        
            
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }, []);


    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
                
                <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-lg btn-outline-primary" type="button" 
                onClick={() => {
                    setModalShow(true)
                    setData(data)
                    setShow("All")
                }}
                >All Contacts</button>
                <button className="btn btn-lg btn-outline-warning" type="button"
                  onClick={() => {
                    setModalShow(true)
                    setData(data.filter(val => val.country?.name === "United States"))
                    setShow("US")
                }}
                >US Contacts</button>
                </div>

                {/* modals */}

    

                <ModalContact
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={data}
                view ={show}
                />

                
            </div>
        </div>
    );
};

export default Problem2;