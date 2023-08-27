import React, { useState } from 'react';
import axios from 'axios';

const LoanApplication = () => {
    const [formData, setFormData] = useState({
        borrowerName: '',
        phoneNumber: '',
        bvnNumber: '',
        loanAmount: 0,
        interest: 0,
        loanTenure: 0,
        loanRepaymentType: 0,
        frequency: '',
        loanProductCode: '',
        loanPurpose: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Make the API request to create the loan
        axios
            .post('https://localhost:7048/Loan/LoanCreation', formData)
            .then((response) => {
                console.log('Loan created successfully:', response.data);
                // Handle success behavior, e.g., show a success message or navigate to another page
                
            })
            .catch((error) => {
                console.error('Failed to create loan:', error);
                // Handle error behavior, e.g., show an error message
            });
    };

    return (
        <div className="container">
            <h1>Loan Application</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="borrowerName" className="form-label">
                             Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="borrowerName"
                            name="borrowerName"
                            value={formData.borrowerName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="bvnNumber" className="form-label">
                            BVN Number
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="bvnNumber"
                            name="bvnNumber"
                            value={formData.bvnNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="loanAmount" className="form-label">
                            Loan Amount
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="loanAmount"
                            name="loanAmount"
                            value={formData.loanAmount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="interest" className="form-label">
                            Interest
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="loanTenure" className="form-label">
                            Loan Tenure
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="loanTenure"
                            name="loanTenure"
                            value={formData.loanTenure}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="loanRepaymentType" className="form-label">
                            Loan Repayment Type
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="loanRepaymentType"
                            name="loanRepaymentType"
                            value={formData.loanRepaymentType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="frequency" className="form-label">
                            Frequency
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="frequency"
                            name="frequency"
                            value={formData.frequency}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="loanProductCode" className="form-label">
                            Loan Product Code
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="loanProductCode"
                            name="loanProductCode"
                            value={formData.loanProductCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="loanPurpose" className="form-label">
                            Loan Purpose
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="loanPurpose"
                            name="loanPurpose"
                            value={formData.loanPurpose}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary me-2">
                    Submit
                </button>

             
            </form>
        </div>
    );


};

export default LoanApplication;
