  import React, { Component } from 'react';
import Projects from './components/projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
import uuid from 'uuid';
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects:[],
      todos:[]
    };
  }

  getProjects(){
    this.setState({projects:[
      {
        id:uuid.v4(),
        title : "Business Intelligence" ,
        category:"Analytics"
      },

      {
        id:uuid.v4(),
        title : "Business Development" ,
        category:"Marketing"
      },
      {
        id:uuid.v4(),
        title : "Web Portal" ,
        category:"Engineering"
      }
    ]});
  }
  getTodos(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos',
        dataType:'json',
        cache:false,
        success:function(data){
          this.setState({todos:data},function(){
            console.log(this.state);
          });
        }.bind(this),
        error:function(xhr,status,err){
          console.log(err);
        }
      });
  }
  componentWillMount(){ //componentDidMount alternative way
      this.getProjects();
      this.getTodos();
  }

  componentDidMount(){
      this.getTodos();
  }

  handleAddProject(project){
    let addProjects =  this.state.projects;
    addProjects.push(project);
    this.setState(addProjects:projects);
  }

  handleDeleteProject(id){
    let projects =  this.state.projects;
    let index = projects.findIndex(x=>x.id ===id);
    projects.splice(index,1);
    this.setState(projects:projects);
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject = {this.handleAddProject.bind(this)}/>
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
        <br/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
