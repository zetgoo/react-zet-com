import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors, atomic } from '../constant';
import Box from '../Box/Box';
import Sack from '../Sack/Sack';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import ControlLabel from '../ControlLabel/ControlLabel';
import Popover from '../Popover/Popover';
import Link from '../Link/Link';

const styles = {
  base: {},
};

const ZCaptcha = props => {
  const zcss = [];
  if (props.zcss && Array.isArray(props.zcss)) {
    props.zcss.map((item, index) => {
      zcss.push(styles[item]);
      zcss.push(atomic[item]);
    });
  }

  let isRobot = false;

  const resetToken = () => {};

  const checkRobot = () => {
    console.log('zg');
    isRobot = true;
  };

  const checkVision = () => {};

  return (
    <Box zcss={['bg_no']} style={{ maxWidth: 400 }}>
      {!isRobot && <Checkbox checked={isRobot} onClick={checkRobot} />}
      {isRobot && <Icon icon="fa fa-search" />}
      <ControlLabel zcss={['f1r', 'dli']} onClick={() => checkRobot()}>
        I am not Robot
      </ControlLabel>
      <Sack>
        <Button zcss={['isLink']} onClick={resetToken}>
          refresh
        </Button>
        <Link to="http://account.zetgoo.com/privacy">privacy</Link>
        <Link to="http://account.zetgoo.com/term">term</Link>
      </Sack>
    </Box>
  );
};

ZCaptcha.defaultProps = {
  zcss: [],
};

ZCaptcha.propTypes = {
  zcss: PropTypes.array.isRequired,
};

export default Radium(ZCaptcha);
