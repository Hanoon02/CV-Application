import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.fillOutForm = this.fillOutForm.bind(this);
    this.state = {
      schoolname: { title: "School Name", selected: "", alias: "schoolname" },
      studytitle: { title: "Study Title", selected: "", alias: "studytitle" },
      startdate: { title: "Start Date", selected: "", alias: "startdate" },
      enddate: { title: "End Date", selected: "", alias: "enddate" },
      completestudy: [],
    };
  }

  handlerOfSubmit = function (event) {
    event.preventDefault();
    this.setState(
      {
        completestudy: this.state.completestudy.concat([
          this.state.schoolname,
          this.state.studytitle,
          this.state.startdate,
          this.state.enddate,
        ]),
      },
      () => {
        this.props.getText(this.state.completestudy);
      }
    );
  };

  handlerOfChange = function (event) {
    const statename = event.target.name;
    this.setState({
      [statename]: {
        title: this.state[statename].title,
        selected: event.target.value,
        alias: this.state[statename].alias,
      },
    });
  };

  // on edit fills out the form with the object sent by the editit function in app.js
  fillOutForm = function () {
    const arrayreceived = this.props.toedit;
    this.setState({
      schoolname: {
        title: this.state.schoolname.title,
        selected: arrayreceived[0].selected,
        alias: this.state.schoolname.alias,
      },
      studytitle: {
        title: this.state.studytitle.title,
        selected: arrayreceived[1].selected,
        alias: this.state.studytitle.alias,
      },
      startdate: {
        title: this.state.startdate.title,
        selected: arrayreceived[2].selected,
        alias: this.state.startdate.alias,
      },
      enddate: {
        title: this.state.enddate.title,
        selected: arrayreceived[3].selected,
        alias: this.state.enddate.alias,
      },
    });
  };

  componentDidMount() {
    // every time education is rendered checks if the toedit was sent with a filled object; if it was runs the filloutoform function
    const emptyObject = Object.keys(this.props.toedit).length;
    if (emptyObject !== 0) {
      this.fillOutForm();
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlerOfSubmit}>
          <label className="requiredinput">{this.state.schoolname.title}</label>
          <input
            type="text"
            name="schoolname"
            value={this.state.schoolname.selected}
            onChange={this.handlerOfChange}
            required
          />

          <label className="requiredinput">{this.state.studytitle.title}</label>
          <input
            type="text"
            name="studytitle"
            value={this.state.studytitle.selected}
            onChange={this.handlerOfChange}
            required
          />

          <label className="requiredinput">{this.state.startdate.title}</label>
          <input
            type="date"
            name="startdate"
            value={this.state.startdate.selected}
            onChange={this.handlerOfChange}
            required
          />
          <label>{this.state.enddate.title}</label>
          <input
            type="date"
            name="enddate"
            value={this.state.enddate.selected}
            onChange={this.handlerOfChange}
          />

          <input type="submit" value="&#xf0c7;" title="Save" />
        </form>
        <div>
          <button
            onClick={this.props.cancelButton}
            className={this.props.showOrHide}
            data-buttonname="canceleducation"
            title="Cancel"
          >
            <i
              className="las la-times"
              onClick={this.props.cancelButton}
              data-buttonname="canceleducation"
            ></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Education;