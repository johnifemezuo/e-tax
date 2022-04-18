import React from 'react';
import CaveatIcon from '../icons/Svg/CaveatIcon';
import classes  from './Tooltip.module.css'

function Tooltip({ toolTipText }) {
  return (
    <>
      <div className={classes.tooltip}>
        <CaveatIcon />
        <span className={classes.tooltiptext}>{toolTipText}</span>
      </div>
    </>
  );
}

export default Tooltip