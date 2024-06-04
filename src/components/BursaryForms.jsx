import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, MenuItem, InputLabel, FormControl, Select, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { db, storage } from './firebaseConfig'; // Make sure to set up firebaseConfig.js
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

function BursaryForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    school: '',
    grade: '',
    documents: null,
  });

  const [fileUpload, setFileUpload] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFileUpload(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "bursaryApplications"), formData);

      if (fileUpload) {
        const storageRef = ref(storage, `bursaryDocuments/${docRef.id}/${fileUpload.name}`);
        await uploadBytes(storageRef, fileUpload);
        const fileURL = await getDownloadURL(storageRef);
        
        // Update Firestore with the file URL
        await updateDoc(docRef, {
          documentURL: fileURL
        });
      }
      alert('Bursary application submitted successfully!');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('There was an error submitting your application.');
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <FormContainer elevation={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Bursary Application Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="firstName"
                  label="First Name"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="email"
                  label="Email"
                  fullWidth
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="phone"
                  label="Phone"
                  fullWidth
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="address"
                  label="Address"
                  fullWidth
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="city"
                  label="City"
                  fullWidth
                  value={formData.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="state"
                  label="State"
                  fullWidth
                  value={formData.state}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="zip"
                  label="Zip Code"
                  fullWidth
                  value={formData.zip}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="school"
                  label="School"
                  fullWidth
                  value={formData.school}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Grade</InputLabel>
                  <Select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                  >
                    <MenuItem value="Freshman">Freshman</MenuItem>
                    <MenuItem value="Sophomore">Sophomore</MenuItem>
                    <MenuItem value="Junior">Junior</MenuItem>
                    <MenuItem value="Senior">Senior</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Upload Relevant Documents
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                >
                  Upload File
                  <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormContainer>
      </Grid>
    </Grid>
  );
}

export default BursaryForm;
