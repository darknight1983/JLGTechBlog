import React, { Component} from 'react';

import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
    }
  }

  async componentDidMount() {
    console.log("This function is firing");
    const response = await fetch('/api/blogs');
    const blogs = await response.json();
    this.setState({blogs});

  }



  render() {
    return (
        <div className="App">
          <Header />
          <h1>Welcome to Jacolbys Blog!</h1>
        </div>
    );
  }
}

export default App;
