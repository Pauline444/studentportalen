// pages/Application.jsx
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



export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

    const { addApplication } = useCourses();
    const { applications, getApplicationCount } = useCourses();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Kontrollera att alla fält är ifyllda
        if (name && email && course) {
            // Lägg till ansökan
            addApplication({
                name: name,
                email: email,
                course: course,
                id: Date.now() // Enkel ID
            });

            // Rensa formuläret
            setName('');
            setEmail('');
            setCourse('');

            alert('Ansökan skickad!');
        } else {
            alert('Fyll i alla fält');
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-12 jumbotron text-white p-5">
                    <h1 className="display-4 mb-2">Ansökning</h1>
                    <p className="lead">
                        Skicka in din ansökan till en av våra kurser inom Spiritualism
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
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                margin="normal"
                                required
                            >
                                {courses.map((courseName) => (
                                    <MenuItem key={courseName} value={courseName}>
                                        {courseName.name}
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
            <div className="card align-items-center mt-5">
                <div className="col-md-6">
                    <Box sx={{ padding: 3 }}>
                        <Typography variant="h4" gutterBottom>
                            Sökta kurser
                        </Typography>
                        <Typography variant="p" gutterBottom>
                            Antal ansökningar: {getApplicationCount()}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Alla ansökningar: {applications}
                        </Typography>
                    </Box>
                </div>
            </div>
        </div>
    );
}