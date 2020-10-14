import React from "react";
import { axios } from "configs";

// Component
import { ColumnFirst, Filter } from "parts";
import { Brand, StatusPage, Table } from "elements";

class Home extends React.Component {
  state = { pokemonList: [], isLoading: true };

  async componentDidMount() {
    this.setState({
      ...this.state,
      isLoading: true,
      filter: {
        name: "",
        type: null,
        ability: null,
      },
    });

    const resPokemon = await axios.get("/pokemon");

    const resPokemonFinal = await Promise.all(
      resPokemon.results.map(async (item) => {
        return await axios.get(`/pokemon/${item.name}`);
      })
    );

    this.setState({
      ...this.state,
      isLoading: false,
      pokemonList: resPokemonFinal,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <ColumnFirst>
              <Brand style={{ width: 150 }} src="/images/pokemon_logo.png" />
              <Filter className="mt-4" />
              <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                {this.state.pokemonList.length > 0 ? (
                  <Table data={this.state.pokemonList} />
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
