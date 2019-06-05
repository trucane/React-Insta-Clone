import React from 'react';
import './App.scss';
import {dummyData} from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostSection/PostContainer';
import PropTypes from 'prop-types';

class App extends React.Component {
  
  state = {
    data:[],
    search:'',
    filteredPosts:[]
  }


  componentDidMount(){
    return this.setState({
      data:dummyData
    })
  }

  searchFilter = (e) =>{
    console.log(e.target.value)
    const filtered = this.state.data.filter( post => 

      post.username.toLowerCase().includes(e.target.value.toLowerCase()))

      console.log(filtered)
      
      this.setState({filteredPosts: filtered});
  }

  handleSearch = (event) =>{
    this.setState({ 
            [event.target.name]:event.target.value 
    });
};



  render(){
  
  
    return (
      <div className="App">
        <SearchBar 
        searchFilter={this.searchFilter} 
        searching={this.state.search}
        />

        <PostContainer data={this.state.data} filteredPosts={this.state.filteredPosts}
        searchFilter={this.searchFilter}/>
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
