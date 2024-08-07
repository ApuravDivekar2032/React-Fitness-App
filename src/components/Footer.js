// import React from 'react';
// import { Box, Stack, Typography } from '@mui/material';
// import Logo from '../assets/images/logo1.jpg';

// const Footer = () => (
//   <Box mt="80px" bgcolor="#FFF3F4">
//     <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
//       <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
//     </Stack>
//     <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by JavaScript Mastery</Typography>
//   </Box>
// );

// export default Footer;

import React from 'react';
import { Box, Stack, Typography, IconButton, Divider } from '@mui/material';
import { Facebook, Instagram, Twitter, MailOutline, Phone } from '@mui/icons-material'; // Importing necessary icons
import Logo from '../assets/images/logo1.jpg';

const Footer = () => (
  <Box sx={{ bgcolor: '#FFFAFB', color: '#3A1212', py: '40px' }}>
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: '20px', textAlign: 'center' }}>
      <Box sx={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
        <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto', borderRadius: '10px' }} />
      </Box>
      <Typography variant="h4" sx={{ mt: '20px', fontWeight: 'bold', fontFamily: 'sans-serif', letterSpacing: '2px' }}>FitLife</Typography>
      <Typography variant="body1">
        Transforming Lives Through Fitness.
      </Typography>
      <Typography variant="body1">
        Join us in the journey to a healthier you.
      </Typography>
      <Stack direction="row" justifyContent="center" spacing="20px" sx={{ mt: '20px' }}>
        <IconButton aria-label="facebook" sx={{ color: '#3A1212' }}>
          <Facebook />
        </IconButton>
        <IconButton aria-label="instagram" sx={{ color: '#3A1212' }}>
          <Instagram />
        </IconButton>
        <IconButton aria-label="twitter" sx={{ color: '#3A1212' }}>
          <Twitter />
        </IconButton>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: '20px' }}>
        <MailOutline sx={{ mr: '5px', color: '#FF2625' }} />
        <Typography variant="body2">info@example.com</Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: '10px' }}>
        <Phone sx={{ mr: '5px', color: '#FF2625' }} />
        <Typography variant="body2">+1234567890</Typography>
      </Stack>
      {/* <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: '10px' }}>
        <Description sx={{ mr: '5px', color: '#FF2625' }} />
        <Typography variant="body2"><a href="#">Privacy Policy</a></Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: '10px' }}>
        <Description sx={{ mr: '5px', color: '#FF2625' }} />
        <Typography variant="body2"><a href="#">Terms of Service</a></Typography>
      </Stack> */}
      <Divider sx={{ my: '20px' }} />
      <Typography variant="body2" textAlign="center" sx={{ my: '20px' }}>
        Discover our latest fitness tips and updates. Follow us on social media for more!
      </Typography>
    </Box>
    <Box sx={{ borderTop: '1px solid #3A3A3A', mt: '20px', pt: '20px', bgcolor: '#FFFAFB' }}>
      <Typography variant="body2" textAlign="center">© 2024 Your FitLife Club. All rights reserved.</Typography>
    </Box>
  </Box>
);

export default Footer;
