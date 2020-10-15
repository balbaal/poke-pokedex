import React from "react";
import { GlobalConsumer } from "configs/context";

// Component
import { ColumnFirst, Filter, Detail } from "parts";
import { Brand, StatusPage, Table } from "elements";

class Home extends React.Component {
  async componentDidMount() {
    this.props.dispatch({ type: "FETCH_POKEMON" });
    this.props.dispatch({ type: "FETCH_TYPE_ABILITY" });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <ColumnFirst>
              <Brand style={{ width: 150 }} src="/images/pokemon_logo.png" />
              <Filter className="mt-4" />
              <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                {this.props.state.isLoading ? (
                  <h1>loading . . .</h1>
                ) : this.props.state.errorMessage ||
                  this.props.state.pokemonList.length === 0 ? (
                  <StatusPage
                    src="/images/pokemon_logo.png"
                    title={
                      this.props.state.errorMessage
                        ? "Oops! No pokemon found!"
                        : this.props.state.errorMessage
                    }
                    style={{ width: "200px" }}
                  />
                ) : (
                  <Table data={this.props.state.pokemonList} />
                )}
              </div>
            </ColumnFirst>
          </div>
          <div className="col-12 col-md-6">
            <ColumnFirst>
              <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
                {this.props.state.isFetchDetail ? (
                  <h1>loading . . .</h1>
                ) : !this.props.state.detail ? (
                  <StatusPage
                    src="/images/pokemon_logo.png"
                    title="Select Pokemon"
                    style={{ width: "200px" }}
                  />
                ) : (
                  <Detail />
                )}
              </div>
            </ColumnFirst>
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalConsumer(Home);
