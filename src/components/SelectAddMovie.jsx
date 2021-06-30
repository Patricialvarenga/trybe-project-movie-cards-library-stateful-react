import React from 'react';
import PropTypes from 'prop-types';

class SelectAddMovie extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="input-genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectAddMovie.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectAddMovie;
