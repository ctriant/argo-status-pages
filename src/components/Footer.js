import * as React from "react";
import { Image } from "react-bootstrap";
import setThemeValue from "../helpers/helpers";

import { COPYRIGHT } from "../config";
import {THEME} from "../config";
import styles from "../styles/App.module.css";


const Footer = () => {
  setThemeValue("footer-gradient-color-start", THEME["footer-gradient-color-start"]);
  setThemeValue("footer-gradient-color-end", THEME["footer-gradient-color-end"]);
  setThemeValue("footer-copyright-text-color", THEME["footer-copyright-text-color"]);

  const year = new Date().getFullYear();

  return (
    <footer className={`${styles["footer"]} mt-auto`}>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <Image src={"/footer_logo.svg"} className={`${styles["footer-logo"]}`}/>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className={`${styles["copyright"]} col-md-6 mb-md-0 mb-3`}>
            <span>Copyright {year} - {COPYRIGHT}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
