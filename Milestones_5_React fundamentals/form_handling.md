# Handling Forms with Formik

## Code to handle forms with Formik

```javascript
// src/components/ContactForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  // initialize formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"), // required Name
      email: Yup.string()
        .email("Invalid email address") // invalid Email
        .required("Email is required"), // required Email
    }),
    onSubmit: (values) => {
      // execute when form is submitted
      alert(`Form submitted:\nName: ${values.name}\nEmail: ${values.email}`);
    },
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
          <div style={{ color: "red" }}>{formik.errors.name}</div>
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
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
```

## Reflection

- **How does Formik simplify form management compared to handling state manually?**
  Formik eliminates manual tracking of input values, errors, and submission logic. It provides hooks/components to auto-update form states, reducing repetitive code (e.g., no need for individual useState per field). Complex forms become manageable through unified APIs.

- **What are the benefits of using Formik’s validation instead of writing validation logic manually?**
  Formik integrates Yup to define validation rules declaratively (e.g., password: Yup.string().min(8)). Errors auto-sync with form fields, trigger on user interactions (change/blur), and reduce validation code duplication compared to manual onSubmit checks.
