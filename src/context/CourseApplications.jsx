import { useCourses } from '../context/CourseContext';

export default function CourseApplications() {
    const { applications, getApplicationCount } = useCourses();

    console.log('Antal ansökningar:', getApplicationCount());
    console.log('Alla ansökningar:', applications);
}