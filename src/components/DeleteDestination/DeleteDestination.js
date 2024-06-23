// Imports Related To React
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

// Imports For Icons
import { MdDelete } from "react-icons/md";
import { useDestinationHandlers } from '../../pages/Dashboard/useDestinationHandlers';

// Import For Components
import HotStaysItem from '../HotStays/HotStaysItem.js/HotStaysItem';

// Imports For Styling
import "./DeleteDestination.css";

const DeleteDestination = (props) => {

    const [show, setShow] = useState(false);
    const { deleteDestinationHandler } = useDestinationHandlers();

    const { id, image, city, rating, side, startingDate, endingDate, description, isFavourite } = props.destination;

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => setShow(true);

    const deleteDestinationFormHandler = () => {
        deleteDestinationHandler(id);
        handleClose();
    }

    return (
        <React.Fragment>
            <button className='delete-button btn fs-6 fw-bold' onClick={handleShow}>
                <div className='d-flex'>
                    <MdDelete className="delete-icon" size={24} />
                    <span className='ms-1'>Delete</span>
                </div>
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className='delete-modal-title fw-semibold'>Delete Destination</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='delete-modal-body fw-normal my-3 text-center fs-5'>Are you sure you want to delete this destination?</p>
                    <div className="col-7 mx-auto my-5">
                        <HotStaysItem key={id} image={image} title={city} description={description} endingDate={endingDate} startingDate={startingDate} isFavourite={isFavourite} rating={rating} side={side} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='delete-modal-negative-button btn fw-bold' onClick={handleClose}>No</button>
                    <button className="delete-modal-positive-button btn fw-bold" onClick={deleteDestinationFormHandler}>Yes</button>
                </Modal.Footer>
            </Modal >
        </React.Fragment>
    );
}

export default DeleteDestination;