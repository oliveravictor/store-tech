import "./Footer.css";

const Footer = () => {
  return (
    <div className={"footer"}>
      <p className={"footer__title"}>® Store Tech / 2021</p>
      <p className={"footer__credit"}>
        Sitio hecho por
        <a
          className={"footer__autor"}
          href="https://oliveravictor.github.io/siteup/"
          target="_blank"
        >
          Víctor Olivera
        </a>
      </p>
      <button className={"footer__button"}>
        <a href="https://www.linkedin.com/in/victor-olivera/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </button>
      <button className={"footer__button"}>
        <a href="https://github.com/oliveravictor" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </button>
    </div>
  );
};
export default Footer;
