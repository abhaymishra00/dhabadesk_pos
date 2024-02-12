import { useRef } from 'react';
// import '../assets/css/header.css';

export default function GuestHeader() {
  return (
    <>
      <header className="header">
        <div>
          <p className="brandName">DhabaDesk POS</p>
        </div>
        <div className="orderBasket">
          <span className="material-icons userCart">contact_support</span>
        </div>
      </header>
    </>
  );
}
