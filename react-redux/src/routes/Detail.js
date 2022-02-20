import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDo }) {
  const myId = useParams().id;
  const toDoText = toDo.find((toDo) => toDo.id === parseInt(myId));
  console.log(toDoText);

  return (
    <>
      {toDoText?.text} <br />
      Created at: {toDo?.id}
    </>
  );
}

function mapStateToProps(state) {
  return { toDo: state };
}

export default connect(mapStateToProps)(Detail);
