import React from 'react';

/**
 * NOTE! 
 * The "type" prop inherited from HTMLProops<HTMLInputElement> is not applied
 * to the <input> element.
 */
interface IPasswordProps extends React.HTMLProps<HTMLInputElement> {
  /**
   * When set to true, the password text field is followed by a button that 
   * toggles if the password is displayed in regular letters or just ".";
   * 
   * Defaulted to be true
   */
  allowVisiblePassword?: boolean;
}

interface IPasswordState {
  isPasswordVisible: boolean;
}

class Password extends React.Component<IPasswordProps, IPasswordState> {
  
  public static defaultProps: IPasswordProps = {
    allowVisiblePassword: true,
  }
  
  constructor(props: IPasswordProps) {
    super(props);
    
    this.state = {
      isPasswordVisible: false
    };
  }
  
  togglePassword = () => {
    this.setState({isPasswordVisible: !this.state.isPasswordVisible})
  }
  
  render() {
    
    // "type" is isolated to avoid ambiguity
    const { allowVisiblePassword, type, ...others } = this.props;
    
    var inputElement = <input type="text" {...others}/>;
    
    if (allowVisiblePassword) {
      if (this.state.isPasswordVisible) {
        inputElement = <input type="text" {...others}/>
      } else {
        inputElement = <input type="password" {...others}/>
      }
    }
    
    var toggler = null;
    if (allowVisiblePassword) {
      toggler = (
        <div className="input-group-append">
          <button 
            className="btn btn-secondary"
            onClick={this.togglePassword}>Show</button>
        </div>
      );
    }
    
    return (
      <div className="input-group">
        {inputElement}
        {toggler}
      </div>
    );
  }
}

export default Password;