import React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {
  toggle:boolean
}

function Footer({toggle}:FooterProps) {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/mikhailmtion">
        {!toggle && <img src="./../GitHubDark.png" alt="Github" />}
        {toggle && <img src="./../GitHubLight.png" alt="Github" />}
      </a>
    </div>
  );
}

export default Footer;
