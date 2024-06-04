import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
  Fade,
} from '@mui/material';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

function BursaryApplicationPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    southAfrican: '',
    gender: '',
    surname: '',
    firstName: '',
    id: '',
    race: '',
    disability: '',
    homeTel: '',
    cell: '',
    email: '',
    residentialAddress: '',
    postalAddress: '',
    schoolName: '',
    institutionType: '',
    institutionName: '',
    qualificationName: '',
    studentNumber: '',
    parentTitle: '',
    parentSouthAfrican: '',
    parentGender: '',
    parentSurname: '',
    parentFirstName: '',
    parentID: '',
    parentTel: '',
    relationship: '',
    parentCell: '',
    parentEmail: '',
    occupation: '',
    employer: '',
    familyIncome: '',
    applicantEssay: '',
    source: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (step === 6) {
      try {
        await addDoc(collection(db, 'applications'), formData);
        setStep(step + 1);  // Move to the "Thank you" page
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const renderSection = () => {
    switch (step) {
      case 0:
        return (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              StudyTrust Bursaries and Scholarships
            </Typography>
            <Typography variant="body1" paragraph>
              StudyTrust awards sponsored bursaries and scholarships to deserving and financially needy students. Apply for our bursary and scholarship programs by completing the following application form.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setStep(step + 1)}
              sx={{ mt: 3, backgroundColor: 'red' }}
            >
              Start Application
            </Button>
          </Paper>
        );
      case 1:
        return (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="title"
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel id="southAfrican-label">Are you a South African Citizen?</InputLabel>
                    <Select
                      labelId="southAfrican-label"
                      id="southAfrican"
                      name="southAfrican"
                      value={formData.southAfrican}
                      onChange={handleChange}
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                      labelId="gender-label"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="surname"
                    label="Surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="firstName"
                    label="First Name(s)"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="id"
                    label="ID No."
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel id="race-label">Race</InputLabel>
                    <Select
                      labelId="race-label"
                      id="race"
                      name="race"
                      value={formData.race}
                      onChange={handleChange}
                    >
                      <MenuItem value="black">Black</MenuItem>
                      <MenuItem value="white">White</MenuItem>
                      <MenuItem value="colored">Colored</MenuItem>
                      <MenuItem value="indian">Indian</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel id="disability-label">Do you have any disabilities?</InputLabel>
                    <Select
                      labelId="disability-label"
                      id="disability"
                      name="disability"
                      value={formData.disability}
                      onChange={handleChange}
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="homeTel"
                    label="Home Tel. No."
                    name="homeTel"
                    value={formData.homeTel}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="cell"
                    label="Cell No."
                    name="cell"
                    value={formData.cell}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="residentialAddress"
                    label="Residential Address"
                    name="residentialAddress"
                    value={formData.residentialAddress}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="postalAddress"
                    label="Postal Address"
                    name="postalAddress"
                    value={formData.postalAddress}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                variant="outlined"
                sx={{ mt: 3, mr: 2 }}
                onClick={handlePrevious}
              >
                Previous
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, backgroundColor: 'red' }}
              >
                Next
              </Button>
            </Box>
          </Paper>
        );
      case 2:
        return (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="highestQualification"
                    label="Highest Qualification Already Obtained"
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="matricYear"
                    label="When did you/will you matriculate?"
                    name="matricYear"
                    value={formData.matricYear}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel id="matricCertificate-label">Have you included your Matric Certificate?</InputLabel>
                    <Select
                      labelId="matricCertificate-label"
                      id="matricCertificate"
                      name="matricCertificate"
                      value={formData.matricCertificate}
                      onChange={handleChange}
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel id="latestMatricResults-label">Have you included your June/latest Matric results?</InputLabel>
                    <Select
                      labelId="latestMatricResults-label"
                      id="latestMatricResults"
                      name="latestMatricResults"
                      value={formData.latestMatricResults}
                      onChange={handleChange}
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="schoolName"
                    label="Name of School"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel id="institutionType-label">Type of Institution</InputLabel>
                    <Select
                      labelId="institutionType-label"
                      id="institutionType"
                      name="institutionType"
                      value={formData.institutionType}
                      onChange={handleChange}
                    >
                      <MenuItem value="university">University</MenuItem>
                      <MenuItem value="college">College</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="institutionName"
                    label="Name of Tertiary Institution"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="qualificationName"
                    label="Name of Qualification"
                    name="qualificationName"
                    value={formData.qualificationName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="studentNumber"
                    label="Student Number"
                    name="studentNumber"
                    value={formData.studentNumber}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                variant="outlined"
                sx={{ mt: 3, mr: 2 }}
                onClick={handlePrevious}
              >
                Previous
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, backgroundColor: 'red' }}
              >
                Next
              </Button>
            </Box>
          </Paper>
        );
      case 3:
        return (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="parentTitle"
                    label="Parent/Guardian Title"
                    name="parentTitle"
                    value={formData.parentTitle}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel id="parentSouthAfrican-label">Are they a South African Citizen?</InputLabel>
                    <Select
                      labelId="parentSouthAfrican-label"
                      id="parentSouthAfrican"
                      name="parentSouthAfrican"
                      value={formData.parentSouthAfrican}
                      onChange={handleChange}
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel id="parentGender-label">Parent/Guardian Gender</InputLabel>
                    <Select
                      labelId="parentGender-label"
                      id="parentGender"
                      name="parentGender"
                      value={formData.parentGender}
                      onChange={handleChange}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="parentSurname"
                    label="Parent/Guardian Surname"
                    name="parentSurname"
                    value={formData.parentSurname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="parentFirstName"
                    label="Parent/Guardian First Name(s)"
                    name="parentFirstName"
                    value={formData.parentFirstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="parentID"
                    label="Parent/Guardian ID No."
                    name="parentID"
                    value={formData.parentID}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="parentTel"
                    label="Parent/Guardian Tel. No."
                    name="parentTel"
                    value={formData.parentTel}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="relationship"
                    label="Relationship to Applicant"
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleChange}
                  />
                               </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="parentCell"
                    label="Parent/Guardian Cell No."
                    name="parentCell"
                    value={formData.parentCell}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="parentEmail"
                    label="Parent/Guardian Email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="occupation"
                    label="Occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="employer"
                    label="Name of Employer"
                    name="employer"
                    value={formData.employer}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="familyIncome"
                    label="Joint Family Income per Year"
                    name="familyIncome"
                    value={formData.familyIncome}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                variant="outlined"
                sx={{ mt: 3, mr: 2 }}
                onClick={handlePrevious}
              >
                Previous
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, backgroundColor: 'red' }}
              >
                Next
              </Button>
            </Box>
          </Paper>
        );
      case 4:
        return (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                required
                fullWidth
                multiline
                rows={10}
                id="applicantEssay"
                label="Write an essay of 250 words to motivate your application"
                name="applicantEssay"
                value={formData.applicantEssay}
                onChange={handleChange}
              />
              <Button
                variant="outlined"
                sx={{ mt: 3, mr: 2 }}
                onClick={handlePrevious}
              >
                Previous
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, backgroundColor: 'red' }}
              >
                Next
              </Button>
            </Box>
          </Paper>
        );
      case 5:
        return (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                required
                fullWidth
                id="source"
                label="Where did you hear about our bursary?"
                name="source"
                value={formData.source}
                onChange={handleChange}
              />
              <Button
                variant="outlined"
                sx={{ mt: 3, mr: 2 }}
                onClick={handlePrevious}
              >
                Previous
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, backgroundColor: 'red' }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        );
      case 6:
        return (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Typography variant="body1" paragraph>
                I declare that I am aware of and understand the conditions of the StudyTrust bursary. I confirm that the information provided is accurate and complete to the best of my knowledge. I understand that providing false information may result in my application being disqualified.
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    name="declaration"
                    color="primary"
                  />
                }
                label="I agree to the terms and conditions"
              />
              <Button
                variant="outlined"
                sx={{ mt: 3, mr: 2 }}
                onClick={handlePrevious}
              >
                Previous
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, backgroundColor: 'red' }}
              >
                Finish
              </Button>
            </Box>
          </Paper>
        );
      default:
        return (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Thank you for your application!
            </Typography>
            <Typography variant="body1">
              Your application has been submitted successfully. We will review your information and contact you if you are shortlisted for an interview.
            </Typography>
          </Paper>
        );
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        StudyTrust Bursary Application
      </Typography>
      {renderSection()}
    </Box>
  );
}

export default BursaryApplicationPage;

