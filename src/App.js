import React from "react";
import DisplayEdu from "./components/DisplayEdu.js";
import DisplayInfo from "./components/DisplayInfo.js";
import DisplayExp from "./components/DisplayExp.js";
import Education from "./components/Education.js";
import Experience from "./components/Experience.js";
import Info from "./components/Info.js";
import UploadPhoto from "./components/ProfilePhoto.js";
import RenderPhoto from "./components/RenderPhoto.js";
import logo from "./images/logo.png";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studyreceived: [],
      educationcollection: [],
      renderEducation: true,
      educationToEdit: {},
      inforeceived: [],
      infocollection: [],
      renderInformation: true,
      infoToEdit: {},
      expreceived: [],
      experiencecollection: [],
      renderExp: true,
      expToEdit: {},
      urlsubmitted: "",
    };
    this.getit = this.getit.bind(this);
    this.addMore = this.addMore.bind(this);
    this.edit = this.edit.bind(this);
    this.deleteit = this.deleteit.bind(this);
    this.submitcv = this.submitcv.bind(this);
    this.submitphoto = this.submitphoto.bind(this);
    this.cancel = this.cancel.bind(this);
    this.showOrHide = this.showOrHide.bind(this);
  }

  getit = function (arrayreceived) {
    let source;
    let sourcetoedit;
    let sourcereceived;
    let sourcetorender;

    const firstObject = arrayreceived[0];
    if (firstObject.alias === "username") {
      source = "infocollection";
      sourcetoedit = "infoToEdit";
      sourcereceived = "inforeceived";
      sourcetorender = "renderInformation";
    } else if (firstObject.alias === "schoolname") {
      source = "educationcollection";
      sourcetoedit = "educationToEdit";
      sourcereceived = "studyreceived";
      sourcetorender = "renderEducation";
    } else {
      source = "experiencecollection";
      sourcetoedit = "expToEdit";
      sourcereceived = "expreceived";
      sourcetorender = "renderExp";
    }
    const currentarray = Array.from(arrayreceived);
    const currentID = [{ id: uniqid() }];
    const mergeArrayId = currentarray.concat(currentID);
    this.setState(
      {
        [sourcereceived]: this.state[sourcereceived].concat(mergeArrayId),
        [sourcetorender]: false,
      },
      () => {
        this.setState({
          [source]: this.state[source].concat([this.state[sourcereceived]]),
          [sourcetoedit]: {},
        });
      }
    );
  };

  addMore = function (event) {
    let sourcetorender;
    let sourcereceived;
    if (event.target.dataset.buttonname === "educationadd") {
      sourcetorender = "renderEducation";
      sourcereceived = "studyreceived";
    } else {
      sourcetorender = "renderExp";
      sourcereceived = "expreceived";
    }

    this.setState({
      [sourcetorender]: true,
      [sourcereceived]: [],
    });
  };

  edit = function (event) {
    let source;
    let sourcetorender;
    let sourcetoedit;
    let sourcereceived;

    if (event.target.dataset.buttonname === "editinfo") {
      source = "infocollection";
      sourcetorender = "renderInformation";
      sourcetoedit = "infoToEdit";
      sourcereceived = "inforeceived";
    } else if (event.target.dataset.buttonname === "editeducation") {
      source = "educationcollection";
      sourcetorender = "renderEducation";
      sourcetoedit = "educationToEdit";
      sourcereceived = "studyreceived";
    } else {
      source = "experiencecollection";
      sourcetorender = "renderExp";
      sourcetoedit = "expToEdit";
      sourcereceived = "expreceived";
    }

    const buttonID = event.target.id;
    const elementID = buttonID.replace("Edit", "");
    const collection = Array.from(this.state[source]);
    let targetedSectionIndex;

    collection.forEach(function (array, index) {
      array.filter((element) => {
        if (element.id === elementID) {
          targetedSectionIndex = index;
        }
        return element.id === elementID;
      });
    });

    const extractObject = collection[targetedSectionIndex];

    this.setState({
      [sourcetoedit]: extractObject,
      [sourcetorender]: true,
      [sourcereceived]: [],
    });

    collection.splice(targetedSectionIndex, 1);
    this.setState({
      [source]: collection,
    });
  };

  deleteit = function (event) {
    if (event.target.dataset.buttonname === "deletephoto") {
      this.setState({
        urlsubmitted: "",
      });
      return;
    }
    let source;
    if (event.target.dataset.buttonname === "deleteeducation") {
      source = "educationcollection";
    } else {
      source = "experiencecollection";
    }
    const buttonID = event.target.id;
    const elementID = buttonID.replace("Delete", "");
    const collection = Array.from(this.state[source]);
    let targetedSectionIndex;

    collection.forEach(function (array, index) {
      array.filter((element) => {
        if (element.id === elementID) {
          targetedSectionIndex = index;
        }
        return element.id === elementID;
      });
    });

    collection.splice(targetedSectionIndex, 1);
    this.setState({
      [source]: collection,
    });
  };

  submitcv = function (event) {
    alert("Your CV has been submitted!");
  };

  submitphoto = function (url) {
    this.setState({
      urlsubmitted: url,
    });
  };

  cancel = function (event) {
    let sourcetorender;
    let source;
    if (event.target.dataset.buttonname === "canceleducation") {
      sourcetorender = "renderEducation";
      source = "educationcollection";
    } else {
      sourcetorender = "renderExp";
      source = "experiencecollection";
    }
    if (this.state[source].length !== 0) {
      this.setState({
        [sourcetorender]: false,
      });
    }
  };

  showOrHide = function (block) {
    const blockname = block + "collection";
    if (this.state[blockname].length !== 0) {
      return "cancel" + block;
    } else {
      return "hide";
    }
  };

  render() {
    const eduCollected =
      this.state.educationcollection.length !== 0 ? true : false;
    const infoCollected = this.state.infocollection.length !== 0 ? true : false;
    const expCollected =
      this.state.experiencecollection.length !== 0 ? true : false;

    const statusEdu = this.showOrHide("education");
    const statusExp = this.showOrHide("experience");
    return (
      <div>
        <div id="header">
          <div>
            <h1>CV Submission form</h1>
            <p>Required fields are marked with a *.</p>
          </div>
          <div id="logodiv">
            <p className="rotate">Some Company</p>
            <img src={logo} alt="companylogo" />
          </div>
        </div>
        <div className="cvblock">
          <h2>Info</h2>
          <div id="infosubdiv">
            {this.state.renderInformation && (
              <Info getText={this.getit} toedit={this.state.infoToEdit} />
            )}

            {infoCollected && (
              <DisplayInfo
                textToDisplay={this.state.infocollection}
                editingButton={this.edit}
              />
            )}
            {this.state.urlsubmitted === "" ? (
              <UploadPhoto submitphoto={this.submitphoto} />
            ) : (
              <RenderPhoto
                submittedphoto={this.state.urlsubmitted}
                deletephoto={this.deleteit}
              />
            )}
          </div>
        </div>

        <div className="cvblock">
          <h2>Education</h2>
          <div>
            {this.state.renderEducation ? (
              <Education
                getText={this.getit}
                toedit={this.state.educationToEdit}
                cancelButton={this.cancel}
                showOrHide={statusEdu}
              />
            ) : (
              <button
                onClick={this.addMore}
                className="educationadd"
                title="Add More"
                data-buttonname="educationadd"
              >
                <i
                  className="las la-plus"
                  onClick={this.addMore}
                  data-buttonname="educationadd"
                ></i>
              </button>
            )}
          </div>
          {eduCollected && (
            <DisplayEdu
              textToDisplay={this.state.educationcollection}
              editingButton={this.edit}
              deleteButton={this.deleteit}
            />
          )}
        </div>

        <div className="cvblock">
          <h2>Work Experience</h2>
          <div>
            {this.state.renderExp ? (
              <Experience
                getText={this.getit}
                toedit={this.state.expToEdit}
                cancelButton={this.cancel}
                showOrHide={statusExp}
              />
            ) : (
              <button
                onClick={this.addMore}
                data-buttonname="experienceadd"
                className="experienceadd"
                title="Add More"
              >
                <i
                  className="las la-plus"
                  onClick={this.addMore}
                  data-buttonname="experienceadd"
                ></i>
              </button>
            )}
          </div>
          {expCollected && (
            <DisplayExp
              textToDisplay={this.state.experiencecollection}
              editingButton={this.edit}
              deleteButton={this.deleteit}
            />
          )}
        </div>

        {infoCollected && eduCollected ? (
          <div className="cvblock submitcv">
            <button onClick={this.submitcv} id="submitbutton">
              Submit CV
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;