
import './App.css';
import React from 'react';
import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters:[],
      searchField:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = (e) =>{
    this.setState({searchField : e.target.value})
  }

  render() {
    const {monsters,searchField} = this.state
    const filteredMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchField))
  return (
    <div className="App">
      <SearchBox placeholder='monster' click = {this.handleChange }/>
      <CardList monsters = {filteredMonsters}/>
    </div> 
  );
}
}

export default App;
