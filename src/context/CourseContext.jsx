// context/CourseContext.jsx
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

// Skapa Context
const CourseContext = createContext();

// Provider komponent
export function CourseProvider({ children }) {
    const [applications, setApplications] = useState([]);

    // Lägg till ny ansökan
    const addApplication = (application) => {
        setApplications(prev => [...prev, application]);
    };

    // Kontrollera om det finns ansökningar
    const hasApplications = () => applications.length > 0;

    // Antal ansökningar
    const getApplicationCount = () => applications.length;

    return (
        <CourseContext.Provider value={{
            applications,
            addApplication,
            hasApplications,
            getApplicationCount
        }}>
            {children}
        </CourseContext.Provider>
    );
}

// Hook för att använda Context
export function useCourses() {
    const context = useContext(CourseContext);
    if (!context) {
        throw new Error('useCourses måste användas inom CourseProvider');
    }
    return context;
}