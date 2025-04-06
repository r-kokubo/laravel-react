import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    parent_name: "",
    student_name: "",
    student_age: "",
    birthday: "",
    address: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="parent_name" placeholder="Parent Name" onChange={handleChange} />
      <input type="text" name="student_name" placeholder="Student Name" onChange={handleChange} />
      <input type="number" name="student_age" placeholder="Student Age" onChange={handleChange} />
      <input type="date" name="birthday" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
