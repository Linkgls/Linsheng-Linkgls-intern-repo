// src/components/ContactForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  // initialize formik
  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required'),  // required Name
      email: Yup.string()
        .email('Invalid email address') // invalid Email
        .required('Email is required')  // required Email
    }),
    onSubmit: (values) => {
      // execute when form is submitted
      alert(`Form submitted:\nName: ${values.name}\nEmail: ${values.email}`);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          id="name" 
          name="name" 
          type="text" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name} 
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email} 
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
