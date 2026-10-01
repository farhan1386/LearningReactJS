import React, { useState } from 'react';

const FormSubmissionManagement = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form payload submitted:', formData);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '300px' }}>
      <h2>Account Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '6px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block' }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '6px' }}
          />
        </div>
        <button type="submit" style={{ padding: '6px 12px', cursor: 'pointer' }}>
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default FormSubmissionManagement;