import React from "react";
import Avatar from "./Avatar";
import styles from "../../styles/Header.module.scss";

const Header = ({ homepage }) => {
  return (
    <>
      {homepage ? (
        <div className={styles.headerContainerHomepage}>
          <Avatar frontPage={true} />
          <div className={styles.headerTitleContainer}>
            <h1 className={styles.headerTitle}>VALERY FIGUEROA HUAMAN</h1>
            <h4 className={styles.headerSubstitle}>Software Developer</h4>
            <h4 className={styles.headerSubstitle}>Integrating since the first commit...</h4>
          </div>
        </div>
      ) : (
        <div className={styles.headerContainer}>
          <Avatar />
          <div>social media</div>
        </div>
      )}
    </>
  );
};

export default Header;
