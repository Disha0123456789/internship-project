import React, { useState, useEffect } from "react";
import "./PastLifePrediction.css";
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

function PastLifePrediction() {
  const [birthDate, setBirthDate] = useState("");
  const navigate = useNavigate();
  const [note, setNote] = useState(false);

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
        const { dob } = user.dob;
        if (dob) {
          setBirthDate(formatDate(dob));
        }
        else{
          setNote(true);
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
    navigate(`/see_your_past?birthDate=${date}`);
  };

  return (
    <div className="timetravel">
      <div className="Head-Text">
        {/* <IoIosArrowBack onClick={() => navigate("/TimeTravel")} className="backicon" /> */}
        <h1>Past Life Prediction</h1>
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
                
                {birthDate && (
                  <div className="past-life-button-wrapper">
                    <button
                      type="button"
                      className="past-life-btn"
                      onClick={() => navigateToFuture(birthDate)}
                    >
                      See Your Past Life
                    </button>
                    {setNote && (
                    <div style ={{marginTop:'10px', fontSize:'x-small'}}>
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

export default PastLifePrediction;
