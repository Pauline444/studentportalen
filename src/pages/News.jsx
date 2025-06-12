import React, { useState, useEffect } from 'react';

export default function News() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                if (!response.ok) {
                    throw new Error('Kunde inte hämta nyheter');
                }

                const data = await response.json();
                // Begränsa till 12 nyheter för bättre prestanda
                setNews(data.slice(0, 10));
            } catch (err) {
                setError(err.message);

            };
        }
        fetchNews();
    }, []);

    if (error) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">Fel!</h4>
                    <p>{error}</p>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => window.location.reload()}
                    >
                        Försök igen
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 jumbotron text-white p-5">
                    <h1 className="display-4 mb-2">Nyheter</h1>
                    <p className="lead">
                        Läs våra spännande nyheter från gästlärare, alumner och studenter och håll dig uppdaterad med viktiga meddelanden och kommande evenemang.
                    </p>
                </div>
            </div>
            {/* News Grid */}
            <div className="row">
                {news.map((article) => (
                    <div key={article.id} className="col-lg-6 col-md-8 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column p-5">
                                {/* Titel */}
                                <h5 className="card-title pb-3">
                                    {article.title}
                                </h5>

                                {/* Innehåll */}
                                <p className="card-text flex-grow-1">
                                    {article.body}
                                </p>
                            </div>
                            <div className='text-center pb-2'>
                                <button className="btn mb-3">
                                    <i className="bi bi-newspaper text-primary" style={{ fontSize: '3rem' }}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}






// //Formatera datum (simulerat eftersom API:et inte har riktiga datum)
// const getRandomDate = (id) => {
//     const dates = [
//         '2024-06-01', '2024-06-02', '2024-06-03', '2024-06-04',
//         '2024-06-05', '2024-06-06', '2024-06-07', '2024-06-08'
//     ];
//     return dates[id % dates.length];
// };

// 








