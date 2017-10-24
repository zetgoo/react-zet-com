import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { atomic } from '../../components/constant';

import Image from '../../components/Image/Image';

const styles = {
  base: {},
};

const MagicEye = props => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map(item => zcss.concat(styles[item], atomic[item]));
  }

  // let imgLink =
  //   'data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABQBQCdASoqABwAP/3+/3+/urWyMBVYA/A/iWIAAR7p/Y3etgh4KD8QqXEZj6waibITSIAA/cndnUz4/z4LEgByYUql75Cq/12W33KFIKQpc8L0Dt19C7NFXin0tKlxd70dzSF978msbuqLjDgAAA==';

  setTimeout(() => {
    const imgLink =
      'https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg';
  }, 2000);

  return (
    <div>
      <Image
        zcss={[`${props.isFinished ? '' : 'isBlur'}`]}
        width={1000}
        ratio={8}
        src={props.url}
        alt="Zetgoo"
        title="Zetgoo"
      />
      <div style={{ paddingBottom: '66.6%' }} />
    </div>
  );
};

MagicEye.propTypes = {
  isFinished: PropTypes.boolean,
  url: PropTypes.string,
  zcss: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MagicEye.defaultProps = {
  isFinished: false,
  url: '',
};

export default Radium(MagicEye);
