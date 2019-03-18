import React from "react";

export interface IProgressBarProps {
  /**
   * Value out of 100
   */
  value: number;
}

/**
 * Progress bar displays the current progress of the game / how many more blocks are empty.
 */
class ProgressBar extends React.Component<IProgressBarProps> {
  shouldComponentUpdate(nextProps: IProgressBarProps, nextState: any) {
    if (nextProps.value !== this.props.value) {
      return true;
    }
    return false;
  }

  render() {
    const style: React.CSSProperties = {
      width: `${this.props.value}%`
    };

    return (
      <div className="progress">
        <div className="progress-bar bg-dark" style={style} />
      </div>
    );
  }
}

export default ProgressBar;
