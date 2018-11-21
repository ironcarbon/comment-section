import React, { Component } from 'react';
import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

import faker from 'faker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApprovalCard>
          <div>
            <h4>Warning!</h4>
            Are you sure you want to do this?
          </div>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Sam" timeAgo="Today 6:00PM" comment="Great pic!" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Alex" timeAgo="Today 5:00AM" comment="Nice blog post" avatar={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail author="Bill" timeAgo="Yesterday 3:00PM" comment="Hello" avatar={faker.image.avatar()}/>
        </ApprovalCard>
          
        
       
      </div>
    );
  }
}

export default App;
