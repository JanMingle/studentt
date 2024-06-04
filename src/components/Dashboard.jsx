import React from 'react';
import { Box, Typography, Paper, Grid, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ForumIcon from '@mui/icons-material/Forum';
import ListItemIcon from '@mui/material/ListItemIcon';


const styles = {
  dashboard: {
    color: '#fff',
    backgroundColor: '#121212', // Dark background
    minHeight: '100vh',
    padding: '20px',
  },
  paper: {
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
  },
  card: {
    backgroundColor: '#1e1e1e',
    color: 'white',
  },
};

function Dashboard() {
  return (
    <Box sx={styles.dashboard}>
      <Typography variant="h4" gutterBottom component="div">
        DASHBOARD
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={styles.paper}>
            <Typography variant="h6">Bursary Status</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Your next deadline: May 30, 2024" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Total Applications: 5" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pending Approvals: 2" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={styles.paper}>
            <Typography variant="h6">Application Tracker</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Application #1234 - Under Review" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Application #1235 - Approved" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={styles.paper}>
            <Typography variant="h6">Events & Workshops</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EventNoteIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary="Financial Aid Workshop - June 5, 2024" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={styles.card}>
            <CardContent>
              <Typography variant="h6">Feedback</Typography>
              <Typography variant="body2">
                Help us improve your experience by providing feedback on the platform.
              </Typography>
              <FeedbackIcon style={{ color: '#fff', marginTop: '10px' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={styles.card}>
            <CardContent>
              <Typography variant="h6">Community Forum</Typography>
              <Typography variant="body2">
                Join the discussion and connect with peers on scholarships and bursaries.
              </Typography>
              <ForumIcon style={{ color: '#fff', marginTop: '10px' }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
