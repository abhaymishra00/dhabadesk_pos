import PropTypes from 'prop-types';

import Header from '../components/Header';
import { Container } from '@mui/material';

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />

      <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
        {children}
      </Container>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
