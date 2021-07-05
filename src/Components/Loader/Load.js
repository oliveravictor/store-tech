import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Load = () => {
  return (
    <div align="center" style={{ marginTop: "2rem" }}>
      <h4>Cargando...</h4>
      <Loader
        type="Bars"
        color="#444444"
        height={100}
        width={100}
        timeout={2000}
      />
    </div>
  );
};

export default Load;
