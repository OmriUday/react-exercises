import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from '../Templates/3.27 - (componens) comments Boxes App/3.27-component';
import ApprovalCard from '../Templates/3.27 - (componens) comments Boxes App/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:00PM"
          comments="Nice blog !"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 6:00PM"
          comments=" Very Nice blog !"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 8:00PM"
          comments="Beautiful blog !"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard >

      <ApprovalCard>
        <CommentDetail
          author="Omri"
          timeAgo="Today at 10:00PM"
          comments="Great blog !"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard >

      <ApprovalCard>
        <CommentDetail
          author="Roey"
          timeAgo="Today at 12:00PM"
          comments="Amazing blog !"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard >

    </ div >
  );
};

ReactDOM.render(
  <App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}