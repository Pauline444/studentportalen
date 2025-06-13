import { useCourses } from '../context/CourseContext';
import { Link } from 'react-router-dom';

export default function AppliedCoursesList() {
    const { applications, removeApplication } = useCourses();

    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card p-4 col-md-12">
                <h2 className="mb-3">Sökta kurser</h2>
                <p className="mb-4 lead">Mina ansökningar:</p>

                {applications.length === 0 ? (
                    <div>
                        <p className="mb-5 text-danger">Du har inte skickat in några ansökningar ännu.</p>
                        <p className="lead mb-4">
                            Tveka inte att skicka in en ansökan eller bläddra vidare i vårt kursutbud!
                        </p>
                        <Link to="/register" className="btn btn-outline-primary btn-lg me-3">
                            Ansök Här
                        </Link>
                        <Link to="/courses" className="btn btn-primary btn-lg me-3">
                            Bläddra Kurser
                        </Link>
                    </div>
                ) : (
                    <ul className="list-group">
                        {applications.map((app) => (
                            <li
                                key={app.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <div>
                                    <strong>{app.course.name}</strong><br />
                                    {app.name} – {app.email}
                                </div>
                                <button
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => removeApplication(app.id)}
                                >
                                    &times;
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
