/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const [applications, setApplications] = useState([]);

    // Ladda ansökningar från localStorage när sidan laddas
    useEffect(() => {
        const stored = localStorage.getItem('applications');
        if (stored) {
            setApplications(JSON.parse(stored));
        }
    }, []);

    // Spara till localStorage när ansökningar ändras
    useEffect(() => {
        localStorage.setItem('applications', JSON.stringify(applications));
    }, [applications]);

    const addApplication = (application) => {
        setApplications(prev => [...prev, application]);
    };

    const removeApplication = (id) => {
        setApplications(prev => prev.filter(app => app.id !== id));
    };

    const hasApplications = () => applications.length > 0;

    const getApplicationCount = () => applications.length;

    return (
        <CourseContext.Provider value={{
            applications,
            addApplication,
            removeApplication,
            hasApplications,
            getApplicationCount
        }}>
            {children}
        </CourseContext.Provider>
    );
};

export const useCourses = () => useContext(CourseContext);
