import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        let noImage = "https://images.squarespace-cdn.com/content/v1/5d16e42a3ae2ee0001a08d34/1567592939024-YBDSQ6GMGTT4B84F2U16/Headshot.jpg"
        return (
            <div>
                <div className="card my-3">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%' }}>
                        {source}
                    </span>
                    <img src={imageUrl ? imageUrl : noImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem
