import React, { Component } from "react";
import CardContainer from "../Components/CardContainer";
import Showcase from "../Components/Showcase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    // setTimeout(() => {
    //     this.setState({loading:false})
    // }, 5000);
    fetch(process.env.REACT_APP_BACKEND).then(() => this.setState({loading:false}));
  }

  render() {
    if (this.state.loading) {
      return <span>Loading</span>;
    } else {
      return (
        <div>
          <main>
            <Showcase />
            <CardContainer
              url={`${process.env.REACT_APP_BACKEND}/recipes`}
              counter={false}
            />
          </main>
        </div>
      );
    }
  }
}

export default Home;
