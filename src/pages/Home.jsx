import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div className="row mb-5">
                <div className="col-12">
                    <div className="jumbotron bg-indigo text-white p-5 rounded">
                        <h1 className="display-4">Välkommen till Aurora Akademin´s StudentPortal!</h1>
                        <p className="lead">
                            Din plattform för att upptäcka kurser, läsa de senaste nyheterna och
                            registrera dig för dina favoritkurser.
                        </p>
                        <Link className="btn btn-light btn-lg" to="/courses" role="button">
                            Utforska Kurser
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation Cards */}
            <div className="row mb-5">
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center">
                            <div className="mb-3">
                                <i className="bi bi-book-fill text-primary" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h3 className="card-title">Kursutbud</h3>
                            <p className="card-text">
                                Upptäck vårt breda utbud av kurser inom olika ämnesområden.
                                Från grundkurser till avancerade specialiseringar.
                            </p>
                            <Link to="/courses" className="btn btn-primary">
                                Se Alla Kurser
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center">
                            <div className="mb-3">
                                <i className="bi bi-newspaper text-primary" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h3 className="card-title">Senaste Nyheterna</h3>
                            <p className="card-text">
                                Håll dig uppdaterad med de senaste nyheterna från skolan,
                                viktiga meddelanden och kommande evenemang.
                            </p>
                            <Link to="/news" className="btn btn-primary">
                                Läs Nyheter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Quick Stats Section */}
            <div className="row mb-5">
                <div className="col-12">
                    <h2 className="text-center mb-4">Varför Välja Oss?</h2>
                </div>
                <div className="col-md-4 text-center mb-3">
                    <div className="p-3">
                        <h3 className="text-primary">50+</h3>
                        <p className="mb-0">Tillgängliga Kurser</p>
                    </div>
                </div>
                <div className="col-md-4 text-center mb-3">
                    <div className="p-3">
                        <h3 className="text-success">1000+</h3>
                        <p className="mb-0">Aktiva Studenter</p>
                    </div>
                </div>
                <div className="col-md-4 text-center mb-3">
                    <div className="p-3">
                        <h3 className="text-warning">24/7</h3>
                        <p className="mb-0">Teknisk Support</p>
                    </div>
                </div>
            </div>


            {/* Featured Courses Preview */}
            <div className="row mb-5">
                <div className="col-12">
                    <h2 className="mb-4">Populära Kurser</h2>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tarotkortsläsare</h5>
                            <p className="card-text">
                                Lär dig använda kristallers energi för healing och balans.
                            </p>
                            <small className="text-muted">12 veckor • Nybörjarvänlig</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Reiki-mästare</h5>
                            <p className="card-text">
                                Kanalisera universell livsenergi för healing och balans.
                            </p>
                            <small className="text-muted">16 veckor • Medel</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Schamansk Praktiker</h5>
                            <p className="card-text">
                                Utforska shamanska tekniker för själslig healing och vägledning.
                            </p>
                            <small className="text-muted">10 veckor • Nybörjarvänlig</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="row">
                <div className="col-12">
                    <div className="card bg-light">
                        <div className="card-body text-center py-5">
                            <h2>Redo att Börja Din Resa?</h2>
                            <p className="lead mb-4">
                                Registrera dig idag och få tillgång till alla våra kurser och resurser.
                            </p>
                            <Link to="/courses" className="btn btn-primary btn-lg me-3">
                                Bläddra Kurser
                            </Link>
                            <Link to="/news" className="btn btn-outline-primary btn-lg">
                                Läs Mer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}