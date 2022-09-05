import React from "react";

const RenderPhoto = function (props) {
  return (
    <div id="profilephoto">
      <img src={props.submittedphoto} alt="broken profile pic" />
      <button
        id="deletephoto"
        title="Delete"
        data-buttonname="deletephoto"
        onClick={props.deletephoto}
      >
        <i
          className="las la-trash-alt"
          data-buttonname="deletephoto"
          onClick={props.deletephoto}
        ></i>
      </button>
    </div>
  );
};

export default RenderPhoto;