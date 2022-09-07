import React, { useState } from 'react';
import { Tag } from 'primereact/tag';
import { LiveTv , PersonRounded , FavoriteRounded , CommentRounded } from '@material-ui/icons';
import './roomStyle.scss'
import Profile from '../../../assets/imgs/profile.png'
import { PrimeIcons } from 'primereact/api';
import { Button } from 'primereact/button';
import EducationChatComponent from './EducationChatComponent';
import {quiz} from './quiz.json'
import { ProgressBar } from 'primereact/progressbar'
import Crown from "../../../assets/imgs/queen-crown.png";

interface QuizInterFace {
    key: number;
	answer?: any;
	title: string;
	answers: string[];
}
const EductionRoomScreen = () => {

   const [isLike, setIsLike] = useState<boolean | null>(null);
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
        setProgress(5);
        setQuizList(structuredClone(quiz));
        setAnswerKey(0);
    }

    return (
        <>
            <div className="room-controller">
                <div className="row">
                    <div className="col-12">
                        <div className="streaming-controller">
                            <div className="screen-controller">
                                <div className="head">
                                    <div className="side">
                                        <div className="child ">
                                            <div className="icon-controller">
                                                <LiveTv />
                                                <span className="f-14 fw-b  pt-1">Live</span>
                                            </div>
                                        </div>
                                        <div className="child">
                                            <div className="controller end mb-2">
                                                <span className='f-19'>How Make NFt And Deploy part 1</span>
                                                <span className='ml-2'>+ 200 point</span>
                                            </div>
                                            <div className="controller">
                                                <Tag className="mr-2" value="#Crypto" ></Tag>
                                                <Tag className="mr-2" value="#NFT" ></Tag>
                                                <Tag value="#Market place" ></Tag>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side v-center">
                                        <div className="controller v-center">
                                            <PersonRounded className='green' />
                                            <span className='ml-1'>2 k</span>
                                        </div>
                                        <div className="controller v-center">
                                            <FavoriteRounded className='red' />
                                            <span className='ml-1'>180</span>
                                        </div>
                                        <div className="controller v-center">
                                            <CommentRounded className='gray' />
                                            <span className='ml-1'>32</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="video-controller">
                                    <video autoPlay={true} loop={false} className="video-container clipped" src="https://getstream.io/downloads/react_example-gaming_livestream.mp4" />
                                </div>
                                <div className="footer-controller">
                                    <div className="side">
                                        <div className="child">
                                            <img className='profile' src={Profile} />
                                        </div>
                                        <div className="child ml-2">
                                            <span className='f-18 '>Durban Area</span>
                                            <div>
                                                <Tag className="mr-2" value="english" ></Tag>
                                                <Tag className="mr-2" value="Master" ></Tag>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="side">
                                        <div className="child time end">
                                            <span className='f-16 fw-b'>2:54:8 <i className={`${PrimeIcons.CLOCK} f-14`}></i></span>
                                            <span className='f-16 gray'>-0:00:13 <i className={`${PrimeIcons.BELL} f-14`}></i></span>
                                        </div>
                                        <div className="child mx-2">
                                            <Button className='join' label='Join' />
                                        </div>
                                        <div className="child ml-2">
                                            <Button className='join' label='Follow' />
                                        </div>
                                        <div className="child ml-2">
                                            <div className="rate-controller">
                                                <Button className='p-button-text  h-100' >
                                                    <i className={`${PrimeIcons.THUMBS_UP} green mr-2 f-20`}></i>
                                                </Button> 
                                                <Button className='p-button-text h-100'>
                                                    <i className={`${PrimeIcons.THUMBS_DOWN} red mr-2 f-20`}></i>
                                                </Button> 

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-1"></div>
                            <div className="chat-controller">
                                <EducationChatComponent />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
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
                    </div>    
                    <div className="col-lg-6">
                        ranking Table    
                    </div>    
                </div> 
            </div> 
        </>
    );
};

export default React.memo(EductionRoomScreen);