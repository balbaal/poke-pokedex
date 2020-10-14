import React, { createContext } from "react";
import { axios } from "configs";

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
export const GlobalProvider = (Children) => {
  return class ParentProvider extends React.Component {
    state = {
      pokemonList: [],
      isLoading: true,
      errorMessage: "",
      filter: {
        name: "",
        type: null,
        ability: null,
      },
    };

    dispatch = async (action) => {
      switch (action.type) {
        case "FETCH_POKEMON":
          this.setState({
            ...this.state,
            isLoading: true,
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
          break;

        case "FILTER_NAME":
          this.setState({
            ...this.state,
            filter: {
              type: null,
              ability: null,
              name: action.payload,
            },
          });

          try {
            const resPokemonByName = await axios.get(
              `/pokemon/${action.payload}`
            );

            let resPokemonByNameFinal = [];
            if (resPokemonByName.count) {
              resPokemonByNameFinal = await Promise.all(
                resPokemonByName.results.map(async (item) => {
                  return await axios.get(`/pokemon/${item.name}`);
                })
              );
            } else {
              resPokemonByNameFinal.push(resPokemonByName);
            }

            this.setState({
              ...this.state,
              isLoading: false,
              pokemonList: resPokemonByNameFinal,
              errorMessage: "",
            });
          } catch (error) {
            this.setState({
              ...this.state,
              errorMessage: error.response.data,
            });
          }
          break;

        default:
          break;
      }
    };

    render() {
      return (
        <Provider value={{ state: this.state, dispatch: this.dispatch }}>
          <Children {...this.props} />
        </Provider>
      );
    }
  };
};

// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
  return class ParentConsumer extends React.Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
