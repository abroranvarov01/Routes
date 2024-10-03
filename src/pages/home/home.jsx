import React from "react";
import styles from "./home.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <main className={styles.homepage__content}>
        <section id="home">
          <h2>Home Section</h2>
          <p>Welcome to the homepage content!</p>
        </section>
        <section id="about">
          <h2>About Section</h2>
          <p>Learn more about us here.</p>
        </section>
        <section id="contact">
          <h2>Contact Section</h2>
          <p>Get in touch with us!</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
