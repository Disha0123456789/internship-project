import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import logo from "/assets/ICONS/divineLogoHorizotal.png";
import gift from "/assets/ICONS/giftbox.png";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    setIsLogoutPopupOpen(false);
    navigate("/login_page");
  };

  const handleLogoutClick = () => {
    setIsLogoutPopupOpen(true);
  };

  const handleDeleteAccount = () => {
    const token = localStorage.getItem("authToken");

    fetch('https://divineconnection.co.in/api/auth/delete-account', {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          localStorage.removeItem("authToken");
          setIsLoggedIn(false);
          setIsDeletePopupOpen(false);
          navigate("/registration_page");
        } else {
          console.error('Failed to delete account');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleDeleteClick = () => {
    setIsDeletePopupOpen(true);
  };

  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container fluid>
          <Navbar.Toggle onClick={toggleSidebar} />
          <div className="header-logo">
            <img className="ms-3 header-logo-image" src={logo} alt="Divine Logo" />
          </div>
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate("/todays_luck")} className="me-3 nav-toggle">
              <div className="nav-title">Todays Luck</div>
              <img
                src={gift}
                alt="gift"
                style={{ width: "21px", height: "21px", marginLeft: "5px", marginBottom: "2px" }}
              />
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/pooja_page")} className="me-3 nav-toggle">
              <div className="nav-title">Shopping</div>
              <ShoppingCartRoundedIcon style={{ color: "black" }} />
            </Nav.Link>
            {isLoggedIn ? (
              <Nav.Link onClick={handleLogoutClick} className="me-3 nav-menu">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => navigate("/login_page")} className="me-3 nav-menu">
                Login/Registration
              </Nav.Link>
            )}
            <Nav.Link onClick={() => navigate("/account_page")} className="me-3 nav-menu">
              <AccountCircleRoundedIcon style={{ color: "black" }} />
            </Nav.Link>
            <Nav.Link className="me-3 nav-menu">
              <NotificationsRoundedIcon style={{ color: "black" }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <Nav className="flex-column">
          <div className="sidebar-logo-div">
            <Nav.Link>
              <img className="sidebar-logo" src={logo} alt="Divine Logo" />
            </Nav.Link>
          </div>
          {!isLoggedIn && (
            <Nav.Link className="sidebar-nav" onClick={() => navigate("/login_page")}>
              Login/Registration
            </Nav.Link>
          )}
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/account_page")}>
            Account <AccountCircleRoundedIcon />
          </Nav.Link>
          <Nav.Link className="sidebar-nav">
            Notifications <NotificationsRoundedIcon />
          </Nav.Link>
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/pooja_page")}>
            Shopping <ShoppingCartRoundedIcon />
          </Nav.Link>
          {isLoggedIn && (
            <Nav.Link className="sidebar-nav" onClick={handleLogoutClick}>
              Logout
            </Nav.Link>
          )}
          <hr className="menu-hr" />
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/FAQ")}>
            FAQs
          </Nav.Link>
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/PrivacyPolicy")}>
            Privacy Policy
          </Nav.Link>
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/TermsAndConditions")}>
            Terms & Conditions
          </Nav.Link>
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/ContactUs")}>
            Contact us
          </Nav.Link>
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/AboutUs")}>
            About us
          </Nav.Link>
          {isLoggedIn && (
            <Nav.Link className="sidebar-nav" onClick={handleDeleteClick}>
              Delete Account
            </Nav.Link>
          )}
        </Nav>
      </div>
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {isLogoutPopupOpen && (
        <div className='verification-popup-head'>
          <div className='verification-content'>
            <h3 style={{ fontWeight: 'bold' }}>Confirm Logout</h3>
            <div className='verify-btn-container'>
              <button className='verify-btn' onClick={handleLogout}>Yes</button>
              <button className='verify-btn' onClick={() => setIsLogoutPopupOpen(false)}>No</button>
            </div>
          </div>
        </div>
      )}

      {isDeletePopupOpen && (
        <div className='verification-popup-head'>
          <div className='verification-content'>
            <h3 style={{ fontWeight: 'bold' }}>Confirm Account Deletion</h3>
            <div className='verify-btn-container'>
              <button className='verify-btn' onClick={handleDeleteAccount}>Yes</button>
              <button className='verify-btn' onClick={() => setIsDeletePopupOpen(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
