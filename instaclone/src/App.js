import React from 'react';
import './App.scss';
import {dummyData} from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostSection from './components/PostSection/PostSection';

const list = {
  rinstagram:dummyData
}

function App() {
  return (
    <div className="App">
      {console.log('I come from App.js',dummyData)}
      <SearchBar  data={list.rinstagram}/>
      <PostSection data={list.rinstagram} />
    </div>
  );
}

export default App;
