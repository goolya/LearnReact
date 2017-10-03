import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor(){
      super();
      this.state={
        newProjects:{}
      }
    }

    static defaultProps = {
      categories:['Analytics','Development','Marketing']
    }

    handleSubmit(e){
      if(this.refs.title.value===' '){
        alert("Enter the title");
      } else {
        this.setState({newProjects:{
          id:uuid.v4(),
          title:this.refs.title.value,
          category:this.refs.category.value
        }},function() {
          this.props.addProject(this.state.newProjects);
        });
      }
      e.preventDefault();
    }
  render(){
    let categoryOptions = this.props.categories.map(
      category => {
        return <option key={category} value={category}>
          {category}
          </option>
    }
  );

    return (
      <div>
          <h3> Add Project </h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label> Title</label><br/>
            <input type="text" ref="title"/>

        </div>
        <div>
          <label>Category</label><br/>
          <select ref="category">
            {categoryOptions}
          </select>
          </div>
          <div>
          <input type='submit' value='Submit'/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
