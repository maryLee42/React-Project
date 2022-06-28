import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';

function Popup({ open, setPopup, title }) {
    const handleClose = () => {
        setPopup({ open: false });
        
    }

    return(
        <>
            <Modal show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>취소</Button>
                    <Button variant="primary" onClick={handleClose}>확인</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup;