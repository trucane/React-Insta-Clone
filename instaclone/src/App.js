import React from 'react';
import './App.scss';
import {dummyData} from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostSection from './components/PostSection/PostSection';

const list = {
  rinstagram:dummyData
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      rinstagram:dummyData
    }
  }

  render(){

    return (
      <div className="App">
        <SearchBar  data={this.state.rinstagram}/>
        <PostSection data={this.state.rinstagram} />
      </div>
    );
  }
}

export default App;
