import React, {Component} from 'react'

class Project extends Component{

    render(){
        return (
            <div className="card project">
              <img className="card-img-top" src="project.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title</p>
                <p>
                  <i className="fas fa-heart"></i>
                  <i className="fas fa-edit"></i>
                  <i className="fas fa-trash"></i>
                </p>
              </div>
            </div>
        )
    }
}
export default Project