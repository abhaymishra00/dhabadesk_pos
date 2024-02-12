import PropTypes from 'prop-types';
import GuestHeader from 'src/components/GuestHeader';
// ----------------------------------------------------------------------

export default function GuestLayout({ children }) {
  return (
    <div style={{ padding: '0 50px', paddingTop: '70px' }}>
      <GuestHeader />

      {children}
    </div>
  );
}

GuestLayout.propTypes = {
  children: PropTypes.node,
};
