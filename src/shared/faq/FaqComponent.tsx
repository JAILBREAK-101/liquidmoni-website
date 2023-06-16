import { useState } from "react";
import { frequentlyAskQuestions } from "../data/faqSectionData";

interface StyleInterface {
    display: any;
}

export const FaqComponent = ():JSX.Element => {
    const [showHideAnswer, setShowHideAnswer] = useState({set: false, value: "none"});

    const {set, value} = showHideAnswer;

    const [changeIcon, setChangeIcon] = useState(false)

    const style: any = showHideAnswer.set ? !showHideAnswer.value : showHideAnswer.value;

    const handleChangeIcon = () => {
        setShowHideAnswer((set) => !set);
    }

    return (
      <section className='Faq__accordion'>
        {frequentlyAskQuestions.map(eachQuestion => {
          return (
            <div className="Faq__accordion-item" key={eachQuestion.id}>
              <p className="Faq__accordion__question">
                <span className="Faq__question-text">{eachQuestion.question}</span>
  
                {/* Logic and state management */}
                <button className="">{changeIcon ? handleChangeIcon : null}</button>
              </p>
              <span style={{display: style}} className="Faq__answer">{eachQuestion.answer}</span>
            </div>
          )
        })}
      </section>
    )
  };