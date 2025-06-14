import { Link } from 'react-router-dom'
import '../index.css';


export default function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg border-bottom border-body h-100">
            <div className="container position-relative">
                <Link className="navbar-brand" to="/">Aurora Akademin</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center justify-content-md-end w-100">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Hem</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Kurser</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Ansökan</Link>
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

