import React from 'react';
import Style from './index.less';
import { columnLength } from '../config/common';
import Square from './Square';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderMain = this.renderMain.bind(this);
  }
  renderMain() {
    const main = [];
    for(let i = 0; i < columnLength + 1; i++) {
      main.push(<Square key={i} columnIndex={i} rowIndex={0}/>)
    }
    return main;
  }
  render(){
    return (
      <div className={Style.header}>
        {
          this.renderMain()
        }
      </div>
    );
  }
}