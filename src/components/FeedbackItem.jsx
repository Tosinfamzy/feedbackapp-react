import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa"

function FeedbackItem({item, handleClose}) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=> handleClose(item.id)} className="close">
        <FaTimes color= 'purple'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
