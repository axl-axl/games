import React from 'react';
import Chessboard from './Components/Chessboard';
import { columnLength, rowLength } from './config/common';
import { ArrayContext, logArray } from './Components/BaseContext';
import Style from './Components/index.less';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'white',
      markLog: this.markLog.bind(this)
    };
    this.checkResult = this.checkResult.bind(this)
  }
  markLog(columnIndex, rowIndex) {
    const { current } = this.state;
    this.setState({ current: current === 'white' ? 'black' : 'white' })
    logArray[rowIndex][columnIndex] = this.state.current === 'white' ? 1 : 2;
    this.checkResult(rowIndex, columnIndex);
  }
  checkResult(rowIndex, columnIndex) {
    const { current } = this.state;
    const value = current === 'white' ? 1 : 2;
    const rowValue = [value];
    const columnValue = [value];
    const slopeLeft = [value];
    const slopeRight = [value];
    for (let i = 1; i < 5; i++) {
      const columnIndexPrev = columnIndex - i < 0 ? null : columnIndex - i;
      const columnIndexNext = columnIndex + i > columnLength ? null : columnIndex + i;
      const rowIndexPrev = rowIndex - i < 0 ? null : rowIndex - i;
      const rowIndexNext = rowIndex + i > rowLength + 1 ? null : rowIndex + i;
      rowValue.push(logArray[rowIndex] ? logArray[rowIndex][columnIndexNext] : undefined); // 横向取值
      rowValue.unshift(logArray[rowIndex] ? logArray[rowIndex][columnIndexPrev] : undefined); // 横向取值
      columnValue.push(logArray[rowIndexNext] ? logArray[rowIndexNext][columnIndex] : undefined); // 纵向取值
      columnValue.unshift(logArray[rowIndexPrev] ? logArray[rowIndexPrev][columnIndex] : undefined); // 纵向取值
      slopeLeft.push(logArray[rowIndexNext] ? logArray[rowIndexNext][columnIndexNext] : undefined); // 左斜取值
      slopeLeft.unshift(logArray[rowIndexPrev] ? logArray[rowIndexPrev][columnIndexPrev] : undefined); // 左斜取值 
      slopeRight.push(logArray[rowIndexPrev] ? logArray[rowIndexPrev][columnIndexNext] : undefined); // 右斜取值
      slopeRight.push(logArray[rowIndexNext] ? logArray[rowIndexNext][columnIndexPrev] : undefined);
    }
    if (
      rowValue.join(',').indexOf((new Array(5).fill(value)).join(',')) > -1 ||
      columnValue.join(',').indexOf((new Array(5).fill(value)).join(',')) > -1 ||
      slopeLeft.join(',').indexOf((new Array(5).fill(value)).join(',')) > -1 ||
      slopeRight.join(',').indexOf((new Array(5).fill(value)).join(',')) > -1
    ) {
      this.setState({ gameOver: true, current })
      return;
    }
  }
  render() {
    const { current, gameOver = false } = this.state;
    return (
      <ArrayContext.Provider value={this.state} >
        <div className={Style.app}>
          <h3 className={Style.title}>{ gameOver ? `游戏结束，${current} 获胜` : '胜负未分' }</h3>
          <Chessboard />
        </div>
      </ArrayContext.Provider>
    );
  }
}
export default App;
