import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';

const styles = {
  base: {
  },
};

const Video = (props) => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <video controls style="width:640px;height:360px;" poster="https://www.html5rocks.com/en/tutorials/video/basics/poster.png">
      <source src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm"
              type='video/webm;codecs="vp8, vorbis"' />
      <source src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
              type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
      <track src="https://www.html5rocks.com/en/tutorials/video/basics/devstories-en.vtt" label="English subtitles"
             kind="subtitles" srclang="en" default></track>
    </video>
  );
};

Video.propTypes = {
  zcss: PropTypes.array,
};

export default Radium(Video);
