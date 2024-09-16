import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "CSS",
    level: "good",
    color: "green",
  },
  {
    skill: "HTML",
    level: "very-good",
    color: "red",
  },
  {
    skill: "JavaScript",
    level: "very-good",
    color: "blue",
  },
  {
    skill: "Python",
    level: "advanced",
    color: "lightblue",
  },
  {
    skill: "C-Lang",
    level: "baby",
    color: "yellow",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="logo192.png" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>REACT</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((ele) => (
        <Skill
          skill={ele} //js
        />
      ))}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>{skill.level === "advanced" ? "🦾" : "👶"}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
