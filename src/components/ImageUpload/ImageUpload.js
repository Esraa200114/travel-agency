// Imports Related To React
import React, { Fragment, useState, useRef, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { MdEdit } from "react-icons/md";

// Imports For Icons
import { BiImageAdd } from "react-icons/bi";

// Imports For Styling
import "./ImageUpload.css";

const ImageUpload = (props) => {

    const [file, setFile] = useState();
    const [previewURL, setPreviewURL] = useState();
    const filePickerRef = useRef();

    // useEffect(() => {

    //     if (!file && props.image !== "") {
    //         setPreviewURL(props.image);
    //         return;
    //     }

    //     const fileReader = new FileReader();
    //     fileReader.onload = () => {
    //         setPreviewURL(fileReader.result);
    //     };

    //     fileReader.readAsDataURL(file);

    // }, [file]);

    useEffect(() => {
        if (!props.image) {
            // Reset the preview URL when props.image is empty
            setPreviewURL(null);
            return;
        }

        // props.image is not empty, handle it as before
        if (typeof props.image === 'string') {
            // Handle URL
            setPreviewURL(props.image);
        } else {
            // Handle file object
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setPreviewURL(fileReader.result);
            };
            fileReader.readAsDataURL(props.image);
        }
    }, [props.image]);

    function pickedHandler(event) {
        let pickedFile;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            props.onImagePick(pickedFile);
        }
    }

    function pickedImageHandler() {
        filePickerRef.current.click();
    }

    return (
        <Fragment>
            {/* Image */}
            <div className="upload-image my-1">
                {previewURL && <img id='currentImage' src={previewURL} alt="preview" width="100%" height="278px" />}
                <input ref={filePickerRef} className="form-control d-none" type="file" accept=".jpg, .png, .jfif, .jpeg" id="imageFile" onChange={pickedHandler} />
                {!previewURL && <button type="button" className="choose-image-button w-100" onClick={pickedImageHandler}>
                    <div>
                        <BiImageAdd size={60} color="#dee2e6" />
                        <p className="my-3 fs-5">Upload an Image</p>
                    </div></button>}
                {previewURL && <Button className="edit-image-button" type="button" onClick={pickedImageHandler}>
                    <MdEdit size={24} color="#FFFFFF" /></Button>}
            </div>
        </Fragment>
    );
}

export default ImageUpload;