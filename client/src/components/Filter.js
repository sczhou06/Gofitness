import React from "react";
import {Row} from "react-bootstrap"

class Filter extends React.Component {

  render() {
    return(
      <div>
        <Row className="filterP">
          <ul className="trainerFilter">
            <li><a href="#">All</a></li>
            <li><a href="#">Yoga</a></li>
            <li><a href="#">Fitness</a></li>
            <li><a href="#">HIIT</a></li>
            <li><a href="#">Boxing</a></li>
            <li><a href="#">Palates</a></li>
            <li><a href="#">Taichi</a></li>
          </ul>
        </Row>
      </div>
    );
  }
}

export default Filter;
