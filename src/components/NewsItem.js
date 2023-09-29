import React from 'react';

export default function NewsItem (props) {
        const { title, description, imageUrl, newsUrl,author , date ,source} = props;
        return (
            <div>
                <div className="card">
                    <span className='position-absolute translate-middle badge rounded-pill bg-danger' style={{top : "-2%" , left:"1%",zIndex: "1"}}> {source.name}</span>
                    <img src={imageUrl || "https://images.cnbctv18.com/wp-content/uploads/2022/09/Warren-Buffett-1019x573.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>  
                        <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        );
    }