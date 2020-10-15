import React, { createContext } from "react";
import { axios } from "configs";

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
export const GlobalProvider = (Children) => {
  return class ParentProvider extends React.Component {
    state = {
      pokemonList: [],
      isLoading: false,
      errorMessage: "",
      optionsType: [],
      optionsAbility: [],
      detail: null,
      isFetchDetail: false,
      offset: 0,
      filter: {
        name: "",
        type: null,
        ability: null,
      },
    };

    dispatch = async (action) => {
      switch (action.type) {
        case "FETCH_DETAIL":
          this.setState({
            ...this.state,
            detail: action.payload,
          });

          break;
        case "FETCH_TYPE_ABILITY":
          let resTypes = await axios.get("/type");
          resTypes = resTypes.results.map((item) => ({
            value: item.name,
            label: item.name,
          }));

          let resAbilities = await axios.get("/ability");
          resAbilities = resAbilities.results.map((item) => ({
            value: item.name,
            label: item.name,
          }));

          this.setState({
            ...this.state,
            optionsType: resTypes,
            optionsAbility: resAbilities,
          });

          break;
        case "FETCH_POKEMON":
          this.setState({
            ...this.state,
            isLoading: true,
          });

          const resPokemon = await axios.get(
            `/pokemon?offset=${action.payload + this.state.offset}`
          );
          const resPokemonFinal = await Promise.all(
            resPokemon.results.map(async (item) => {
              return await axios.get(`/pokemon/${item.name}`);
            })
          );

          this.setState({
            ...this.state,
            isLoading: false,
            errorMessage: "",
            offset: this.state.offset,
            pokemonList: [...this.state.pokemonList, ...resPokemonFinal],
          });
          break;

        case "FILTER_TYPE":
          this.setState({
            ...this.state,
            isLoading: true,
            filter: {
              name: "",
              ability: null,
              type: action.payload,
            },
          });

          try {
            let resPokemonByType = await axios.get(
              `/type/${action.payload.value}`
            );
            resPokemonByType = await Promise.all(
              resPokemonByType.pokemon.map(async (item) => {
                let resPokemon = await axios.get(
                  `/pokemon/${item.pokemon.name}`
                );
                return resPokemon;
              })
            );

            this.setState({
              ...this.state,
              isLoading: false,
              errorMessage: "",
              pokemonList: resPokemonByType,
            });
          } catch (error) {
            this.setState({
              ...this.state,
              errorMessage: error.response.data,
            });
          }
          break;

        case "FILTER_ABILITY":
          this.setState({
            ...this.state,
            isLoading: true,
            filter: {
              name: "",
              type: null,
              ability: action.payload,
            },
          });

          try {
            let resPokemonByAbility = await axios.get(
              `/ability/${action.payload.value}`
            );
            resPokemonByAbility = await Promise.all(
              resPokemonByAbility.pokemon.map(async (item) => {
                let resPokemon = await axios.get(
                  `/pokemon/${item.pokemon.name}`
                );
                return resPokemon;
              })
            );

            this.setState({
              ...this.state,
              isLoading: false,
              errorMessage: "",
              pokemonList: resPokemonByAbility,
            });
          } catch (error) {
            this.setState({
              ...this.state,
              errorMessage: error.response.data,
            });
          }
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
