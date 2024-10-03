import React, { useState } from "react";
import styles from "./CreateProfile.module.scss";

export const CreateProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile created:", profile);
  };

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>Create Profile</h1>
      <form className={styles.profileForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.formInput}
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.formInput}
            value={profile.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={styles.formInput}
            value={profile.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};
