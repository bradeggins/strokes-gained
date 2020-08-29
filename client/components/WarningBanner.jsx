import React from 'react';

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
        <div className="alert alert-dismissible alert-warning" onClick={props.onClick}>
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <h4 className="alert-heading">Please check your input!</h4>
            <p className="mb-0">{props.err}<a href="#" className="alert-link"></a></p>
        </div>
    );
  }

  export default WarningBanner

