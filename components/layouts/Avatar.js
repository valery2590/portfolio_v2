import React from "react";
import styles from "../../styles/Avatar.module.scss";
import { useRouter } from "next/router";

const Avatar = ({ frontPage }) => {

  const router = useRouter()
  const handleHomePage = ()=>{
    router.push('/')
  }
  return (
    <>
      {frontPage === true ? (
        <div className={styles.avatarContainerFrontPage}>
          <img src="/images/profile_picture.jpeg" />
        </div>
      ) : (
        <div className={styles.avatarContainerButton} onClick={handleHomePage}>
          <img src="/images/profile_picture.jpeg" />
        </div>
      )}
    </>
  );
};

export default Avatar;
