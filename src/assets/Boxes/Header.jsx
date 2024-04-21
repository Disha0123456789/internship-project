import { Container, Nav, Navbar, InputGroup, Form } from "react-bootstrap";
import logo from "../../../public/ICONS/divinelogohorizontal.png";
import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import "./Header.css"; 

import { useNavigate } from "react-router-dom";  
function Header() {
  const navigate = useNavigate();
  return (
    <Navbar className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            className="ms-3"
            src={logo}
            alt="Divine Logo"
            style={{ height: "auto", maxHeight: "80px", width: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate("/todays_luck")} className="me-3">
              Todays Luck <CasinoRoundedIcon />
            </Nav.Link>
            <Nav.Link href="#link" className="me-3">
              Shopping <ShoppingCartRoundedIcon />
            </Nav.Link>

            <InputGroup className="mb-1 me-3" style={{ width: "300px" }}>
              <Form.Control
                placeholder="Search Your Divine Connection"
                aria-label="Search here"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                <SearchRoundedIcon />
              </InputGroup.Text>
            </InputGroup>

            <Nav.Link onClick={() => navigate("/login_page")} className="me-3">
              Login/Registration
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/account_page")} className="me-3">
              <AccountCircleRoundedIcon />
            </Nav.Link>
            <Nav.Link href="#link" className="me-3">
              <NotificationsRoundedIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
