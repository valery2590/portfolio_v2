import React from "react";
import styles from "../../styles/Avatar.module.scss";

const Avatar = ({ frontPage }) => {
  return (
    <>
      {frontPage === true ? (
        <div className={styles.avatarContainerFrontPage}>
          <img src="/images/profile_picture.jpeg" />
        </div>
      ) : (
        <div className={styles.avatarContainerButton}>
          <img src="/images/profile_picture.jpeg" />
        </div>
      )}
    </>
  );
};

export default Avatar;
