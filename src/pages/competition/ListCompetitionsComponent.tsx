import React, { useState } from 'react'
import {data} from './competitionsList.json';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';

const ListCompetitionsComponent = () => {

    const [listCompetitions, setListCompetitions] = useState<CompetitionsInterface[]>(structuredClone(data));

    return (
        <>
           <div className="list-competitions-controller">
                {listCompetitions.map((item , index) => 
                    <>
                        <div className="col-lg-6 mb-3 px-2">

                                <div key={index} className={`box mb-2 light item`}>
                                <div className="header-controller">
                                    <div className="child pr-2">
                                        <div className="symbol-controller">
                                            <span>{item.title.charAt(0)}</span>
                                        </div>
                                    </div>
                                    <div className="child">
                                        <span className="h-title">{item.title}</span>
                                        <span className="f-13 gray">{item.description}</span>
                                    </div>
                                    <div className="child">
                                        <Button icon={PrimeIcons.ARROW_RIGHT} className="green p-button-text" />
                                    </div>
                                </div>
                                    <div className="time-controller">
                                        <div className="controller">
                                            <div className="green">
                                                <i className="pi pi-clock"></i><span>start :</span> 
                                            </div>
                                            <span>{item.start}</span>
                                        </div>
                                        <div className="controller">
                                            <div className="red">
                                                <i className="pi pi-clock"></i><span>end :</span>
                                            </div>
                                            <span>{item.end}</span> 
                                        </div>
                                    </div>
                                    <div className="point-controller">
                                        <div className="controller">
                                            <span>Deposit Point :</span>
                                            <span className='green'>+ {item.dp}</span>
                                        </div>
                                        <div className="controller">
                                            <span>Winner Point :</span>
                                            <span className='green'>+ {item.wp}</span>
                                        </div>
                                    </div>
                                    <div className="button-controller">
                                        <div className="controller pr-2">
                                            <Button className='deposit' label='Deposit' />
                                        </div>
                                        <div className="controller pl-2">
                                            <Button className='start' label='Start' />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </>
                )}
           </div>
        </>
    )
};

export default React.memo(ListCompetitionsComponent)

export interface CompetitionsInterface {
	title: string;
	description: string;
	start: string;
	end: string;
	dp: number;
	wp: number;
}