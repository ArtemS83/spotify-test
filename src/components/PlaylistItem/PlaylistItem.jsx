import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const PlaylistItem = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li>
        <p>{id}</p>
      </li>
    </>
  );
};

PlaylistItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PlaylistItem;
