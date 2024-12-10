import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,url}=this.props;
    return (
      <div className='my-3'>
    
        <div className="card" style={{width: "18rem"}}>
              <img src={imageUrl?imageUrl:"https://pyxis.nymag.com/v1/imgs/790/f49/f80edfe75edec35c5487f664521a2a4648-sabrina-carpenter:imageUrl"} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" className="btn btn-dark">Read more</a>
              </div>
            </div> 
       
      </div>
    )
  }
}

export default Newsitem
