import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleClose }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleClose = {handleClose}/>
      ))}
    </div>
  );
}

export default FeedbackList;
