import React from 'react';
import { connect } from 'react-redux';

const EditExpensePage = (props) => {
  console.log(props);
  return(
    <div>
      Edititing expense of {props.match.params.id}
    </div>
  );
};

export default connect()(EditExpensePage);