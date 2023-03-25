import React from 'react'
import './EditPopUp.css'
import { TextField } from '@mui/material';

export default function EditPopUp({open, onClose}) {

    if (!open) return null

    return (
        <>
        <div className="overlay" onClick={onClose} />

        <div className="edit-popup">
            <content className='content-container'>
                <h3>Enter your name</h3>
                <TextField 
                    id="standard-basic" 
                    label="Username" 
                    variant="standard" 
                    style={{width: '270px'}}
                    defaultValue="Anna"
                />
                <h3>Enter your phone number</h3>
                <TextField 
                    id="standard-basic" 
                    label="Phone number" 
                    variant="standard" 
                    style={{ color: 'black', width: '270px'}}
                    defaultValue="+358 025203121"
                />
                <div className='cta'>
                    <h4 className="ctaBtn" onClick={onClose}>Cancel</h4>
                    <h4 className="ctaBtn" >Save</h4>
                </div>
            </content>
        </div>

        </>
    )
}
