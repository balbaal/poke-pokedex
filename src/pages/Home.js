import React from "react";

// Component
import { ColumnFirst, Filter } from "parts";
import { Brand, StatusPage, Table } from "elements";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <ColumnFirst>
              <Brand style={{ width: 150 }} src="/images/pokemon_logo.png" />
              <Filter className="mt-4" />
              <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                {true ? (
                  <Table />
                ) : (
                  <StatusPage
                    src="/images/pokemon_logo.png"
                    title="Oops! No pokemon found!"
                    style={{ width: "200px" }}
                  />
                )}
              </div>
            </ColumnFirst>
          </div>
          <div className="col-12 col-md-6">
            <ColumnFirst>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <StatusPage
                  src="/images/pokemon_logo.png"
                  title="Select Pokemon"
                  style={{ width: "200px" }}
                />
              </div>
            </ColumnFirst>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
