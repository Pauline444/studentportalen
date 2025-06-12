import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default function Footer() {
    return (
        <div className='footer navbar-expand-lg text-secondary'>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">

                    <h5 className="card-title">Social Media Magic</h5>
                    <p className="card-text">Följ oss på sociala medier. Här kan du möta lärare, elever och alumner som alla tagit del av våra magiska kurser.</p>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram ms-5"></i>
                </div>
                <div className="col-sm-6">
                    <h5 className="card-title">LinkedIn Workspace</h5>
                    <p className="card-text">Connecta med oss på LinkedIn och dela dina erfarenheter för att bygga ditt nätverk.</p>
                    <i className="bi bi-linkedin"></i>
                </div>
            </div>
        </div>
    )
}