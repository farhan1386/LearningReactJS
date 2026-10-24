import React, { useState } from 'react';

const FileUploadManagement = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadStatus('Please select a valid file first.');
      return;
    }

    setUploadStatus('Uploading binary stream...');

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('https://typicode.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Network payload rejected');

      setUploadStatus(`Success: ${selectedFile.name} transfer confirmed.`);
    } catch (error) {
      setUploadStatus('Multipart boundary data submission failed.');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '350px', border: '1px solid #ddd' }}>
      <h3>Storage Upload Registry</h3>
      <form onSubmit={handleUpload}>
        <div style={{ marginBottom: '15px' }}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit" style={{ padding: '6px 12px', cursor: 'pointer' }}>
          Execute Stream Transmission
        </button>
      </form>
      {uploadStatus && (
        <p style={{ marginTop: '10px', fontSize: '13px', color: '#555' }}>
          {uploadStatus}
        </p>
      )}
    </div>
  );
};

export default FileUploadManagement;