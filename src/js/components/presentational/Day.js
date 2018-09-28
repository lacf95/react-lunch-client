import React from 'react';
import styles from '../../../css/day.sass';
import PropTypes from 'prop-types';

const Day = ({ dayNumber, dish, handleDrop }) => (
  <div className={ styles.day } onDrop={ handleDrop }>
    <div className={ styles.dayNumber }>
      <h1>{ dayNumber }</h1>
    </div>
    <div className={ styles.dish }>
      <h4>{ dish }</h4>
    </div>
  </div>
);

Day.propTypes = {
  dayNumber: PropTypes.number.isRequired,
  dish: PropTypes.string,
  handleDrop: PropTypes.func.isRequired
};

export default Day;
