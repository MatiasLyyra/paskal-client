import React from 'react';
import './LineCount.scss';

type IProps = {
  lines: number,
};
const LineCount: React.FC<IProps> = props => (
  <ul className="LineCount-lines">
    {Array.from(Array(props.lines).keys()).map(i => (
      <li key={i}>{i + 1}.</li>
    ))}
  </ul>
);
export default LineCount;
