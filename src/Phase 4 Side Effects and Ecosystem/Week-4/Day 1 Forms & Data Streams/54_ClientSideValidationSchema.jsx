import React, { useState } from 'react';

const ClientSideValidationSchema = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Validation passed. Submitting payload:', formData);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '300px' }}>
      <h2>Secure Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '6px', border: errors.username ? '1px solid red' : '1px solid #ccc' }}
          />
          {errors.username && <small style={{ color: 'red' }}>{errors.username}</small>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block' }}>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '6px', border: errors.email ? '1px solid red' : '1px solid #ccc' }}
          />
          {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        </div>

        <button type="submit" style={{ padding: '6px 12px', cursor: 'pointer' }}>
          Validate & Submit
        </button>
      </form>
    </div>
  );
};

export default ClientSideValidationSchema;