/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const CourseContext = createContext();

// Children = allt som ligger innanför CourseProvider
export const CourseProvider = ({ children }) => {
    const [applications, setApplications] = useState([]);

    // Ladda ansökningar från localStorage när sidan laddas
    useEffect(() => {
        try {
            const stored = localStorage.getItem('applications');
            console.log('Laddar från localStorage:', stored);

            if (stored && stored !== "undefined") {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setApplications(parsed);
                } else {
                    console.warn('Datan i localStorage är inte en array:', parsed);
                }
            }
        } catch (error) {
            console.error('Fel vid JSON.parse:', error);
        }
    }, []);


    // Spara till localStorage när ansökningar ändras
    useEffect(() => {
        if (applications.length > 0) {
            try {
                const json = JSON.stringify(applications);
                localStorage.setItem('applications', json);
                console.log('Applications sparade:', json);
            } catch (error) {
                console.error('Fel vid sparning till localStorage:', error);
            }
        }
    }, [applications]);


    const addApplication = (application) => {
        const newApplications = [...applications, application];
        setApplications(newApplications);
        localStorage.setItem('applications', JSON.stringify(newApplications));
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
