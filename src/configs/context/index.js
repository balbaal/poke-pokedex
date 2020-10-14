import React, { createContext } from "react";
import { axios } from "configs";

export const RootContext = createContext();
const Provider = RootContext.Provider;

// Provider
const GlobalProvider = (Children) => {
  return class ParentComponent extends React.Component {
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

export default GlobalProvider;
