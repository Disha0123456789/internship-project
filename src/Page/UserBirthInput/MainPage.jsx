import React from 'react';
import UserBirthInput from './UserBirthInput';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

const MainPage = ({ }) => {
  const location = useLocation(); // Use useLocation hook to get location

  // Access nextPage from location state
  const nextPage = location.state?.nextPage;

  console.log(nextPage);
  return (
    <div className="MainPage-container">
      <UserBirthInput nextPage={nextPage} />
    </div>
  );
};

export default MainPage;
