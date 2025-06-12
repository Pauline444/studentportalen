import { useState } from 'react'
import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

export default function Courses() {
    const [selectedCategory, setSelectedCategory] = useState('Alla')
    const [searchTerm, setSearchTerm] = useState('')

    const categories = ['Alla', ...new Set(courses.map(course => course.category))]

    const filteredCourses = courses.filter(course => {
        const matchesCategory = selectedCategory === 'Alla' || course.category === selectedCategory
        const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div>
            <div className="row">
                <div className="col-12 jumbotron text-white p-5">
                    <h1 className="display-4 mb-2">Våra Kurser</h1>
                    <p className="lead">
                        Upptäck vårt omfattande utbud av kurser inom Spiritualism
                    </p>
                </div>
            </div>
            {/* Filter och Sök */}
            <div className="row mb-4">
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Sök kurser..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <select
                        className="form-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/* Kurskort */}
            <div className="row mt-5">
                {filteredCourses.length === 0 ? (
                    <div className="col-12 text-center">
                        <div className="alert alert-warning">
                            <h4>Inga kurser hittades</h4>
                            <p>Prova att ändra din sökning eller välj en annan kategori.</p>
                        </div>
                    </div>
                ) : (
                    filteredCourses.map(course => (
                        <div key={course.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body d-flex flex-column">
                                    <div className="mb-2">
                                        <span className="badge bg-secondary">
                                            {course.category}
                                        </span>
                                    </div>

                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text text-muted">{course.shortDescription}</p>

                                    <div className="mt-auto">
                                        <div className="row text-center mb-3">
                                            <div className="col-4">
                                                <small className="text-muted">Längd</small>
                                                <div className="fw-bold">{course.duration}</div>
                                            </div>
                                            <div className="col-4">
                                                <small className="text-muted">Platser</small>
                                                <div className="fw-bold">{course.spots}</div>
                                            </div>
                                        </div>

                                        <div className="d-grid">
                                            <Link
                                                to={`/courses/${course.id}`}
                                                className="btn btn-primary"
                                            >
                                                Läs mer
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
