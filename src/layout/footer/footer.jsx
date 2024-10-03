import React from "react";
import style from "./footer.module.scss"

function Footer() {
  return (
    <footer>
      <p>© 2024 Ваша Компания. Все права защищены.</p>
      <p>
        <a href="/privacy-policy">Политика конфиденциальности</a> |
        <a href="/terms-of-service">Условия использования</a>
      </p>
    </footer>
  );
}

export default Footer;
