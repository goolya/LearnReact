import React, { Component } from 'react';

class ProjectItem extends Component {
  handleDelete(id){
    this.props.onDelete(id);
  }

  render() {

    return (
      <li className="Projects">

      <strong>{this.props.project.title} </strong> : {this.props.project.category} <strong> <a href='#' onClick={this.handleDelete.bind(this,this.props.project.id)}> X</a> </strong>
      </li>
    );
  }
}

export default ProjectItem;
