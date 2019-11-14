import React from "react";
import Filter from "./Filter"
import AvailableTrainers from "./AvailableTrainers"

class TrainerFilter extends React.Component {

  render() {
    return(
      <div>
        <Filter/>
        <AvailableTrainers/>
      </div>
    );
  }
}

export default TrainerFilter;
