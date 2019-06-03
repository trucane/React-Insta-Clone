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
      <SearchBar  data={list.rinstagram}/>
      <PostSection data={list.rinstagram} />
    </div>
  );
}

export default App;
