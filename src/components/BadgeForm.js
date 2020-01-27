import React from 'react';

class BadgeForm extends React.Component {
  //   state = {
  //       jobtitle: 'Designer'
  //   };

  //   handleChange = e => {
  //     // console.log({
  //     //   name: e.target.name,
  //     //   value: e.target.value
  //     // });
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     });
  //   };

  //   handleClick = e => {
  //     console.log('Button was clicked');
  //   };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
              type="text"
              name="firstName"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
              type="text"
              name="lastName"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input onChange={this.props.onChange} value={this.props.formValues.email} type="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
              type="text"
              name="jobTitle"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
              type="text"
              name="twitter"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Save</button>
          {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
