import React from "react";
import { GlobalConsumer } from "configs/context";
import InfiniteScroll from "react-infinite-scroll-component";

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
          <div className="col-12 col-md-6">
            <ColumnFirst>
              <Brand style={{ width: 150 }} src="/images/pokemon_logo.png" />
              <Filter className="mt-4" />
              <div className="d-flex flex-column align-items-center justify-content-center mt-3">
                {this.props.state.isLoading ? (
                  <div className="vh-100 d-flex justify-content-center align-items-center">
                    <div
                      style={{ marginTop: "-300px" }}
                      className="spinner-border text-warning"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : this.props.state.errorMessage ||
                  this.props.state.pokemonList.length === 0 ? (
                  <StatusPage
                    src="/images/pokemon_logo.png"
                    style={{ width: "200px", height: "100vh", marginTop: -130 }}
                    title="Oops! No pokemon found!"
                  />
                ) : (
                  <div className="w-100 overflow-auto">
                    <InfiniteScroll
                      dataLength={this.props.state.pokemonList.length}
                      next={() =>
                        this.props.dispatch({
                          type: "FETCH_POKEMON",
                          payload: 10,
                        })
                      }
                      hasMore={!this.props.state.filter.name}
                      loader={
                        <div className="text-center">
                          <div
                            style={{ marginTop: "-300px" }}
                            className="spinner-border text-warning text-center"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>
                      }
                    >
                      <Table data={this.props.state.pokemonList} />
                    </InfiniteScroll>
                  </div>
                )}
              </div>
            </ColumnFirst>
          </div>
          <div className="col-12 col-md-6">
            <ColumnFirst
              style={{
                position: "sticky",
                height: "100vh",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
                {this.props.state.isFetchDetail ? (
                  <h1>loading . . .</h1>
                ) : !this.props.state.detail ? (
                  <StatusPage
                    src="/images/pokemon_logo.png"
                    title="Select Pokemon!"
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
