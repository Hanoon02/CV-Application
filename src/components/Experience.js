import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.handlerOfSubmit = this.handlerOfSubmit.bind(this);
    this.handlerOfChange = this.handlerOfChange.bind(this);
    this.fillOutForm = this.fillOutForm.bind(this);
    this.state = {
      companyname: {
        title: "Company Name",
        selected: "",
        alias: "companyname",
      },
      positiontitle: {
        title: "Position Title",
        selected: "",
        alias: "positiontitle",
      },
      startdate: { title: "Start Date", selected: "", alias: "startdate" },
      enddate: { title: "End Date", selected: "", alias: "enddate" },
      experience: [],
    };
  }
  handlerOfSubmit = function (event) {
    event.preventDefault();
    this.setState(
      {
        experience: this.state.experience.concat([
          this.state.companyname,
          this.state.positiontitle,
          this.state.startdate,
          this.state.enddate,
        ]),
      },
      () => {
        this.props.getText(this.state.experience);
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

  // on edit
  fillOutForm = function () {
    const arrayreceived = this.props.toedit;
    this.setState({
      companyname: {
        title: this.state.companyname.title,
        selected: arrayreceived[0].selected,
        alias: this.state.companyname.alias,
      },
      positiontitle: {
        title: this.state.positiontitle.title,
        selected: arrayreceived[1].selected,
        alias: this.state.positiontitle.alias,
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
    const emptyObject = Object.keys(this.props.toedit).length;
    if (emptyObject !== 0) {
      this.fillOutForm();
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handlerOfSubmit}>
          <label>{this.state.companyname.title}</label>
          <input
            type="text"
            name="companyname"
            value={this.state.companyname.selected}
            onChange={this.handlerOfChange}
          />
          <label>{this.state.positiontitle.title}</label>
          <input
            type="text"
            name="positiontitle"
            value={this.state.positiontitle.selected}
            onChange={this.handlerOfChange}
          />
          <label>{this.state.startdate.title}</label>
          <input
            type="date"
            name="startdate"
            value={this.state.startdate.selected}
            onChange={this.handlerOfChange}
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
            data-buttonname="cancelexperience"
            title="Cancel"
          >
            <i
              className="las la-times"
              onClick={this.props.cancelButton}
              data-buttonname="cancelexperience"
            ></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Experience;