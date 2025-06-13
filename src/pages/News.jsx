import React from 'react';
import { news } from '../data/news';

export default function News() {

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
                            {article.foto && (
                                <img
                                    src={article.foto}
                                    className="card-img-top"
                                    alt={article.name}
                                />
                            )}
                            <div className="card-body d-flex flex-column p-4">
                                <h3 className="card-title">{article.name}</h3>
                                <p className="text-muted mb-2">{article.date} – {article.location}</p>
                                <p className="card-text lead">{article.shortDescription}</p>
                                <p className="card-text">{article.fullDescription}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}





