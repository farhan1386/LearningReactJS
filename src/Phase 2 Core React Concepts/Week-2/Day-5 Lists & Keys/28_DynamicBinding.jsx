import React, { useState, useEffect } from "react";

const CompanyDetailsSelect = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [loadingList, setLoadingList] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("https://json-placeholder.mock.beeceptor.com/companies");
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingList(false);
      }
    };

    fetchCompanies();
  }, []);

  const handleChange = (event) => {
    setSelectedId(event.target.value);
  };

  const selectedCompany = companies.find((company) => String(company.id) === selectedId);

  // Styled Loading State centered in the dashboard context
  if (loadingList) {
    return (
      <div className="company-dashboard loading-state">
        <div className="spinner"></div>
        <p>Loading companies list...</p>
      </div>
    );
  }

  return (
    <div className="company-dashboard">
      <div className="selector-section">
        <label htmlFor="company-dropdown" className="dashboard-label">
          Select a company:
        </label>
        
        <div className="select-wrapper">
          <select 
            id="company-dropdown" 
            className="dashboard-select"
            value={selectedId} 
            onChange={handleChange}
          >
            <option value="" disabled>-- Select a company --</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedCompany && (
        <div className="details-card">
          <div className="card-header">
            <h3 className="company-title">{selectedCompany.name}</h3>
            <span className="company-badge">ID: {selectedCompany.id}</span>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Industry</span>
              <span className="info-value">{selectedCompany.industry}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Market Cap</span>
              <span className="info-value">${Number(selectedCompany.marketCap).toLocaleString()}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Employees</span>
              <span className="info-value">{Number(selectedCompany.employeeCount).toLocaleString()}</span>
            </div>
            <div className="info-item">
              <span className="info-label">CEO</span>
              <span className="info-value">{selectedCompany.ceoName}</span>
            </div>
          </div>

          <div className="address-section">
            <span className="info-label">Headquarters</span>
            <p className="address-text">
              {selectedCompany.address}, {selectedCompany.zip}, {selectedCompany.country}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetailsSelect;
