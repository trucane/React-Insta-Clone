import React from 'react';
import './App.scss';
import {dummyData} from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostSection/PostContainer';
import PropTypes from 'prop-types';

class App extends React.Component {
  
  state = {
    data:[]
  }


  componentDidMount(){
    return this.setState({
      data:dummyData
    })
  }

  render(){
  
  
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer data={this.state.data}/>
      </div>
    );
  }


}




App.prototypes={
  rinstagram: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            likes: PropTypes.number,
            timestamp: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            comments:PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    text: PropTypes.string.isRequired,
                    username: PropTypes.string.isRequired,
                })
            ).isRequired
    })
  )
}


export default App;
