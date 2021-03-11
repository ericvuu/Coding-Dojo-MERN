import React, {useState} from 'react';

const Tabs = props => {
  const [idxSelected, setIdxSelected] = useState(0);

  const onClickHandler = (e, value) => {
    setIdxSelected(value);
  }


  const tabStyle = {
    padding: '12px 15px',
    display: 'inline-block'
  }

  return (
    <div>
      {
        props.tabSections.map( (tab, i) => {
          return(
            <div onClick={ (e) => onClickHandler(e, i) } style={ tabStyle }>
              <span key={i}>{tab.label}</span>
            </div>
          )
        })
      }
      <div>
        {<p>{props.tabSections[idxSelected].content}</p>}
      </div>
    </div>
    );
}

export default Tabs;
