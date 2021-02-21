import React, { Component, setState } from "react";
import { Link } from "react-router-dom";
import "./CardContainer.css";

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND}/recipes`)
      .then((data) => data.json())
      .then((json) => this.setState({ recipes: json }));
  }

  render() {
    return (
      <div>
        <section class="gallery-block cards-gallery">
          <div className="container">
            <div className="row">
              {this.state.recipes.map((item, i) => {
                return (
                  <div className="col-md-6 col-lg-3">
                    <Link key={i} to={`/article/${item.name}`}>
                      <div className="card border-0 transform-on-hover">
                        <a className="lightbox" href={'http://localhost:3001/' + item.imgmain}>
                        <p className="tag">{item.hometag}</p>
                          <img
                            src={'http://localhost:3001/' + item.imgmain}
                            alt={item.name}
                            className="card-img-top"
                          ></img>
                        </a>
                        <div className="card-body">
                          <h6>{item.name}</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
