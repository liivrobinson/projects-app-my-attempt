import React, { Component } from 'react';
import View from './View';
import Project from './Project';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      activeView: 'projects',
      projects:[
        {
          id: 1,
          name: 'Morning in Waiheke',
          description: 'Painting by a local artist'
        },{
          id: 2,
          name: 'The thinking man',
          description: 'Bronze sculpture fitted for a modern office space'
        }
      ],
    }
  }

  setActiveView = (view) => {
    this.setState({activeView:view})
  }

  render(){
    return (
      <div className="app">
        <View viewName="projects" activeView={this.state.activeView} className="color1">
          <div className="header">
            <i onClick={() => this.setActiveView('add-project')} className="fas fa-plus"></i>
            <i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i>
          </div>
          <div className="main">
            <h3>Projects</h3>
              <Project></Project>
          </div>
        </View>
        <View viewName="add-project" activeView={this.state.activeView} className="color2">
          <div className="header"><i onClick={() => this.setActiveView('projects')} className="fas fa-times"></i></div>
          <div className="main">
            <h3>Add a project</h3>
            <form>
              <div className="form-group">
                <label for="name-input">Name</label>
                <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter project name"/>
              </div>
              <div className="form-group">
                <label for="name-input">Description</label>
                <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter project description"/>
              </div>
              <div className="form-group">
                <label for="name-input">Photo</label>
                <input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg"/>
              </div>
              <div className="form-group">
                <label for="type-input">Type</label>
                <select className="form-control" name="type-input" id="type-input">
                  <option value="1">Painting</option>
                  <option value="2">Sculpture</option>
                  <option value="3">Digital</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Add</button>
            </form>
          </div>
        </View>
        <View viewName="update-project" activeView={this.state.activeView} className="color3">
          <div className="header"><i onClick={() => this.setActiveView('projects')} className="fas fa-times"></i></div>
          <div className="main">
            <h2>Update Projects</h2>
            <form>
              <div className="form-group">
                <label for="name-input">Name</label>
                <input type="text" className="form-control" name="name-input" id="name-input" defaultValue="Morning in Waiheke"/>
              </div>
              <div className="form-group">
                <label for="name-input">Description</label>
                <input type="text" className="form-control" name="description-input" id="description-input" defaultValue="Painting by an local artist"/>
              </div>
              <div className="form-group">
                <label for="name-input">Photo</label>
                <input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg"/>
              </div>
              <div className="form-group">
                <label for="type-input">Type</label>
                <select className="form-control" name="type-input" id="type-input">
                  <option value="1">Painting</option>
                  <option value="2">Sculpture</option>
                  <option value="3">Digital</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Add</button>
            </form>
          </div>
        </View>
        <View viewName="nav" activeView={this.state.activeView} className="color5">
          <div className="header"><i onClick={() => this.setActiveView('projects')} className="fas fa-times"></i></div>
          <div className="main">
            <ul className="menu">
              <li><a className="color1" href="">Projects</a></li>
              <li><a className="color2" href="">Add a project</a></li>
              <li><a className="color4" href="">Login</a></li>
              <li><a className="color5" href="">Signup</a></li>
            </ul>
          </div>
        </View>
      </div>
    );
  }
}

export default App;
