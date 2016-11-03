import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styles from './App.css';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    axios.get(`/cats.json`)
      .then(res => {
        this.setState({ cats: res.data });
      });
  }

  render() {
    return (
      <div className="main">
        <h1>CATS</h1>
        <ul className="cat_pics">
          {this.state.cats.map(cat =>
            <li key={cat.id} className="cat_pic"><img src={cat.nekoImage} /></li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <FetchDemo subreddit="reactjs"/>,
  document.getElementById('app')
);
