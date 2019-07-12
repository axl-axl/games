import React from 'react';
import Style from './index.less';
import { columnLength, rowLength } from '../config/common';
import Square from './Square';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderMain = this.renderMain.bind(this);
  }
  renderMain() {
    const main = [];
    for(let i = 0; i < columnLength + 1; i++) {
      main.push(<Square columnIndex={i} rowIndex={rowLength} key={i}/>)
    }
    return main;
  }
  render(){
    return (
      <div className={Style.footer}>
        {
          this.renderMain()
        }
      </div>
    );
  }
}