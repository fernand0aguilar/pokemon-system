import React from 'react';
import PropTypes from 'prop-types';

class PokemonForm extends React.Component {

    componentWillReceiveProps({ pokemon }) {
        this.setState({ pokemon });
    }

    updateEvent(key, value) {
        this.setState(prevState => ({
            pokemon: {
                ...prevState.event,
                [key] : value,
            },
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        const { event } = this.state;
        const errors = validateEvent(event);

        if(!isEmptyObject(errors)) {
            this.setState({ errors });
        } else {
            const { onSubmit } = this.props;
            onSubmit(pokemon);
        }
    }

    handleInputChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.updateEvent(name, value);
  }

  renderErrors() {
      const { errors } = this.state;

      if(isEmptyObject(errors)){
          return null;
      }
      return (
          <div className="errors">
            <h3> the following errors prohibited the pokemon from being saved: </h3>
            <ul>
                {Object.values(errors).map(error => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
          </div>
      );
    }

    render() {
      const { pokemon } = this.state;
      const { path } = this.props;

      if (!pokemon.id && path === 'pokemons/:id/edit') return <EventNotFound />;

      const cancelURL = pokemon.id ? `/events/${pokemon.id}` : '/pokemons';
      const title = pokemon.id ? `${pokemon.name}` : 'New Pokemon';

      return (
        <div>
          <h2>{title}</h2>

          {this.renderErrors()}

          <form className="pokemonForm" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="pokemon_name">
              <input
                name="text"
                id="pokemon_name"
                name="pokemon_name"
                onChange={this.handleInputChange}
                value={pokemon.name}
              />
              </label>
            </div>
            <div>
              <div>
                <label htmlFor="title">
                <strong>Image URL:</strong>
                <textarea
                  cols="30"
                  rows="10"
                  id="img_url"
                  name="img_url"
                  onChange={this.handleInputChange}
                  value={pokemon.img_url}
                />
                </label>
              </div>
              <div>
                <label htmlFor="evolution">
                <strong>Evolution:</strong>
                <input
                  type="text"
                  id="evolution"
                  name="evolution"
                  onChange={this.handleInputChange}
                  value={pokemon.evolution}
                />
                </label>
              </div>
              <div className="form-actions">
                <button type="submit">Save</button>
                <Link to={cancelURL}>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }

  PokemonForm.propTypes = {
    pokemon: PropTypes.shape(),
    onSubmit: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
  };

  PokemonForm.defaultProps = {
    Pokemon: {
      name: '',
      url: '',
      evolution: ''
    }
  };

  export default PokemonForm;
