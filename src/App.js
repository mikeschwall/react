import React from 'react';
import axios from 'axios';
import './App.css';
import Searchbar from './Searchbar/Searchbar';
import ImageList from './ImageList/ImageList';
import SearchWiki from './SearchWiki/SearchWiki';

class App extends React.Component {


  state = {
    myimages:[]
  }

  componentDidMount() {
    
  }

  handlesearchterm = async (text) => {
    console.log(text);
    const response = await axios.get("https://api.unsplash.com/search/photos",{
      params:{
        query:text
      },
      headers:{
        Authorization: "Client-ID bfaff13bb98a03a37ab4fd78b9c273a74c19ae7c3ffa47e8fb663471bbc9882e"
      }
    });

    
    this.setState({
      myimages: response.data.results
    })
  }

  render() {
    return (
      <div>
        <Searchbar searchTerm={this.handlesearchterm}/>
        {this.state.myimages.length > 0 && <ImageList myimages={this.state.myimages}/>}
      </div>
    )
  }
}

export default App;
