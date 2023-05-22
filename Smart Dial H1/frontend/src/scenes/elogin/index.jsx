import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Login = ({ history }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", values);
      const token = response.data.token;
      // Store the token in local storage or a state management solution of your choice
      localStorage.setItem("token", token);
      // Redirect the user to the desired page after successful login
      history.push("/employeedashboard");
    } catch (error) {
      console.error("Error during login:", error);
      // Display an error message to the user
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;