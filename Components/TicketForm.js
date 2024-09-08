// src/components/TicketForm.js

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Layout from './Layout';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    image: null,
  });

  const onDrop = (acceptedFiles) => {
    setFormData({
      ...formData,
      image: acceptedFiles[0],
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to the backend
    console.log('Form data submitted:', formData);
  };

  return (
    <>
    <Layout/>
        <div className='container'>
    <form action="" className='inputs' onSubmit={handleSubmit}>
      <div>
        <div className='input'>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder='Description Of Damage'
        /></div>
      </div>
      <div className='input'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select one</p>
        {formData.image && <p>{formData.image.name}</p>}
      </div></div>
        <div className='submit-container'>
      <button type="submit">Submit Ticket</button>
      </div>
    </form>
    </div>
    </>
  );
};

export default TicketForm;
