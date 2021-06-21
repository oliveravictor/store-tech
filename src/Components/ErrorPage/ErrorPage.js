import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1 className="text-center mt-5">ES UN ERROR</h1>;
      <Link to="/">
        <Button className="mb-5 mt-5" style={{ width: "28%", margin: "35%" }}>
          Volver a Home
        </Button>
      </Link>
    </>
  );
};

export default ErrorPage;
