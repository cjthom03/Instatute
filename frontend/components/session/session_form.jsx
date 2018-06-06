import React from 'react';


const _nullUser = {
  full_name: "",
  email: "",
  password: ""
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = _nullUser;
  }

  componentWillUnmount() {
    
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleChange(input, e) {
    this.setState({ [input]: e.target.value});
  }

  render() {
    let nameInput, formHeader, formFooter;

    if (this.props.formType === "Login") {
      nameInput = "";
      formHeader = "Login to Your Instatute Account!";
      formFooter = "Already have an account?";
    } else {
      nameInput = (
        <div className="modal-content-text-input">
          <i class="fas fa-user fa-lg"></i>
          <input
          type="text"
          value={this.state.full_name}
          placeholder="Full Name"
          onChange={(e) => this.handleChange("full_name", e)}
          />
        </div>
    );
      formHeader = "Sign up and Start Learning!";
      formFooter = "Don't have an account?";
    }

    const showErrors = !(this.props.errors.length) ? ("") : (
      <ul>
        {this.props.errors.map((error, id) => <li key={id}>{error}</li>)}
      </ul>
    );

    return(
      <div className="modal-content">
        <div className="modal-header">
          <a onClick={this.props.closeModal}>&times;</a>
          <p>{formHeader}</p>
        </div>
        {showErrors}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>{nameInput}</div>
          <div className="modal-content-text-input">
            <i class="far fa-envelope fa-lg"></i>
            <input
              type="text"
              value={this.state.email}
              placeholder="E-mail"
              onChange={(e) => this.handleChange("email", e)}
            />
          </div>
          <div className="modal-content-text-input">
            <i class="fas fa-lock fa-lg"></i>
            <input
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={(e) => this.handleChange("password", e)}
            />
          </div>
          <input className="btn btn-primary session"
            type="submit"
            value={this.props.formType}
          />
        </form>
          <input className="btn demo-submit"
            type="button"
            value="Demo User"
          />
        <div className="modal-footer">
          <p>{formFooter} {this.props.otherForm}</p>
        </div>
      </div>
    );
  }
}

export default SessionForm;
