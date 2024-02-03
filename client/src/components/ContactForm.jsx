import React, { useState } from "react";
import "./contactform.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  firstname: "",
  lastname: "",
  email: "@gmail.com",
  phone: "",
  address: "Islamabad, Pakistan",
  country: "Pakistan",
  post: "30453",
  date: "2024-01-01",
};

const validationSchema = Yup.object({
  firstname: Yup.string()
    .min(2, "*Must be at least 2 character")
    .max(25, "*Must be 25 characters or less")
    .required("*Required"),
  lastname: Yup.string()
    .min(2, "*Must be at least 2 characters")
    .max(25, "*Must be 25 characters or less")
    .required("*Required"),
  email: Yup.string().email("*Invalid email address").required("*Required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "*Must be a valid phone number")
    .min(11, "*Must be at least 11 digits")
    .required("*Required"),
  address: Yup.string()
    .min(5, "*write complete adddress")
    .required("*Required"),
  country: Yup.string().required("*Required"),
  post: Yup.string().required("*Required"),
  date: Yup.date().required("*Required"),
});
export const ContactForm = () => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        try {
          const response = await fetch("http://localhost:8090/form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          if (response.ok) {
            console.log("Data posted successfully");
            action.resetForm();
          } else {
            console.error("Failed to post data");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      },
    });
  console.log("errors", errors);
  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="formbold-form-title">
              <h2 className>Contact Form</h2>
            </div>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="firstname" className="formbold-form-label">
                  First name
                </label>

                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={values.firstname}
                  onBlur={handleBlur}
                />
                {errors.firstname && touched.firstname ? (
                  <p className="error-form">{errors.firstname}</p>
                ) : null}
              </div>

              <div>
                <label htmlFor="lastname" className="formbold-form-label">
                  Last name
                </label>

                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={values.lastname}
                  onBlur={handleBlur}
                />
                {errors.lastname && touched.lastname ? (
                  <p className="error-form">{errors.lastname}</p>
                ) : null}
              </div>
            </div>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="email" className="formbold-form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="error-form">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="phone" className="formbold-form-label">
                  Phone number
                </label>

                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={values.phone}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone ? (
                  <p className="error-form">{errors.phone}</p>
                ) : null}
              </div>
            </div>

            <div className="formbold-mb-3">
              <label htmlFor="address" className="formbold-form-label">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="formbold-form-input"
                onChange={handleChange}
                value={values.address}
                onBlur={handleBlur}
              />
              {errors.address && touched.address ? (
                <p className="error-form">{errors.address}</p>
              ) : null}
            </div>
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="country" className="formbold-form-label">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={values.country}
                  onBlur={handleBlur}
                />
                {errors.country && touched.country ? (
                  <p className="error-form">{errors.country}</p>
                ) : null}
              </div>
            </div>
            <div className="formbold-input-flex">
              <div>
                <label for="post" className="formbold-form-label">
                  Post/Zip code
                </label>

                <input
                  type="text"
                  name="post"
                  id="post"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={values.post}
                  onBlur={handleBlur}
                />
                {errors.post && touched.post ? (
                  <p className="error-form">{errors.post}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="date" className="formbold-form-label">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="formbold-form-input"
                  onChange={handleChange}
                  value={values.date}
                  onBlur={handleBlur}
                />
                {errors.date && touched.date ? (
                  <p className="error-form">{errors.date}</p>
                ) : null}
              </div>
            </div>
            <button type="submit" className="formbold-btn">
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
