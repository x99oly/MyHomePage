import 'bootstrap/dist/css/bootstrap.min.css';
import  Alink  from './a_link';

export default function Navbar() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'var(--background)'}}>
      <div className="container-fluid">
      <a className="navbar-brand" href="#/">SAMUEL ARAUJO</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <nav className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Alink title="SOBRE MIM" link="#Link" />
            </li>
            <li className="nav-item">
                <Alink title="PORTIFÓLIO" link="#Portifolio" />
            </li>
            <li className="nav-item">
                <Alink title="CONTATO" link="#Contato" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
