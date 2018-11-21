import React, { Component } from 'react';
import './App.css';
import CommentDetail from './CommentDetail';

import faker from 'faker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentDetail author="Sam" timeAgo="Today 6:00PM" comment="Great pic!" avatar={faker.image.avatar()}/>
        <CommentDetail author="Alex" timeAgo="Today 5:00AM" comment="Nice blog post" avatar={faker.image.avatar()}/>
        <CommentDetail author="Bill" timeAgo="Yesterday 3:00PM" comment="Hello" avatar={faker.image.avatar()}/>
      </div>
    );
  }
}

export default App;
