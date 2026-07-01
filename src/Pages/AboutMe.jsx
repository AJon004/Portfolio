import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FadeUpWrapper from "../components/FadeUpWrapper";
import { useIsMobile } from "../hooks/useIsMobile";
import profilePic from "../../public/media/Profile Picture/pic.png";

const techSkills = [
  { category: "Frontend", items: "React, TailwindCSS, HTML, CSS, JavaScript" },
  { category: "Backend", items: "Django, Django REST" },
  { category: "Framework Mobile/Web", items: "Flutter" },
  { category: "Databases", items: "Firebase, PostgreSQL" },
  { category: "Tools", items: "Git, GitHub, Vite, Pygame" },
];

const softSkills = [
  "Problem-solving",
  "Adaptability",
  "Team Collaboration",
  "Communication",
];

const fontDisplay = "'Pixelify Sans', cursive";
const fontBody = "'VT323', monospace";
const fontMono = "'Silkscreen', cursive";
const accent = "#00ffcc";

export default function AboutMe() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        minHeight: "100vh",
        backgroundColor: "transparent",
        padding: isMobile ? "2rem 1rem 3rem" : "3.5rem 2rem 6rem",
        maxWidth: isMobile ? "100%" : "1500px",
        margin: "0 auto",
        fontFamily: fontBody,
      }}
    >
      {/* Hello! + Welcome — LEFT aligned */}
      {/* <FadeUpWrapper delay={0}>
        <div style={{ textAlign: "left", marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontSize: isMobile ? "2.5rem" : "6rem",
              fontFamily: fontDisplay,
              fontWeight: 700,
              color: "#f1f1f1",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Hello!
          </h1>
          <h2
            style={{
              fontSize: isMobile ? "1.5rem" : "3rem",
              fontFamily: fontDisplay,
              fontWeight: 700,
              color: "#f1f1f1",
              margin: "0.2rem 0 0",
              lineHeight: 1.6,
            }}
          >
            Welcome to my<br />portfolio!
          </h2>
        </div>
      </FadeUpWrapper> */}

      {/* My Name is — RIGHT aligned */}
      {/* <FadeUpWrapper delay={0.15}>
        <div style={{ textAlign: "right", marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: isMobile ? "1.4rem" : "3.6rem",
              fontFamily: fontDisplay,
              fontWeight: 700,
              color: "#f1f1f1",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            My Name is<br />Albert John A. Judaya
          </h2>
        </div>
      </FadeUpWrapper> */}
      {/*Profile Pic + BIO + name */}
        <FadeUpWrapper delay={0}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? "1.5rem" : "3rem",
            marginBottom: "4rem",
            backgroundColor: "#000000",
            border: "1px solid #ffffff",
            borderRadius: "1.5rem",
            padding: isMobile ? "1.5rem" : "2.5rem",
          }}
        >
          {/* Avatar — swap SVG for <img src={heroImg} /> when ready */}
          <div
            style={{
              flex: "0 0 auto",
              width: isMobile ? "250px" : "350px",
              height: isMobile ? "250px" : "350px",
              borderRadius: "50%",
              marginLeft: isMobile ? "0" : "8rem",
              backgroundColor: "#5e5e5e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img src={profilePic} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />          </div>
 
          <div style={{ textAlign: isMobile ? "center" : "center" }}>
            <h1
              style={{
                fontFamily: fontMono,
                fontWeight: 700,
                color: "#f1f1f1",
                fontSize: isMobile ? "1.6rem" : "2.8rem",
                margin: "0 5.53rem 1rem",
                lineHeight: 1,
              }}
            >
              Hello, my name is John
            </h1>
            <p
              style={{
                fontFamily: fontBody,
                color: "#f1f1f1",
                fontSize: isMobile ? "1.1rem" : "1.9rem",
                lineHeight: 1.7,
                margin: "0 6rem 1rem",
                maxWidth: "650px",
              }}
            >
              I am a full stack developer with a primary focus on front-end
              development. I have worked on legitimate company automation
              projects and assisted in developing their product site. I have
              made projects relating to scheduling, restaurant management, and
              even a bit of game development.
            </p>
          </div>
        </div>
      </FadeUpWrapper>

      {/* Tech stack*/}
      <FadeUpWrapper delay={0.17}>
        <div style={{ textAlign: "left", marginBottom: "2.5rem" }}>
          <p
            style={{
              color: "#f1f1f1",
              fontFamily: fontDisplay,
              fontWeight: 700,
              fontSize: isMobile ? "1.1rem" : "2.6rem",
              margin: "0 0 0.5rem",
              display: "inline-block",
              borderBottom: `3px solid ${accent}`,
              paddingBottom: "0.3rem",
            }}
          >
            Tech Stack
            </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.8rem",
              marginTop: "1.5rem",
              justifyContent: "flex-start"
            }}
          >
            {[
            "React", "TailwindCSS", "HTML", "CSS", "JavaScript", "Django", 
            "Django REST Framework", "Flutter", "Firebase", "PostgreSQL", 
            "Git", "GitHub", "Vite", "Pygame", "Python", "Java"   
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  color: "#aaaaaa",
                  fontFamily: fontBody,
                  fontSize: isMobile ? "1rem" : "2.4rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "2rem",
                  fontWeight: 600,
                  border: "1px solid #2a2a2a",
                }}
            >
              {tech}
            </span>
            ))}
          </div>
        </div>
      </FadeUpWrapper>

      {/* Worked On/ Background */}
      <FadeUpWrapper delay={0.2}>
        <div style={{ textAlign: "right", marginBottom: "2.5rem",             backgroundColor: "#000000",
            border: "1px solid #ffffff", borderRadius: "1.5rem",
            padding: isMobile ? "1.5rem" : "2.5rem",}}>
        <h2
          style={{
      color: "#f1f1f1",
      fontFamily: fontDisplay,
      fontWeight: 700,
      fontSize: isMobile ? "2.6rem" : "4.1rem",
      margin: "0 0 0.5rem",
      display: "inline-block",
      borderBottom: `3px solid ${accent}`,
      paddingBottom: "0.3rem",

          }}
        >
          Experience
        </h2>
        <div style={{ textAlign: isMobile ? "center" : "right", marginTop: "1.5rem" }}>
          <ul style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontFamily: fontBody,
            color: "#f1f1f1",
          }}>
            {[
              "Interned with TurboDial as Frontend Developer, QA, and Debugger for their application",
              "Computer Science student at Ateneo de Davao University specialized in frontend develpment",
              "Built projects for varying purposes such as restaurant management and faculty scheduling",
            ].map((experience, index) => (
              <li
                key={index}
                style={{
                  fontSize: isMobile ? "1.1rem" : "2.5rem",
                  lineHeight: 1.8,
                  marginBottom: "1rem"
                }}
              >
                {experience}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </FadeUpWrapper>

      {/* Projects link — right aligned */}
      <FadeUpWrapper delay={0.4}>
        <p
          style={{
            textAlign: "center",
            color: "#f1f1f1",
            fontSize: isMobile ? "2.7rem" : "5.6rem",
            fontFamily: fontDisplay,
            lineHeight: 1.6,
            fontWeight: 700,
          }}
        >
          Explore my portfolio of projects<br />{" "}
          <button
            onClick={() => navigate("/projects")}
            onMouseEnter={(e) => {
              e.target.style.backgroundSize = "100% 8px";
              e.target.style.color = "#4e00cc";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundSize = "0% 8px";
              e.target.style.color = "#ffffff";
            }}
            style={{
              background: "none",
              border: "none",
              color: "#ffffff",
              fontFamily: fontDisplay,
              fontSize: isMobile ? "2.2rem" : "4.6rem",
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
              backgroundImage: "linear-gradient(#4e00cc, #4e00cc)",
              backgroundSize: "0% 2px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom left",
              transition: "background-size 0.3s ease, color 0.3s ease",
            }}
          >
            View my recent builds and applications
          </button>
        </p>
      </FadeUpWrapper>
    </motion.div>
  );
}
