import React from "react";

// Component
import { ColumnFirst } from "parts";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <ColumnFirst />
          </div>
          <div className="col-12 col-md-6">column second</div>
        </div>
      </div>
    );
  }
}

export default Home;
