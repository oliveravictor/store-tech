import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className={"error__container"}>
      <h3 className="error__title">Ups.. página no encontrada</h3>;
      <Link to="/" className={"error__btn-container"}>
        <Button className={"error__button"} variant={"dark"}>
          Volver a Home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
