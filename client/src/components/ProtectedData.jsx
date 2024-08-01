import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';

const ProtectedData = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/data', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.message);
      } catch (error) {
        setData(error.response.data.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Protected Data</Typography>
      {data && <Box mt={2}><Typography>{data}</Typography></Box>}
    </Container>
  );
};

export default ProtectedData;
