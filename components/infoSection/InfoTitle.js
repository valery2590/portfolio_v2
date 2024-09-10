import React, { useState } from "react";
import styles from "../../styles/InfoTitle.module.scss";
import { ArcherContainer, ArcherElement } from "react-archer";

const InfoTitle = ({ title, icon, direction }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <ArcherContainer strokeColor="black">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "repeat(6, 50px)",
          gridGap: "10px",
          padding: "20px",
        }}
      >
        {/* ABOUT */}
        <ArcherElement
          id="about"
          relations={[
            {
              targetId: "cv",
              targetAnchor: "top",
              sourceAnchor: "left",
              style: hovered
                ? { strokeDashoffset: "-20" }
                : { strokeDasharray: "5,5" },
              className: hovered ? "dashedLine" : "",
            },
          ]}
        >
          <div
            style={{
              gridColumn: "2",
              gridRow: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              padding: "10px",
              cursor: "pointer",
              fontSize: "1.3vw",
              
            }}
            onMouseEnter={() => {
              setHovered(true);
              console.log("hola");
            }}
            onMouseLeave={() => setHovered(false)}
          >
            <div>About</div>
            <img src={"/icons/account_circle.svg"} alt="icon" style={{width: "2.5vw"}}  />
          </div>
        </ArcherElement>

        {/* CV */}
        <ArcherElement
          id="cv"
          relations={[
            {
              targetId: "projects",
              targetAnchor: "left",
              sourceAnchor: "bottom",
              style: { strokeDasharray: "5,5" },
            },
          ]}
        >
          <div
            style={{
              gridColumn: "1",
              gridRow: "3",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1.3vw",
            }}
          >
            <div>CV</div>
            <img src={"/icons/attach_file.svg"} alt="icon" style={{width: "2.5vw"}} />
          </div>
        </ArcherElement>

        {/* PROJECTS */}
        <ArcherElement
          id="projects"
          relations={[
            {
              targetId: "skills",
              targetAnchor: "left",
              sourceAnchor: "right",
              style: { strokeDasharray: "5,5" },
            },
          ]}
        >
          <div
            style={{
              gridColumn: "3",
              gridRow: "6",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "1.3vw",
            }}
          >
            <div>Projects</div>
            <img src={"/icons/directions_walk.svg"} alt="icon" style={{width: "2.5vw"}} />
          </div>
        </ArcherElement>

        {/* SKILLS */}
        <ArcherElement
          id="skills"
          relations={[
            {
              targetId: "quizz",
              targetAnchor: "bottom",
              sourceAnchor: "top",
              style: { strokeDasharray: "5,5" },
            },
          ]}
        >
          <div
            style={{
              gridColumn: "6",
              gridRow: "6",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              cursor: "pointer",
              fontSize: "1.3vw",
            }}
          >
            <div>Skills</div>
            <img src={"/icons/Code.svg"} alt="icon" style={{width: "2.5vw"}} />
          </div>
        </ArcherElement>

        {/* QUIZZ */}
        <ArcherElement
          id="quizz"
          relations={[
            {
              targetId: "socialMedia",
              targetAnchor: "left",
              sourceAnchor: "right",
              style: { strokeDasharray: "5,5" },
            },
          ]}
        >
          <div
            style={{
              gridColumn: "4",
              gridRow: "3",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              cursor: "pointer",
              fontSize: "1.3vw",
            }}
          >
            <div>Quizz</div>
            <img src={"/icons/favorite.svg"} alt="icon" style={{width: "2.5vw"}} />
          </div>
        </ArcherElement>

        {/* SOCIAL MEDIA */}
        <ArcherElement
          id="socialMedia"
          relations={[
            {
              targetId: "contact",
              targetAnchor: "bottom",
              sourceAnchor: "right",
              style: { strokeDasharray: "5,5" },
            },
          ]}
        >
          <div
            style={{
              gridColumn: "7",
              gridRow: "4",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              cursor: "pointer",
              fontSize: "1.3vw",
              padding:"20px"
            }}
          >
            <div>Social Media</div>
            <img src={"/icons/share.svg"} alt="icon" style={{width: "2.5vw"}} />
          </div>
        </ArcherElement>

        {/* CONTACT */}
        <ArcherElement id="contact">
          <div
            style={{
              gridColumn: "8",
              gridRow: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              cursor: "pointer",
              fontSize: "1.3vw",
            }}
          >
            <div>Contact</div>
            <img src={"/icons/gmail_groups.svg"} alt="icon" style={{width: "2.5vw"}} />
          </div>
        </ArcherElement>
      </div>
    </ArcherContainer>
  );
};

export default InfoTitle;
