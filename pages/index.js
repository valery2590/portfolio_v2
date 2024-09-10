import { useState } from "react";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import styles from "../styles/globals.module.scss";
import InfoTitle from "../components/infoSection/InfoTitle";

// pages/index.js
export default function Home() {
  const [enabled, setEnabled] = useState(false);

  const handleToggleMode = () => {
    setEnabled(!enabled);
  };
  return (
    <div
      className={styles.wholePageContainer}
      style={{
        backgroundColor: enabled ? "#8177ad" : "#b7abe4",
        color: enabled ? "#FFF" : "#000",
        minHeight: "100vh",
      }}
    >
      <Header homepage={true} />
      <InfoTitle title={"ABOUT"} icon={"/icons/account_circle.svg"} direction={"arrow-down"} />
      {/*
      <InfoTitle title={"PPROJECTS"} icon={"/icons/directions_walk.svg"} />
      <InfoTitle title={"SKILLS"} icon={"/icons/CODE.svg"} />
      <InfoTitle title={"QUIZZ"} icon={"/icons/favorite.svg"} />
      <InfoTitle title={"SOCIAL MEDIA"} icon={"/icons/share.svg"} />
      <InfoTitle title={"CONTACT"} icon={"/icons/gmail_groups.svg"} /> */}
      <Footer enabled={enabled} setEnabled={handleToggleMode} />
    </div>
  );
}
