import React from 'react';
import './App.scss';
import {dummyData} from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostSection/PostContainer';
import PostPage from './components/PostSection/PostPage';
import PropTypes from 'prop-types';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';



const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);


class App extends React.Component {
  
  state = {
    data:[],
    search:'',
    filteredPosts:[],
    isLoggedIn:false
  }


  componentDidMount(){
    if(localStorage.getItem('isLoggedIn')){
      return this.setState({
        data:dummyData
      })
    }
  }

  searchFilter = (e) =>{
    const filtered = this.state.data.filter( post => 

      post.username.toLowerCase().includes(e.target.value.toLowerCase()))
      
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

        <ComponentFromWithAuthenticate data={this.state.data} filteredPosts={this.state.filteredPosts }/>

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
