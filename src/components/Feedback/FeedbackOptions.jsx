import React from "react";
import css from './FeedbackOption.module.css';

const FeedbackOptions = ({onLeaveFeedbackNeutral, onLeaveFeedbackGood, onLeaveFeedbackBad}) => {
    return (
        <div className={css.boxButton}>
            
               <button 
               type='button'  
               onClick={onLeaveFeedbackGood}
               >Good</button> 

<button 
               type='button'  
               onClick={onLeaveFeedbackNeutral}
               >Neutral</button>

<button 
               type='button'  
               onClick={onLeaveFeedbackBad}
               >Bad</button>
            
        </div>
    );
};
    

export default FeedbackOptions;