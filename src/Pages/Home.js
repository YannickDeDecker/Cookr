import React, { Component } from 'react';
import CardContainer from '../Components/CardContainer';
import Showcase from '../Components/Showcase';

class Home extends Component {
  render() {
    return (
      <div>
        <main>
          <Showcase />
          <CardContainer
            url={`${process.env.REACT_APP_BACKEND}/recipes`} //link to back-end
            counter={false} //only visible on search results page
          />
        </main>
      </div>
    );
  }
}

export default Home;
