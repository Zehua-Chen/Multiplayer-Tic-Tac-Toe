import React from 'react';

/**
 * NOTE! 
 * The "type" prop inherited from HTMLProops<HTMLInputElement> is not applied
 * to the <input> element.
 */
interface IPasswordProps extends React.HTMLProps<HTMLInputElement> {
  showPassword?: boolean;
}

interface IPasswordState {
  isPasswordVisible: boolean;
}

class Password extends React.Component<IPasswordProps, IPasswordState> {
  
  public static defaultProps: IPasswordProps = {
    showPassword: true,
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
    const { showPassword, type, ...others } = this.props;
    
    var inputElement = <input type="text" {...others}/>;
    
    if (showPassword) {
      if (this.state.isPasswordVisible) {
        inputElement = <input type="text" {...others}/>
      } else {
        inputElement = <input type="password" {...others}/>
      }
    }
    
    var toggler = null;
    if (showPassword) {
      toggler = <button className="btn btn-dark">Show</button>
    }
    
    return (
      <div>
        {inputElement}
        {toggler}
      </div>
    );
  }
}

export default Password;