import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from "../../styles/globals.module.scss"

const Layout = ({children, homepage}) => {
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
        <Header homepage={homepage} />
        <main>{children}</main>
        <Footer enabled={enabled} setEnabled={handleToggleMode} />
      </div>
    );
};

export default Layout;