import React from "react";
import styles from "./ProfileWrapper.module.scss";

import { Link, Outlet } from "react-router-dom";

const ProfileWrapper = () => {
  return (
    <div className={styles.wrapperContainer}>
      <h1 className={styles.wrapperHeader}>Profile Management</h1>
      <div className={styles.wrapperContent}>
        <Link className={styles.black} to={"/profile/createProfile"}>
          CreateProfile
        </Link>
        <Link className={styles.black} to={"/profile/changeAddress"}>
          ChangeAddress
        </Link>
        <Link className={styles.black} to={"/profile/ChangeProfile"}>
          ChangeProfile
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileWrapper;
