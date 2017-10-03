import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
  handleDelete(id){
    this.props.onDelete(id);
  }
  render() {
    let projectItem;
    if(this.props.projects){
      projectItem=this.props.projects.map(project =>{
        return(
          <ProjectItem onDelete={this.handleDelete.bind(this)} key={project.title} project={project}/>
        );
      });
    }

    return (
      <div className="Projects">
          My Projects<br/>
          {projectItem}
      </div>
    );
  }
}

export default Projects;
