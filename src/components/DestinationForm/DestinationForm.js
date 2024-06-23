// Imports Related To React
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { MdAdd, MdEdit } from "react-icons/md";

// Imports For Components
import ImageUpload from '../ImageUpload/ImageUpload';

// Imports Related To Firebase
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { deleteImageFromFirebaseStorage } from '../../firebase';

// Imports For Custom Hook
import { useDestinationHandlers } from '../../pages/Dashboard/useDestinationHandlers';

import "./DestinationForm.css";

function DestinationForm({ isEditing, destination }) {

    const [file, setFile] = useState("");
    const [show, setShow] = useState(false);
    const [per, setPerc] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [errors, setErrors] = useState({});

    const isFavoriteCheckboxRef = useRef();
    const ratingInputRef = useRef();
    const cityInputRef = useRef();
    const sideInputRef = useRef();
    const startingDateInputRef = useRef();
    const endingDateInputRef = useRef();
    const descritpionInputRef = useRef();

    const { editDestinationHandler, addDestinationHandler } = useDestinationHandlers();

    useEffect(() => {
        if (isEditing) {
            setFile(destination.image);
        } else {
            setFile("");
        }
    }, [isEditing, destination]);

    const handleClose = () => {
        setFile("");
        setErrors({});
        setShow(false);
    };

    const handleShow = () => setShow(true);

    const updateRatingOutput = () => {
        const ratingInput = document.getElementById('ratingInput');
        const ratingOutput = document.getElementById('ratingOutput');
        ratingOutput.textContent = ratingInput.value;
    };

    const handleImagePick = (pickedFile) => {
        setFile(pickedFile);
    };

    const formHandler = (event) => {
        event.preventDefault();

        const validationErrors = {};

        if (!file) {
            validationErrors.image = "Please choose an image before submitting.";
        }

        if (!cityInputRef.current.value) {
            validationErrors.city = "Please provide the city name.";
        }

        if (!sideInputRef.current.value) {
            validationErrors.side = "Please provide the side text.";
        }

        if (!startingDateInputRef.current.value) {
            validationErrors.startingDate = "Please pick a starting date."
        } else if (startingDateInputRef.current.value > endingDateInputRef.current.value) {
            validationErrors.startingDate = "Starting date shouldn't be greater than ending date.";
        }

        if (!endingDateInputRef.current.value) {
            validationErrors.endingDate = "Please pick an ending date.";
        } else if (endingDateInputRef.current.value <startingDateInputRef.current.value) {
            validationErrors.endingDate = "Ending date shouldn't be less than starting date.";
        }

        if (!descritpionInputRef.current.value) {
            validationErrors.description = "Please provide the description of the destination.";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            const formData = {
                isFavourite: isFavoriteCheckboxRef.current.checked,
                rating: ratingInputRef.current.value,
                city: cityInputRef.current.value,
                side: sideInputRef.current.value,
                startingDate: startingDateInputRef.current.value,
                endingDate: endingDateInputRef.current.value,
                description: descritpionInputRef.current.value
            };

            const handleUploadSuccess = (downloadURL) => {
                if (isEditing) {
                    if (downloadURL !== destination.image) {
                        deleteImageFromFirebaseStorage(destination.image);
                    }
                    editDestinationHandler({ ...formData, image: downloadURL }, destination.id);
                } else {
                    addDestinationHandler({ ...formData, image: downloadURL });
                }
                handleClose();
                setIsUploading(false);
            };

            if (file && file !== destination.image) {
                const name = new Date().getTime() + file.name;
                const storageRef = ref(storage, name);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        setPerc(progress);
                        setIsUploading(true);
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            handleUploadSuccess(downloadURL);
                        });
                    }
                );
            } else {
                handleUploadSuccess(destination.image);
            }
        }
    };

    return (
        <React.Fragment>
            <button className={isEditing ? 'edit-button btn fs-6 fw-bold' : 'add-destination-button fw-bold p-3'} onClick={handleShow}>
                <div className='d-flex justify-content-center align-items-center'>
                    {isEditing ? <MdEdit className="edit-icon" size={24} /> : <MdAdd size={24} />}
                    <span className='ms-1'>{isEditing ? 'Edit' : 'Add A New Destination'}</span>
                </div>
            </button>

            <Modal
                className={isEditing ? 'edit-modal' : 'add-modal'}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                {(isUploading || (per > 0 && per < 100)) && (
                    <div className={`spinner-wrapper ${isUploading ? "d-flex justify-content-center align-items-center" : "d-none"}`}>
                        <div className='spinner d-flex flex-column align-items-center'>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className='spinner-text my-3'>Loading...</p>
                        </div>
                    </div>
                )}
                <div className='modal-form'>
                    <Modal.Header closeButton>
                        <Modal.Title className="edit-modal-title fw-medium">Destination Details Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="destination-details-form" onSubmit={formHandler} >

                            {/* Image */}
                            <ImageUpload image={file} onImagePick={handleImagePick} />
                            {errors.image && <span className='validation-error'>{errors.image}</span>}

                            {/* Rating */}
                            <div className="rating-input-group input-group mt-3 d-flex justify-content-between align-items-center fs-5">
                                <span className="input-group-text">Rating</span>
                                <input ref={ratingInputRef} className="form-range w-50" defaultValue={isEditing ? destination.rating : 1} type="range" id="ratingInput" name="ratingInput" min="1" max="10" step="0.1" onChange={updateRatingOutput} />
                                <output htmlFor="ratingInput" id="ratingOutput">{isEditing ? destination.rating : 1}</output>
                            </div>

                            {/* City */}
                            <div className="city-input-group input-group mt-3">
                                <span className="input-group-text">City</span>
                                <input ref={cityInputRef} type="text" defaultValue={isEditing ? destination.city : ""} aria-label="City" className="form-control" />
                            </div>
                            {errors.city && <span className='validation-error d-block'>{errors.city}</span>}

                            {/* Side */}
                            <div className="side-input-group input-group mt-3">
                                <span className="input-group-text">Side</span>
                                <input ref={sideInputRef} type="text" defaultValue={isEditing ? destination.side : ""} aria-label="Side" className="form-control" />
                            </div>
                            {errors.side && <span className='validation-error d-block'>{errors.side}</span>}

                            {/* Starting Date */}
                            <div className="starting-date-input-group input-group mt-3">
                                <span className="input-group-text">Starting Date</span>
                                <input ref={startingDateInputRef} type="date" defaultValue={isEditing ? destination.startingDate : ""} className="form-control" id="startingDateInput" name="startingDateInput" />
                            </div>
                            {errors.startingDate && <span className='validation-error d-block'>{errors.startingDate}</span>}

                            {/* Ending Date */}
                            <div className="ending-date-input-group input-group mt-3">
                                <span className='input-group-text'>Ending Date</span>
                                <input ref={endingDateInputRef} type="date" defaultValue={isEditing ? destination.endingDate : ""} className="form-control" id="endingDateInput" name="endingDateInput" />
                            </div>
                            {errors.endingDate && <span className='validation-error d-block'>{errors.endingDate}</span>}

                            {/* Description */}
                            <div className="description-input-group input-group mt-3">
                                <span className="input-group-text">Description</span>
                                <textarea ref={descritpionInputRef} id="descriptionTextArea" defaultValue={isEditing ? destination.description : ""} className="form-control" aria-label="Description"></textarea>
                            </div>
                            {errors.description && <span className='validation-error d-block'>{errors.description}</span>}

                            {/* Add To Favourites */}
                            <div className="add-to-favourites-input-group my-3 d-flex justify-content-start align-items-center">
                                <input ref={isFavoriteCheckboxRef} className="add-to-favourites-button" defaultChecked={isEditing ? destination.isFavourite : false} type="checkbox" id="favoriteCheckbox" name="favoriteCheckbox" />
                                <label htmlFor="favoriteCheckbox" className='ms-3'>Add to Favorites</label>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="edit-modal-negative-button btn fw-bold" onClick={handleClose}>Close</button>
                        <button className="edit-modal-positive-button btn fw-bold" form="destination-details-form">{isEditing ? 'Update' : 'Add'}</button>
                    </Modal.Footer>
                </div>
            </Modal >
        </React.Fragment >
    );
}

export default DestinationForm;
