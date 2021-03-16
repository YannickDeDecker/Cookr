import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

//Import pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Article from './Pages/Article';
import Searchpage from './Pages/Searchpage';

//Import components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoadingPage from './Components/LoadingPage';
import ScrollToTop from './Components/ScrollToTop';

export default class App extends Component {
  //Loading page setup
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };

    //ONLY FOR TESTING:
    // setTimeout(() => {
    //     this.setState({loading:false})
    // }, 5000);

    fetch(process.env.REACT_APP_BACKEND).then(() =>
      this.setState({ loading: false })
    );
  }

  render() {
    if (this.state.loading) {
      return <LoadingPage />;
    } else {
      return (
        <div className='App'>
          <Router forceRefresh={true} basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <div>
              <Navbar />
            </div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/article/:name' component={Article} />
            <Route path='/search/:query' component={Searchpage} />
            <div>
              <Footer />
            </div>
          </Router>
        </div>
      );
    }
  }
}
