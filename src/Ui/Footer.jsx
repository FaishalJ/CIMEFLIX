import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa";

import Logo from "./Logo";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.footer_icons}>
        <HiOutlinePhone />
        <HiOutlineEnvelope />
        <FaLinkedinIn />
      </div>
      {/* <p>
        You can bookmark movies to watch at a later time as well as view
        movie details, photos, and casts on the Cimeflix website. Jaffar
        constructed it in React as one of his portfolio projects.
      </p> */}

      <p className={styles.footer_text}>
        &copy; Copyright <a href="#">Faishal Jaffar</a>. React Portfolio project
      </p>
    </footer>
  );
}
