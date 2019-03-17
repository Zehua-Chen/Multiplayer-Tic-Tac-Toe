import React from 'react';

interface ISquareProps extends React.HTMLProps<HTMLButtonElement> {
  player?: "this" | "other";
}

declare class Square extends React.Component {
  
}

export default Square;