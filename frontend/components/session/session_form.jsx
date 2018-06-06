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

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleChange(input, e) {
    this.setState({ [input]: e.target.value});
  }

  render() {
    let nameInput = this.props.formType === "Login" ? ("") : (<input
        type="text"
        value={this.state.full_name}
        placeholder="Full Name"
        onChange={(e) => this.handleChange("full_name", e)}
      />);

    const showErrors = !(this.props.errors.length) ? ("") : (
      <ul>
        {this.props.errors.map((error, id) => <li key={id}>{error}</li>)}
      </ul>
    );

    return(
      <div>
        <h1>{this.props.formType}</h1>
        <div onClick={this.props.closeModal}>X</div>
        {showErrors}
        {nameInput}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.username}
            placeholder="E-mail"
            onChange={(e) => this.handleChange("email", e)}
          />
          <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={(e) => this.handleChange("password", e)}
          />
          <input
              type="submit"
              value={this.props.formType}
          />
        </form>
        {this.props.otherForm}
      </div>
    );
  }
}

export default SessionForm;
