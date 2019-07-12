import React from 'react';
// import { columnLength } from './common';
import Style from './index.less';
import { ArrayContext } from './BaseContext'

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      user: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(callback, user, gameOver) {
    const { columnIndex, rowIndex } = this.props;
    const { status } = this.state;
    if (status || gameOver) {
      return;
    }
    this.setState({ user, status: true });
    callback(columnIndex, rowIndex);
  }
  render() {
    const { status, user } = this.state;
    return (
      <ArrayContext.Consumer>
        {
          ({ markLog, current, gameOver = false }) => {
            return (
              <div className={Style.square} onClick={() => this.handleClick(markLog, current, gameOver)}>
                <div className={Style.chessk}
                  style={{
                    display: status ? 'block' : 'none',
                    background: user
                  }}
                ></div>
              </div>
            )
          }
        }
        
      </ArrayContext.Consumer>
    );
  }
}
