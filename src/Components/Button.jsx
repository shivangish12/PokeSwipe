import React from "react";
import styles from "./Welcome.module.css";

const Button = ({ onClick }) => {
  return (
    <button className={styles["lets-go-button"]} onClick={onClick}>
      Let's Go
    </button>
  );
};

export default Button;
