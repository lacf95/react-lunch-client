import React, { Component } from 'react';
import Day from '../presentational/Day';
import styles from '../../../css/calendar.sass';

class Calendar extends Component {
  constructor({ month, year }) {
    super();

    const date = new Date();
    this.state = {
      month: month,
      year: year
    };

    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    document.title = 'Menu calendar';
  }

  handleDrop(event) {
    event.preventDefault();
  }

  monthDays(month, year) {
    const days = [];
    let date = new Date(year, month, 1);
    for(let i = 1; i < date.getDay(); i++) {
      days.push(<div></div>);
    }
    while (date.getMonth() === month) {
      let currentDate = new Date(date);
      if (currentDate.getDay() > 0 && currentDate.getDay() < 6) {
        days.push(<Day dayNumber={ new Date(date).getDate() } dish="Tacos al pastor" handleDrop={ this.handleDrop }/>);
      }
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  render() {
    const days = this.monthDays(this.state.month, this.state.year);
    return (
      <div className={ styles.daysGrid }>
        { days }
      </div>
    );
  }
}

class Menu extends Component {
  constructor() {
    super();
  }

  render() {
    const month = new Date().getMonth();
    const year = new Date().getMonth();
    return (
      <div>
        <h1>Menu calendar</h1>
        <Calendar month={ month } year={ year } />
      </div>
    );
  }
}

export default Menu;
