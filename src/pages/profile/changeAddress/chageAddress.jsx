import React, { useState } from "react";
import styles from "./ChangeAddress.module.scss";

export const ChangeAddress = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address submitted:", address);
  };

  return (
    <div className={styles.addressContainer}>
      <h1 className={styles.addressHeader}>Change Address</h1>
      <form className={styles.addressForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="street">
            Street
          </label>
          <input
            type="text"
            id="street"
            name="street"
            className={styles.formInput}
            value={address.street}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className={styles.formInput}
            value={address.city}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="state">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className={styles.formInput}
            value={address.state}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="zip">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            className={styles.formInput}
            value={address.zip}
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
