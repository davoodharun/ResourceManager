import React, {PropTypes} from 'react';

const List = ({name, label, onChange, defaultOption, value, error, options}) => {
  let wrapperClass = 'form-group';
  if(error && error.length >0){
    wrapperClass += ' has-error';
  }

  return(
    <div className={wrapperClass}>
      LIST COMPONENT
    </div>
  );
};


export default List;
