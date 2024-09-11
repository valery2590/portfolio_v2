import React from "react";
import Avatar from "./Avatar";
import styles from "../../styles/Header.module.scss";
import { useRouter } from "next/router";
import CircleWithArrow from "../ArrowSection/CircleWithArrow";
import ArrowSection from "../ArrowSection/ArrowSection";

const Header = ({ homepage }) => {

  const router = useRouter()
  const handlePage = (page) => {
    router.push(page);
  };
  return (
    <>
      {homepage ? (
        <div className={styles.headerContainerHomepage}>
          <Avatar frontPage={true} />
          <div className={styles.headerTitleContainer}>
            <h1 className={styles.headerTitle}>VALERY FIGUEROA HUAMAN</h1>
            <h4 className={styles.headerSubstitle}>Software Developer</h4>
            <h4 className={styles.headerSubstitle}>
              Integrating since the first commit...
            </h4>
          </div>
        </div>
      ) : (
        <div className={styles.headerContainer}>
          <Avatar />
          <div className={styles.navMainContainer}>
            <nav>
              <ul className={styles.navUlContainer}>
                <li
                  onClick={() => {
                    handlePage("/projects");
                  }}
                >
                  <span>
                    {" "}
                    <img src="/icons/doubleCircleArrow.svg" />
                  </span>
                  <div className={styles.titleNavLiContainer}>
                    <span>Projects</span>
                    <span className={styles.navIcon}>
                      <img
                        src="/icons/directions_walk.svg"
                        alt="project-icon"
                      />
                    </span>
                  </div>
                </li>
                <li
                  onClick={() => {
                    handlePage("/skills");
                  }}
                >
                  <span>
                    {" "}
                    <img src="/icons/doubleCircleArrow.svg" />
                  </span>
                  <div className={styles.titleNavLiContainer}>
                    <span> Skills</span>
                    <span className={styles.navIcon}>
                      <img src="/icons/Code.svg" alt="skills-icon" />
                    </span>
                  </div>
                </li>
                <li
                  onClick={() => {
                    handlePage("/quizz");
                  }}
                >
                  <span>
                    {" "}
                    <img src="/icons/doubleCircleArrow.svg" />
                  </span>
                  <div className={styles.titleNavLiContainer}>
                    <span>Quizz</span>
                    <span className={styles.navIcon}>
                      <img src="/icons/favorite.svg" alt="quizz-icon" />
                    </span>
                  </div>
                </li>
                <li
                  onClick={() => {
                    handlePage("/contact");
                  }}
                >
                  <span>
                    {" "}
                    <img src="/icons/arrowRight.svg" />
                  </span>
                  <div className={styles.titleNavLiContainer}>
                    <span>Contact</span>
                    <span className={styles.navIcon}>
                      <img src="/icons/gmail_groups.svg" alt="contact-icon" />
                    </span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
