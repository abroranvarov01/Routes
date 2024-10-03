import React from "react";
import styles from "./ChangeProfile.module.scss";

export const ChangeProfile = () => {
  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>Change Profile</h1>
      <form className={styles.profileForm}>
        <div className={styles.formField}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};
