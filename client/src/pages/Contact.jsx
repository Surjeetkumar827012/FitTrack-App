// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { TextField, Button, Container, Typography, Card, CardContent } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Background = styled.div`
  background: url('https://source.unsplash.com/1600x900/?fitness,gym') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 20px;
`;

const ContactCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled(TextField)`
  margin-bottom: 20px !important;
`;

const SubmitButton = styled(Button)`
  margin-top: 20px !important;
  background-color: #1976d2 !important;
  color: #fff !important;
  &:hover {
    background-color: #115293 !important;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Background>
      <StyledContainer>
        <ContactCard>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Contact Us
            </Typography>
            <ContactForm onSubmit={handleSubmit}>
              <FormField label="Name" variant="outlined" required />
              <FormField label="Email" variant="outlined" type="email" required />
              <FormField label="Message" variant="outlined" multiline rows={4} required />
              <SubmitButton variant="contained" type="submit" endIcon={<SendIcon />}>
                Send Message
              </SubmitButton>
            </ContactForm>
          </CardContent>
        </ContactCard>
      </StyledContainer>
    </Background>
  );
};

export default Contact;
