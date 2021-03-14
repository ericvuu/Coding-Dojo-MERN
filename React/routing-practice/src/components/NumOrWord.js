import React from "react";

const NumOrWord = (props) => {

  const { input, textColor, bgColor } = props;

  let isANum = true;
  if(isNaN(+props.input)){
    isANum = false;
  }

  const styledPage = {
    color: `${textColor}`,
    backgroundColor: `${bgColor}`,
  };

  return (
    isANum ? <div className="display-1" style={ styledPage }>The number is: {input}</div> : <div className="display-1" style={ styledPage }>The word is: {input}</div>
  )

};

export default NumOrWord;
