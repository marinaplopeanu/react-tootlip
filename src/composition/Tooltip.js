import React from 'react';
import './Tooltip.css';

function Tooltip(props) {
  return (
    <span>
      <span className='Tooltip-content' style={{ color: props.color }}>
        {props.children}
      </span>
      <div className='Tooltip-message'>
        {props.message}
      </div>
    </span>
  )
}

class TooltipClass extends React.Component {}

// we're not exporting TooltipClass yet...
export default Tooltip;