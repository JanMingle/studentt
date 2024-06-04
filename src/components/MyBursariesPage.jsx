import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


function MyBursariesPage() {
  const [bursaries, setBursaries] = useState([]);

  useEffect(() => {
    // Fetch bursaries data from the backend or use mock data
    const fetchBursaries = async () => {
      // Mock data for demonstration
      const mockBursaries = [
        { id: 1, bursary: 'Bursary 1', sponsorName: 'XYZ Foundation', fieldOfFunding: 'Science', amount: '$1000', status: 'Pending' },
        { id: 2, bursary: 'Bursary 2', sponsorName: 'ABC Organization', fieldOfFunding: 'Arts', amount: '$1500', status: 'Approved' },
        // Add more bursaries data here...
      ];
      setBursaries(mockBursaries);
    };

    fetchBursaries();
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">My Bursaries</h1>
      <Link to="/" className="link">Go Back</Link>
      <TableContainer component={Paper} className="table-container">
        <Table className="table">
          <TableHead>
            <TableRow className="table-head">
              <TableCell>Bursary</TableCell>
              <TableCell>Sponsor Name</TableCell>
              <TableCell>Field of Funding</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bursaries.map((bursary) => (
              <TableRow key={bursary.id} className="table-row">
                <TableCell>{bursary.bursary}</TableCell>
                <TableCell>{bursary.sponsorName}</TableCell>
                <TableCell>{bursary.fieldOfFunding}</TableCell>
                <TableCell>{bursary.amount}</TableCell>
                <TableCell>{bursary.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyBursariesPage;
