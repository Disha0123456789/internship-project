import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, InputGroup, Form } from "react-bootstrap";
import logo from "/assets/ICONS/divineLogoHorizotal.png";
import gift from "/assets/ICONS/giftbox.png";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by looking for the token in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    // Remove token from localStorage and update state
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login_page");
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
              <Nav.Link onClick={handleLogout} className="me-3 nav-menu">
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
          {isLoggedIn ? (
            <Nav.Link className="sidebar-nav" onClick={handleLogout}>
              Logout
            </Nav.Link>
          ) : (
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
        </Nav>
      </div>
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Header;
