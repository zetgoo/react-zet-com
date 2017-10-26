import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../constant';

const styles = {
  base: {},
};

const Video = props => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(item => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  return (
    <video
      controls
      style="width:640px;height:360px;"
      poster="https://www.html5rocks.com/en/tutorials/video/basics/poster.png"
    >
      <source
        src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm"
        type="video/webm;codecs=&quot;vp8, vorbis&quot;"
      />
      <source
        src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
        type="video/mp4;codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"
      />
      <track
        src="https://www.html5rocks.com/en/tutorials/video/basics/devstories-en.vtt"
        label="English subtitles"
        kind="subtitles"
        srcLang="en"
        default
      />
    </video>
  );
};

Video.defaultProps = {
  zcss: [],
};

Video.propTypes = {
  zcss: PropTypes.array.isRequired,
};

export default Radium(Video);
