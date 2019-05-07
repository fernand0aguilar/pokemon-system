import React from "react"
import PropTypes from "prop-types"


class Pokemon extends React.Component {
  render() {
    return (
      <React.Fragment>
        Name: {this.props.name}
        Url: {this.props.url}
      </React.Fragment>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};
export default Pokemon
