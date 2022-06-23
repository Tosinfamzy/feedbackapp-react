import { v4 as uuidv4 } from "uuid";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./components/Feedbackdata";
import Header from "./components/Header";
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id)=>{
    setFeedback(feedback.filter((item)=> item.id !== id))
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <>
      <Header text="Tosin's Famous review" />
      <div className="container">
        <FeedbackForm handleAdd = {addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleClose={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
