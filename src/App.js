import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./components/Feedbackdata";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id)=>{
    setFeedback(feedback.filter((item)=> item.id !== id))
  }
  return (
    <>
      <Header text="hello" />
      <div className="container">
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleClose={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
