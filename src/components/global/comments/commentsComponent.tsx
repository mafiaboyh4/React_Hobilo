import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { toast } from 'react-toastify';
import { Button } from 'primereact/button';
import HFMPoint from '../HFMPoint';

const CommentsComponent = () => {

    const soon = () => {
        toast.info('Its Demo')
    }

    return (
        <>
            <div className="comment-controller-main">
                        <div className="app container pb-4 pt-2">
                            <div className="rounded-3 shadow-sm p-3">
                                <h4 className="mb-4">3 Comments</h4>
                                    <div className="py-3">
                                    <div className="d-flex comment">
                                        <img className="rounded-circle comment-img"
                                            src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S" />
                                        <div className="flex-grow-1 ms-3">
                                            <div className="mb-1"><a  className="fw-bold  me-1">Studio KonKon</a> <span className="text-muted text-nowrap">2 days ago</span></div>
                                            <div className="mb-2">Lorem ipsum dolor sit amet, ut qui commodo sensibus, id utinam inermis constituto vim. In nam dolorum interesset, per fierent ponderum ea. Eos aperiri feugiat democritum ne.</div>
                                            <div className="hstack align-items-center mb-2">
                                                <a className="green me-2" ><i onClick={soon} className="cp pi pi-thumbs-up"></i></a>
                                                <span className="me-3 small">55</span>
                                                <a className="link-secondary me-4" ><i onClick={soon} className="cp pi pi-thumbs-down"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="py-3">
                                    <div className="d-flex comment">
                                        <img className="rounded-circle comment-img"
                                            src="https://via.placeholder.com/128/99ccff/0073e6.png?text=A" />
                                        <div className="flex-grow-1 ms-3">
                                            <div className="mb-1"><a  className="fw-bold  pe-1">Asai Kazuma</a> <span className="text-muted text-nowrap">8 hours ago</span></div>
                                            <div className="mb-2">Ei saepe abhorreant temporibus cum, hinc praesent voluptatum ea has.<br /><br />Vis nihil tacimates senserit ut, quo posse labores honestatis te. Ex duo nullam posidonium deterruisset, altera aeterno duo.</div>
                                            <div className="hstack align-items-center">
                                                <a className="link-secondary me-2" ><i onClick={soon} className="cp pi pi-thumbs-up"></i></a>
                                                <span className="me-3 small">26</span>
                                                <a className="link-secondary me-4" ><i onClick={soon} className="cp pi pi-thumbs-down"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="py-3">
                                    <div className="d-flex comment">
                                        <img className="rounded-circle comment-img"
                                            src="https://via.placeholder.com/128/cc99ff/7f00ff.png?text=K" />
                                        <div className="flex-grow-1 ms-3">
                                            <div className="mb-1"><a  className="fw-bold  py-1 px-2 rounded-pill me-1">Kamisato Mugi</a> <span className="text-muted text-nowrap">10 hours ago</span></div>
                                            <div className="mb-2">Aenean non tellus sed erat ultrices rutrum. Sed ac dolor tempus, efficitur diam vitae, sagittis nisi. Morbi bibendum congue nisl eu congue. Mauris eu eros bibendum, pretium ex ac, aliquam lorem.</div>
                                            <div className="hstack align-items-center mb-2">
                                                <a className="green me-2" ><i  onClick={soon} className="cp pi pi-thumbs-up"></i></a>
                                                <span className="me-3 small">8</span>
                                                <a className="link-secondary me-4" ><i  onClick={soon} className="cp pi pi-thumbs-down"></i></a>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-controller rounded-3 shadow-sm p-3 " data-tut="reactour__goTo">
                                <div className="d-flex">
                                    <img className="rounded-circle me-3"
                                        style={{width:'3rem',height:'3rem'}}
                                        src="https://via.placeholder.com/128/fe669e/ffcbde.png?text=S" />
                                    <div className="flex-grow-1">
                                    <div className=" gap-2 mb-1">
                                        <a  className="fw-bold ">My Username</a>
                                    </div>
                                    <div className="form-floating mb-3">
                                        {/* <InputTextarea className=" w-100"
                                                    placeholder='Type your comment ... '
                                                    id="my-comment" rows={5} cols={30}
                                                    style={{height:'7rem'}}></InputTextarea> */}
                                    </div>
                                    <div className="hstack justify-content-end align-items-end gap-2">
                                        <HFMPoint label='first Comment' point={200} />
                                        <Button  onClick={soon} label='comment' className="p-button-raised comment-btn"></Button>
                                    </div>
                                    </div>
                                </div>
                        </div>
            </div>
        </>
    )
};

export default React.memo(CommentsComponent);