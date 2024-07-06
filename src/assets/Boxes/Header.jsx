import React, { useState } from "react";
import { Container, Nav, Navbar, InputGroup, Form } from "react-bootstrap";
import logo from "/ICONS/divineLogoHorizotal.png";
import gift from "/ICONS/giftbox.png";
import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container fluid>
          <Navbar.Toggle onClick={toggleSidebar} />
          <Navbar.Brand href="#home">
            <img className="ms-3" src={logo} alt="Divine Logo" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate("/todays_luck")} className="me-3">
              Todays Luck <img src={gift} alt="gift" style={{ width: "20px", height: "21px", marginLeft: "5px" }} />
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/pooja_page")} className="me-3 nav-menu">
              Shopping <ShoppingCartRoundedIcon style={{ color: "black" }} />
            </Nav.Link>

            <Nav.Link onClick={() => navigate("/login_page")} className="me-3 nav-menu">
              Login/Registration
            </Nav.Link>
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
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/login_page")}>Login/Registration</Nav.Link>
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/account_page")}>Account <AccountCircleRoundedIcon /></Nav.Link>
          <Nav.Link className="sidebar-nav">Notifications <NotificationsRoundedIcon /></Nav.Link>
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/pooja_page")}>Shopping <ShoppingCartRoundedIcon /></Nav.Link>
          <hr className="menu-hr" />
          <Nav.Link className="sidebar-nav">FAQs</Nav.Link>
          <Nav.Link className="sidebar-nav">Privacy Policy</Nav.Link>
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/TermsAndConditions")}>Terms & Conditions</Nav.Link>
          <Nav.Link className="sidebar-nav">Contact us</Nav.Link>
          <Nav.Link className="sidebar-nav" onClick={() => navigate("/AboutUs")}>About us</Nav.Link>
        </Nav>
      </div>
      {sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Header;
