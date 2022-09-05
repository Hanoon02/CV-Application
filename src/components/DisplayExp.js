import React from "react";

const DisplayExp = function (props) {
  const extractID = function (array) {
    const findIndex = array.findIndex((element) => element.id);
    return array[findIndex].id;
  };
  
  return (
    <div>
      {props.textToDisplay.map((element) => {
        const currentid = extractID(element);
        return (
          <div key={currentid} className="subblock">
            {element.map((anotherelement) => {
              let emptypara;
              let colon;
              if (
                anotherelement.selected !== "" &&
                anotherelement.id === undefined
              ) {
                emptypara = anotherelement.selected;
                colon = ": ";
              } else if (
                anotherelement.selected === "" &&
                anotherelement.id === undefined
              ) {
                emptypara = "None";
                colon = ": ";
              } else {
                emptypara = "";
                colon = "";
              }
              return (
                <p key={anotherelement.alias + currentid}>
                  <span className="blocksubtitle">{anotherelement.title}</span>
                  {colon}
                  {emptypara}
                </p>
              );
            })}
            <button
              onClick={props.editingButton}
              id={currentid + "Edit"}
              className="editexperience"
              title="Edit"
              data-buttonname="editexperience"
            >
              <i
                className="las la-edit"
                onClick={props.editingButton}
                data-buttonname="editexperience"
              ></i>
            </button>
            <button
              onClick={props.deleteButton}
              id={currentid + "Delete"}
              className="deleteexperience"
              title="Delete"
              data-buttonname="deletexperience"
            >
              <i
                className="las la-trash-alt"
                onClick={props.editingButton}
                data-buttonname="deleteexperience"
              ></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayExp;