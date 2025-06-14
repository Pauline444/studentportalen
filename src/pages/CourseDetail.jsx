import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import { useParams } from 'react-router-dom';
import courses from '../data/courses';
import { Link } from 'react-router-dom';

export default function CourseDetail() {
    const { id } = useParams()

    const course = courses.find(course => course.id === parseInt(id))

    if (!course) {
        return <p>Kursen hittades inte!</p>
    }
    return (
        <div className='container'>
            <div className="col-12 jumbotron text-white p-5">
                <h1 className="display-4 mb-2">Kursdetaljer för {course.name}</h1>
                <p>{console.log(`Visar detaljer för kurs med ID: ${id}`)}</p>
                <p className="lead">
                    {course.shortDescription}
                </p>
            </div>
            <div className='card h-100 shadow-sm'>
                <div className="card-body d-flex flex-column p-3 p-md-5">
                    <div className="mb-2">
                        <span className="badge bg-secondary">
                            {course.category}
                        </span>
                    </div>
                    <div className="lead mb-4 mt-2">
                        <p>{course.fullDescription}</p>
                    </div>
                    <div className="mb-4 mt-2">
                        <small>Instruktör:</small>
                        <div className='lead'>{course.instructor}</div>
                    </div>
                    <div className="row text-center m-4">
                        <div className="col-4">
                            <small className="text-muted">Längd</small>
                            <div className="fw-bold">{course.duration}</div>
                        </div>
                        <div className="col-4">
                            <small className="text-muted">Platser</small>
                            <div className="fw-bold">{course.spots}</div>
                        </div>
                        <div className="col-4">
                            <small className="text-muted">Start Datum</small>
                            <div className="fw-bold">{course.startDate}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-light">
                                <div className="card-body text-center py-5">
                                    <h2 className="mb-4">Redo att Börja Din Resa?</h2>
                                    <p className="lead mb-4">
                                        Tveka inte att skicka in en ansökan eller bläddra vidare i vårat kursutbud!
                                    </p>
                                    <Link to="/register" className="btn btn-primary btn-lg me-3">
                                        Ansök Här
                                    </Link>
                                    <Link to="/courses" className="btn btn-outline-primary btn-lg">
                                        Kursutbud
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}