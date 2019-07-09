import React from 'react';
// import { columnLength } from './common';
import Style from './index.less';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    // const { index = 0 } = this.props;
    console.log(Style);
    return (
      <div className={Style.square}>

      </div>
    );
  }
}
