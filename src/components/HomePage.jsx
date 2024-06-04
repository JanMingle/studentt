import React from 'react';
import '../App.css';
import { Card, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';
import StatusIcon from '@mui/icons-material/Assessment';
import ApplicationIcon from '@mui/icons-material/AssignmentTurnedIn';
import EventsIcon from '@mui/icons-material/Event';

function HomePage() {
  return (
    <div className="main-content">
      {/* Bursary Status Card */}
      <Card className="card bursary-status" onClick={() => console.log('Navigate to Bursary Status')}>
        <div className="card-content">
          <StatusIcon className="card-icon" />
          <h2 className="card-title">Bursary Status</h2>
          <p className="card-description">Click here to check status</p>
        </div>
      </Card>

      {/* View Applied Bursary Card */}
      <Card className="card view-bursary" onClick={() => console.log('Navigate to View Applied Bursary')}>
        <div className="card-content">
          <ApplicationIcon className="card-icon" />
          <h2 className="card-title">View Applied Bursary</h2>
          <p className="card-description">Click here to view applied bursaries</p>
        </div>
      </Card>

      {/* Events & Workshops Card */}
      <Card className="card events-workshops" onClick={() => console.log('Navigate to Events & Workshops')}>
        <div className="card-content">
          <EventsIcon className="card-icon" />
          <h2 className="card-title">Events & Workshops</h2>
          <p className="card-description">Click here to view events and workshops</p>
        </div>
      </Card>

      {/* Recent Bursaries */}
      <TableContainer component={Paper} className="table-container">
        <Typography variant="h5" component="h2" className="card-heading">
          Recent Bursaries
        </Typography>
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>Bursary</TableCell>
              <TableCell>Sponsor Name</TableCell>
              <TableCell>Field of Funding</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Bursary 1</TableCell>
              <TableCell>XYZ Foundation</TableCell>
              <TableCell>Science</TableCell>
              <TableCell>$1000</TableCell>
              <TableCell>
                <Link to="/my-bursaries" className="view-bursary-link">
                  View
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bursary 2</TableCell>
              <TableCell>ABC Organization</TableCell>
              <TableCell>Arts</TableCell>
              <TableCell>$1500</TableCell>
              <TableCell>
                <Link to="/my-bursaries" className="view-bursary-link">
                  View
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default HomePage;
