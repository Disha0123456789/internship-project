import React from "react";
import { useNavigate } from "react-router-dom";

const EmotionalSupport = () => {
  const navigate = useNavigate();
  const options = [
    "Anger Management",
    "Obsession / OCD",
    "Loneliness",
    "Sexual Wellness",
    "Relationship",
    "Depression",
    "Sleep",
    "Stress Management",
    "Past Trauma",
    "Self-Esteem issues",
    "Work Life Balance",
    "Grief / Loss",
  ];

  const imgurl = [
    "https://images.unsplash.com/photo-1609852234838-147db6815968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/5542968/pexels-photo-5542968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7243968/pexels-photo-7243968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1511405889574-b01de1da5441?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1563754536869-24d854e50ce6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/236151/pexels-photo-236151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://imgs.search.brave.com/gGF66khPXG_x9uF6h4Nw9i8VJci78H872oJZMx41_is/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGlnaGZvY3VzY2Vu/dGVycy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDMv/QWRkcmVzc2luZy1Q/YXN0LVRyYXVtYS1E/by1Zb3UtTmVlZC10/by1TZWVrLUhlbHAt/MS5qcGc",
    "https://images.unsplash.com/photo-1598897484058-7bfc231369ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587740896339-96a76170508d?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1609156730500-dd8e41ba29ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const onButtonClick = (option) => {
    switch (option) {
      case "Anger Management":
        navigate("/AngerManagement");
        break;
      case "Obsession / OCD":
        navigate("/Obsession");
        break;
      case "Loneliness":
        navigate("/Loneliness");
        break;
      case "Sexual Wellness":
        navigate("/SexualWellness");
        break;
      case "Relationship":
        navigate("/Family");
        break;
      case "Depression":
        navigate("/Depression");
        break;
      case "Sleep":
        navigate("/Sleep");
        break;
      case "Stress Management":
        navigate("/StressManagement");
        break;
      case "Past Trauma":
        navigate("/PastTrauma");
        break;
      case "Self-Esteem issues":
        navigate("/SelfEsteemIssues");
        break;
      case "Work Life Balance":
        navigate("/WorkLifeBalance");
        break;
      case "Grief / Loss":
        navigate("/Grief");
        break;
      default:
        break;
    }
  };

  return (
    <div className="Main-Page">
      <div className="Head-Text">
        <h1>Emotional Support</h1>
      </div>

      <div className="Options Emotional-options">
        {options.map((option, index) => (
          <div className="list" key={index}>
            <div className="circle">
              <img
                className="hy"
                onClick={() => onButtonClick(option)}
                src={imgurl[index]}
                alt="Emotional Support"
              />
            </div>
            <div className="item-price">Rs.99</div>
            <div className="list-item">{option}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmotionalSupport;