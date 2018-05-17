import React, { Component } from 'react';
import './App.css';
import Post from './Post';


class App extends Component {
    state = {
      data: ''
    }

    render() {
      let arrPost = this.state.data
        return (
            <div className="App">
              {
                Object.keys(arrPost)
                  .map(num => {
                    const title = arrPost[num]['data']['title'],
                          permalink = 'https://www.reddit.com' + arrPost[num]['data']['permalink'],
                          thumbnail = arrPost[num]['data']['thumbnail'];

                    return(<Post key={permalink} title={title} permalink={permalink} thumbnail={thumbnail}/>)
                  })
              }
            </div>
        );
    }

    componentWillMount(){
      this.loading()
    }

    componentDidMount(){
      setInterval(() => this.loading(), 10000);
    }

    loading() {
      fetch('https://www.reddit.com/top.json')
        .then(response => {
            response.json()
              .then(Json => {
                this.setState({data: Json['data']['children']})
              })
        })
        .catch(error => alert("Ошибка загрузки!!!"))
    }
}

export default App;
