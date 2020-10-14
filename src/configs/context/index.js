import React, { Children, createContext } from "react";
import { axios } from "configs";

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
export const GlobalProvider = (Children) => {
  return class ParentProvider extends React.Component {
    state = {
      pokemonList: [],
      isLoading: true,
    };

    dispatch = async (action) => {
      if (action.type === "FETCH_POKEMON") {
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
