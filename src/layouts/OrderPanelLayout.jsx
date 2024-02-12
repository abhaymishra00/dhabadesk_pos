import PropTypes from 'prop-types';
import Header from '../components/Header';

// ----------------------------------------------------------------------

export default function OrderPanelLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

OrderPanelLayout.propTypes = {
  children: PropTypes.node,
};
