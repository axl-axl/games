import React from 'react';
import { columnLength, rowLength } from '../config/common';

const logArray = [];
for(let i =0; i < rowLength + 1; i++) {
  logArray[i] = new Array(columnLength + 1).fill('')
}
const ArrayContext = React.createContext({
  current: '',
  markLog: () => {}
});

export { ArrayContext, logArray };