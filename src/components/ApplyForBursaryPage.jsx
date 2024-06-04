import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import grads from './grads.jpg'; // Import the image

function ApplyForBursaryPage() {
  return (
    <Box sx={{ p: 5 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 5 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              sx={{
                color: 'skyblue',
                mb: 3,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Unlock Your Future
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ color: 'skyblue' }}>
              Apply for Our Bursary
            </Typography>
            <Typography variant="body1" paragraph>
              The bursaries provided by us are made available through the contributions of private sector funders. We provide funding opportunities for all undergraduate students and some selected postgraduate students in public universities, universities of Technology, and Technical Vocational Education and Training (TVET) and Agricultural Colleges.
            </Typography>
            <Typography variant="body1" paragraph>
              Our full cost bursary includes tuition, accommodation, study material, a monthly meal or transport allowance. Additionally, all TTI students receive mentoring, coaching, and psychosocial support.
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ color: 'skyblue' }}>
              Criteria for funding eligibility
            </Typography>
            <Typography variant="body1" paragraph>
              - Acceptance and/or registration into a DHET registered university or college
              <br />
              - First degree for undergraduate students
              <br />
              - Black according to the B-BBEE codes (African, Coloured, Indian)
              <br />
              - Previously disadvantaged background including the missing middle whose parents or guardians have a combined income of more than R350,000 per annum
              <br />
              - Academically achieving students will be given preference
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', height: '100%' }}>
              <img src={grads} alt="Bursary" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'skyblue' }}>
          Application Form
        </Typography>
        <Typography variant="body1" paragraph>
          All qualifying students need to complete a full online application form with all supporting documents. Incomplete applications will not be considered. All applications will form part of a database which will be used on a need basis and as per funder requirements throughout the year. This means that we may contact applicants at different times in the year and offer bursaries.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: 'skyblue' }}>
          Supporting documents standard checklist:
        </Typography>
        <Typography variant="body1" paragraph>
          - South African ID (certified)
          <br />
          - Proof of registration or acceptance letter from the institution of your choice
          <br />
          - A full academic record including the latest available results
          <br />
          - A clear head and shoulders picture
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any further queries around applications, please email <a href="mailto:jan.thinkt.co.za">jan.thinkt.co.za</a>
        </Typography>
        <Button
          component={Link}
          to="/bursary-application"
          variant="contained"
          sx={{ mt: 3, backgroundColor: 'red' }}
        >
          Click Here to Apply
        </Button>
      </Paper>
    </Box>
  );
}

export default ApplyForBursaryPage;
