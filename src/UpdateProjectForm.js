import React, {Component} from 'react';

class UpdateProjectForm extends Component{

    constructor(props){
		super(props)

	}

    render(){
        return (
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
        )
    }
}
export default UpdateProjectForm