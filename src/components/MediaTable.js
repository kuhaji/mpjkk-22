import React from 'react';
import PropTypes from 'prop-types';
import MediaRows from './MediaRows';

const MediaTable = ({mediaArray}) => {
  console.log(mediaArray);
  return (
    <table>
      <tbody>
        {mediaArray.map((item, index) => {
          return <MediaRows key={index} file={item} />;
        })}
      </tbody>
    </table>
  );
};

MediaTable.propTypes = {
  mediaArray: PropTypes.array.isRequired,
};

export default MediaTable;
