import React from 'react';
import {CardText} from 'material-ui/Card';

const TextOutput = props => {
  return (
    <div>
      <CardText>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <p style={ props.players ? { display: "block" } : { display: "none" } }>
          You see: {props.players}
        </p>
        <p style={ props.broadcast ? { display: "block" } : { display: "none" } }>
          New messages: {props.broadcast}
        </p>
      </CardText>
    </div>
  );
};


export default TextOutput;