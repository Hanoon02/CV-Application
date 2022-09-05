import React from "react";

class UploadPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.state = {
      submittedurl: "",
      title: "Profile photo URL: ",
    };
  }
  handlerOfSubmit = function (event) {
    event.preventDefault();
    this.props.submitphoto(this.state.submittedurl);
  };

  handlerOfChange = function (event) {
    this.setState({
      submittedurl: event.target.value,
    });
  };
  render() {
    return (
      <form id="submitphotoform" onSubmit={this.handlerOfSubmit}>
        <label>
          {this.state.title}
          <input
            type="url"
            name="url"
            id="url"
            placeholder="https://example.com"
            pattern="https://.*"
            size="30"
            onChange={this.handlerOfChange}
          />
        </label>
        <input type="submit" value="&#xf1d8;" title="Submit URL" />
      </form>
    );
  }
}

export default UploadPhoto;