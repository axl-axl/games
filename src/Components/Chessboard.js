import React from 'react';
import Style from './index.less';
import { columnLength, rowLength } from '../config/common';
import Square from './Square';
import Footer from './Footer';
import Header from './Header';

export default class Chessboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderMain = this.renderMain.bind(this);
  }
  row(rowIndex) {
    const Columns = [];
    for (let i = 0; i <= columnLength; i++) {
      Columns.push(<Square columnIndex={i} rowIndex={rowIndex} key={i} />);
    }
    const Row = <div className={Style.chessboardRow} key={rowIndex}> {Columns} </div>;
    return Row;
  }
  renderMain() {
    const main = [];
    for (let j = 1; j <= rowLength - 1; j++) {
      main.push(this.row(j));
    }
    return main;
  }
  render() {
    return (
      <div className={Style.Chessboard}>
        <Header />
        {this.renderMain()}
        <Footer />
      </div>
    );
  }
}