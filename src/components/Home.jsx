import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { deleteAdettails, getAllDetails, uploadDetails } from '../services/allAPI';
function Home() {
   const [details,setDetails] = useState({
    id:"",name:"",salary:"",phone:""
   })
   const [alldetails,setAllDetails] = useState([])
   const getAllUploadedDetails = async ()=>{
    const {data} = await getAllDetails()
    setAllDetails(data)
   }
   useEffect(()=>{
    getAllUploadedDetails()
   },[alldetails])
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //console.log(details);
  const handleUpload = async ()=>{
     const {id,name,salary,phone} = details
     if(!id ||!name ||!salary ||!phone){
      alert("Please fill the form completely")
     }else{
      const response = await uploadDetails(details)
      console.log(response);
      if(response.status>=200 && response.status<300){
        alert(`'${response.data.name}' details uploaded successfuly!!!`)
        handleClose()
      }else{
        alert("upload Failed...Please try again later..!")
      }
     }
  }

  const handleDelete = async (id)=>{
     deleteAdettails(id)
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <table className='table mt-5 mb-5 container bg-secondary'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Salary</th>
                <th>Phone No.</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
              alldetails.length>0?
              alldetails.map(item=>(
                <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.salary}</td>
                <td>{item.phone}</td>
                <td><button onClick={()=>handleDelete(item?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
              )): <p className='fw-bolder fs-5 text-danger'>Nothing To Display!!!</p>
            }
        </tbody>
        </table>
        <button style={{marginRight:'-80%'}} onClick={handleShow} className='btn btn-success'>Add</button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Following Details...!!</p>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Employee Id" onChange={(e)=>setDetails({...details,id:e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Employee Name" onChange={(e)=>setDetails({...details,name:e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="number" placeholder="Enter Salary" onChange={(e)=>setDetails({...details,salary:e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="number" placeholder="Phone No." onChange={(e)=>setDetails({...details,phone:e.target.value})}/>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload}  className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}

export default Home