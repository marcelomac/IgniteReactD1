import styles from "./Header.module.css";

import logo from '../assets/Logo.png';

export function Header(): any {
  return (
    <header className={styles.header}>
      <img src={logo} />
    </header>
  );
}
