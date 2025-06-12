import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import News from './pages/News'
import Register from './pages/Register'
import { CourseProvider } from './context/CourseContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {

  return (
    <CourseProvider>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CourseProvider>
  )
}