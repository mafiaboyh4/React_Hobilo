import React, { useState } from 'react' 
import { ProgressBar } from 'primereact/progressbar'
import Crown from "../../../assets/imgs/queen-crown.png";
import {quiz} from './quiz.json'
import { Button } from 'primereact/button';

export const EductionQuiz = () => {
    const [quizList, setQuizList] = useState<QuizInterFace[]>(structuredClone(quiz))
    const [progress, setProgress] = useState(5);
    const [answerKey, setAnswerKey] = useState(0);
 
    const onSelectAnswer = (answer:any , key:number) => {
     let list = [...quizList];
     const index = list.findIndex((item)=> item.key == key);
     list[index].answer = answer;
     setQuizList(list);
    }
 
    const displayValueTemplate = (value:number) => {
         return (
             <React.Fragment>
                <></>
             </React.Fragment>
         );
     }
 
     const getQuiz = () => {
         const quiz = quizList[answerKey]
         return quiz
     }
 
     const getPointKey = (index:number) => {
         switch (index) {
             case 0:
                 return 'A'
             case 1:
                 return 'B'
             case 2:
                 
                 return 'C'
             case 3:
                 return 'D'
         }
     }
     const getAnsweredLen = () => quizList.filter((item) => !!item.answer).length;
 
     const NextQuiz = () => {
         setAnswerKey(answerKey+1);
         setProgress(50)
     }
 
     const Reset = () => {
 
         setProgress(100);
         setQuizList(structuredClone(quiz));
         setAnswerKey(0);
         setTimeout(() => {
             setProgress(5);
         }, 1000);
     }

    return (
        <>
          <div className="quiz-answer"  >
                <div className="head">
                <div className="progress-controller">
                    <div className="progress-bar-controller center">
                        <ProgressBar value={progress} displayValueTemplate={displayValueTemplate} />
                    </div>
                    <div className="counter">
                        <img src={Crown}/>
                        <span>{getAnsweredLen()}/{quizList.length}</span>
                    </div>
                </div>
                <span className="quiz">{getQuiz().title}</span>
                </div>
            <div className="answer-controller">
                {getQuiz().answers.map((answer , index)=> (
                    <div key={index} onClick={()=> {
                        onSelectAnswer(answer , getQuiz().key)
                    }} className={`answer cp ${getQuiz().answer == answer && 'active'}`}  >
                        <div className="point">{getPointKey(index)}</div> <span>{answer}</span>
                    </div>
                ))}
            </div>

            <div className="btn-next-controller">
                <Button onClick={() => {
                    getAnsweredLen() == quizList.length ? Reset(): NextQuiz()
                }} label={getAnsweredLen() == quizList.length ? 'Rest' : 'Next Quiz'} />
            </div>
        </div>
        </>
    )
};

export default React.memo(EductionQuiz);

interface QuizInterFace {
    key: number;
	answer?: any;
	title: string;
	answers: string[];
}