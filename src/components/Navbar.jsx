import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';


export default function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg border-bottom border-body">
            <div className="container position-relative">
                <Link className="navbar-brand" to="/">StudentPortal</Link>

                <Link className="bi bi-basket text-danger position-absolute top-50 start-100 translate-middle ms-4" style={{ fontSize: '1.8rem' }} to="/register"></Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Hem</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Kurser</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/news">Nyheter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

