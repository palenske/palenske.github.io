/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ReactPlayer from 'react-player';
import john from '../imgs/john-wick.gif';

class Gif extends React.Component {
  render() {
    const { pill } = this.props;
    const understandMatrix = 'https://www.youtube.com/watch?v=HAyqFGhEY5o';
    return (
      <div className="d-flex align-items-center justify-content-center">
        { pill === 'red'
          ? (
            <div className="matrix-video">
              <ReactPlayer url={ understandMatrix } playing="true" />
            </div>
          )
          : (
            <div className="matrix-video">
              <img src={ john } height="300px" alt="John Wick" />
            </div>
          )}
      </div>
    );
  }
}

Gif.propTypes = {
  pill: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  pill: state.selectedPill.id,
});

export default connect(mapStateToProps, null)(Gif);
