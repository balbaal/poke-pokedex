import React, { useMemo, useEffect } from "react";
import { GlobalConsumer } from "configs/context";
import InfiniteScroll from "react-infinite-scroll-component";

// Component
import { ColumnFirst, Filter, Detail } from "parts";
import { Brand, StatusPage, Table } from "elements";

const Home = (props) => {
  useEffect(() => {
    props.dispatch({ type: "FETCH_POKEMON", payload: 10 });
    props.dispatch({ type: "FETCH_TYPE_ABILITY" });
  }, []);

  const StatusPageStyle1 = useMemo(
    () => ({
      width: "200px",
      height: "100vh",
      marginTop: -130,
    }),
    []
  );

  const StatusPageStyle2 = useMemo(() => ({ width: "200px" }), []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6">
          <ColumnFirst>
            <Brand
              style={useMemo(() => ({ width: 150 }), [])}
              src="/images/pokemon_logo.png"
            />
            <Filter className="mt-4" />
            <div className="d-flex flex-column align-items-center justify-content-center mt-3">
              {props.state.isLoading ? (
                <div className="vh-100 d-flex justify-content-center align-items-center">
                  <div
                    style={{ marginTop: "-300px" }}
                    className="spinner-border text-warning"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : props.state.errorMessage ||
                props.state.pokemonList.length === 0 ? (
                <StatusPage
                  src="/images/pokemon_logo.png"
                  style={StatusPageStyle1}
                  title="Oops! No pokemon found!"
                />
              ) : (
                <div className="w-100 overflow-auto">
                  <InfiniteScroll
                    dataLength={props.state.pokemonList.length}
                    next={() =>
                      props.dispatch({
                        type: "FETCH_POKEMON",
                        payload: 10,
                      })
                    }
                    hasMore={!props.state.filter.name}
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
                    <Table data={props.state.pokemonList} />
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
              {props.state.isFetchDetail ? (
                <h1>loading . . .</h1>
              ) : !props.state.detail ? (
                <StatusPage
                  src="/images/pokemon_logo.png"
                  title="Select Pokemon!"
                  style={StatusPageStyle2}
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
};

export default GlobalConsumer(Home);
