import React from 'react';
//https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792

const {PropTypes} = React;

const icons = {
    'up':'M512 32l-480 480h288v512h384v-512h288z',
    'down':'M512 992l480-480h-288v-512h-384v512h-288z',
  'bin2': 'M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z',
  'facebook': 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
};

const Icon = props => (
  <svg width="22" height="22" viewBox="0 0 1024 1024">
    <path d={icons[props.icon]}></path>
  </svg>
);

//Icon.propTypes = {
//    icon: PropTypes.string.isRequired,
//  };

export default Icon;