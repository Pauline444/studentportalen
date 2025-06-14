import React, { useState } from 'react';
import {
    TextField,
    Button,
    MenuItem,
    Box,
    Typography
} from '@mui/material';
import { courses } from '../data/courses'
import { useCourses } from '../context/CourseContext'
import AppliedCourseCard from '../components/AppliedCourseCard'



export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

    const { addApplication } = useCourses();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Kontrollera att alla fält är ifyllda
        if (name && email && course) {
            // Lägg till ansökan
            const selectedCourse = courses.find(c => c.name === course.name);

            addApplication({
                name,
                email,
                course: selectedCourse,
                id: Date.now()
            });

            setName('');
            setEmail('');
            setCourse('');
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-12 jumbotron text-white p-5">
                    <h1 className="display-4 mb-2">Ansöknings formulär</h1>
                    <p className="lead">
                        Skicka in din ansökan till en av våra kurser inom Spiritualism och låt en helt ny värld öppna sig för dig
                    </p>
                </div>
            </div>
            <div className="card align-items-center">
                <div className="col-md-6">
                    <Box sx={{ padding: 5 }}>
                        <Typography variant="h4" gutterBottom>
                            Ansök till kurs
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            {/* Namn */}
                            <TextField
                                fullWidth
                                label="Namn"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                margin="normal"
                                required
                            />

                            {/* E-post */}
                            <TextField
                                fullWidth
                                label="E-post"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                                required
                            />

                            {/* Kursval */}
                            <TextField
                                fullWidth
                                select
                                label="Välj kurs"
                                value={course ? course.name : ''}
                                onChange={(e) => {
                                    const selected = courses.find(c => c.name === e.target.value);
                                    setCourse(selected);
                                }}
                                margin="normal"
                                required
                            >
                                {courses.map((c) => (
                                    <MenuItem key={c.name} value={c.name}>
                                        {c.name}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {/* Skicka knapp */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                size="large"
                            >
                                Skicka in ansökan
                            </Button>
                        </form>
                    </Box>
                </div>
            </div>
            <div className="align-items-center mt-5">
                <AppliedCourseCard />
            </div>
        </div>
    );
}