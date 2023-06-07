import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
function ShowSummary({ shows }) {
  const location = useLocation();
  const showId = location.pathname.split('/').pop();
  const show= shows.find(({ show }) => show.id === parseInt(showId));
  const [userData,setUserDate]=useState([])
  const [show1, setShow1] = useState(false);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  
  const handleShow=()=>{
    setShow1(!show1)
  }
  
  const SaveUserDetails=()=>{
    const userDetails={
      "name":name,
      "email":email,
      "phone":phone,
    }
    userData.push(userDetails)
    localStorage.setItem("data",JSON.stringify(userData))
    alert("User Datails are saved into LocalStorage")
    setShow1(!show1);
  }
  
  if (!show) {
    return null; 
  }
  
  return (
    <div className='container'>
     <div className='row'>
      <div className='col-3'>
      <img src={show.show.image.medium} style={{height:"100%"}}/>
      </div>
      <div className='col-9'>
      <h2>{show?.show?.name}</h2>
      <div>{show?.show?.summary}</div>
      <center>
        <div className='btn btn-primary' onClick={handleShow}>Book Show</div>
      </center>
      </div>
     </div>
      <Modal show={show1} onHide={handleShow} >
        <Modal.Header closeButton>
          <Modal.Title>Book Show</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Name</label>
            <label>
              <input type='text' value={name}  onChange={(e)=>setName(e.target.value)}/>
            </label>
            </div>
            <div>
            <label>Email</label>
            <label>
              <input type='email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            </div>
            <div>
            <label>Mobile No</label>
            <label>
              <input type='text' value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
            </label>
            </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className='btn btn-sm' onClick={()=>SaveUserDetails()}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}

export default ShowSummary;
