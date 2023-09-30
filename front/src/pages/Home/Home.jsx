import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="home">
          <div className="home__title">
            <h1>App Geolocalización</h1>
            <h2>Ciudad de Concepción del Uruguay</h2>
          </div>
          <div className="home__buttons">
            <Link to="/list">Listar ubicaciónes</Link>
            <Link to="/create">Crear ubicación</Link>
            <Link to="/config">Configuración</Link>
          </div>
        </div>
      </div>
    </>
  );
}
