import React, { useState, useEffect } from "react";
//import "../TimeTravel/PastLifePrediction.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const formatDate = (isoDateString) => {
  if (!isoDateString) return '';
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function Numero() {
  const [birthDate, setBirthDate] = useState("");
  const navigate = useNavigate();
  const [note, setNote] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setIsAuthenticated(false);
          return;
        }
        const decodedToken = jwtDecode(token);
        const email_id = decodedToken.email;

        const response = await axios.get('https://divineconnection.co.in/api/auth/user-data', {
        headers: {
          Authorization: `Bearer ${token}`,
          'User-Email': email_id
        },
          withCredentials: true
        });
        const user = response.data;
        console.log(user);
        const { dob } = user;
        console.log(dob);
        if (dob) {
          setBirthDate(formatDate(dob));
          setNote(false);
        }

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleBirthDateChange = (e) => {
    const date = e.target.value;
    setBirthDate(date);
  };

  const navigateToFuture = (date) => {
    navigate(`/numerology/Numerology?birthDate=${date}`);
  };

  return (
    <div className="timetravel">
      <div className="Head-Text">
        {/* <IoIosArrowBack onClick={() => navigate("/TimeTravel")} className="backicon" /> */}
        <h1>Numerology</h1>
      </div>
      <div className="Future-container text-left">
        <div className="row justify-content-center" style={{ width: "100%" }}>
          <div className="">
            <form action="#">
              <div className="form-group">
                <div>
                  <label htmlFor="birthDate">Date of Birth:</label>
                  <input
                    type="date"
                    id="birthDate"
                    className="form-control"
                    value={birthDate}
                    onChange={handleBirthDateChange}
                  />
                </div>
                {/*zodiacSign && (
                  <div className="zodiac-sign">
                    <p>Your Zodiac Sign: {zodiacSign}</p>
                  </div>
                )*/}
                {birthDate && (
                  <div className="past-life-button-wrapper">
                    <button
                      type="button"
                      className="past-life-btn"
                      onClick={() => navigateToFuture(birthDate)}
                    >
                      Get your Numerology
                    </button>
                    {note && (
                    <div style ={{marginTop:'10px', fontSize:'small'}}>
                      Note: update your date of birth in the account to use it as default date of birth for this feature.
                    </div>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Numero;
