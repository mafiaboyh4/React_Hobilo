import React, { useState } from 'react';
import './comparisonStyle.scss';
import { Dropdown } from 'primereact/dropdown';
import { data } from "./brokersList.json";
import etorostatic from '../../../assets/imgs/brokers/etorostatic.png';
import tradestation from '../../../assets/imgs/brokers/tradestation-review.png';
import award from '../../../assets/imgs/award_badge.webp';
import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { RatingTemplate } from './../BrokersScreen';
                                <img src={award} className="mr-2 " />


const ComparisonScreen = () => {
    const [firstList, setFirstList] = useState<BrokerDetails[]>(structuredClone(data));
    const [secondList, setSecondList] = useState<BrokerDetails[]>(structuredClone(data));

    const [selectedFirst, setSelectedFirst] = useState<BrokerDetails>(firstList[0]);
    const [selectedSecond, setSelectedSecond] = useState<BrokerDetails>(secondList[1])
    const [activeIndex, setActiveIndex] = useState([0,1,2]);

    const BasicDataTemplate = ({data}:{data:BrokerDetails }) => {

        return (
            <>
                <div className="h-100 d-flex flex-column between">

                    <div className="pt-3"></div>
                    <div className="d-flex flex-column w-100 center">
                        <span className='pr-5 mb-1'>Overall Score</span>
                        <div className="d-flex flex-row align-items-center">
                            <RatingTemplate percent={(data.score * 20)} score={data.score} />
                        </div>
                    </div>
                    <p className='gray px-3 mt-4 '>{data.basicData}</p>
                    <div className="text-center w-100">
                        {data.bastBroker && 
                            <div className="controller">
                                <img src={award}  width="30px" />
                                <span className='f-20 fw-b ml-2'>Best broker for cryptos</span>
                            </div>
                        }

                        <br />
                        <br />
                        <span className="f-15">
                            Country of origin
                        </span>
                        <br />
                        <br />
                        <span className='pt-4'>{data.origin}</span>
                    </div>
                </div>
            </>
        )
    }

    const ReviewTemplate1 = ({data}:{data:BrokerDetails }) => {

        return (
            <>
                <div className="pt-3"></div>
                <span className="fw-b f-16">
                    {data.name}
                </span>
                <p className='mt-3 gray'>{data.description}</p>

                <br />

                <span>Recommended for </span>
                <span className="fw-b f-16">
                    {data.description2}
                </span>
            </>
        )
    }

    const DetailsTemplate1 = ({data}:{data:BrokerDetails }) => {

        return (
            <>
                <div className="pt-3"></div>
                <img src={data.name == 'eToro' ? etorostatic : tradestation} alt="" />
                <span className='mt-3 f-16 fw-b'>{data.name}</span>
                <Button label='Sing up' className='sing-up mt-2' />
            </>
        )
    }

    const FeeTemplate = ({data , title}:{data:BrokerDetails , title:string}) => {
        return (
            <>
                <div className="d-flex flex-column w-100 center">
                    <span className='pr-5 mb-1'> {title}</span>
                    <div className="d-flex flex-row align-items-center">
                        <RatingTemplate percent={(data.feeScore * 20)} score={data.feeScore} />
                    </div>
                </div>
            </>
        )
    }
        
    return (
     <>
        <div className="container ">
            <div className="main-comparison-controller">
                <div className="head">
                    <h2>eToro vs TradeStation compared</h2>
                    <span className="subtitle">
                        Online brokers compared for fees, trading platforms, safety and more. See how eToro stacks up against Revolut!
                    </span>
                </div>
                <div className="box">
                        <div className="row">
                            <div className="col-6">
                                <div className="child">
                                    <Dropdown value={selectedFirst} options={secondList} onChange={(e) => setSelectedFirst(e.value)} optionLabel="name"  />
                                    <DetailsTemplate1 data={selectedFirst} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="child">
                                    <Dropdown value={selectedSecond} options={firstList} onChange={(e) => setSelectedSecond(e.value)} optionLabel="name"  />
                                    <DetailsTemplate1 data={selectedSecond} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="child mt-4">
                                    <span className='f-16 gray text-left w-100'>Last update of data — Jul 2022</span>
                                    <div className="h-line"></div>
                                </div>
                            </div>
                            <div className="col-6">
                                <ReviewTemplate1 data={selectedFirst} />
                            </div>
                            <div className="col-6">
                                <ReviewTemplate1 data={selectedSecond} />
                            </div>
                            <div className="col-12">
                            <br />

                                <p >
                                    eToro's service is slightly better than Revolut's and a comparison of their fees shows that eToro's fees are slightly lower than Revolut's.

                                    Account opening takes about the same effort at eToro compared to Revolut, deposit and withdrawal processes are about the same quality at eToro, while customer service quality is similar to Revolut's.

                                    Our experts rated the trading platform of eToro as somewhat better than the platform of Revolut, found that clients have access to more markets and products with eToro, while Revolut provides somewhat lower-quality research and education.
                                </p>

                                <br />
                                
                                <span><span className="green">*</span> Data marked with an asterisk contain additional info, expand the relevant sections below to see details. </span>

                            </div>
                            <div className="col-12">
                            <Accordion activeIndex={activeIndex} multiple >
                                <AccordionTab header="Basic Data of Broker">
                                    <div className="row">
                                        <div className="col-6">
                                            <BasicDataTemplate data={selectedFirst} />
                                        </div>
                                        <div className="col-6">
                                            <BasicDataTemplate data={selectedSecond} />
                                        </div>
                                    </div>
                                </AccordionTab>
                                <AccordionTab header="Fees">
                                    <div className="row">
                                        <div className="col-6">
                                            <FeeTemplate  title='Fees score' data={selectedFirst} />
                                        </div>
                                        <div className="col-6">
                                            <FeeTemplate title='Fees score' data={selectedSecond} />
                                        </div>
                                    </div>
                                </AccordionTab>
                                <AccordionTab header="Deposit and withdrawal">
                                    <div className="row">
                                        <div className="col-6">
                                            <FeeTemplate title='Deposit and withdrawal score' data={selectedFirst} />
                                        </div>
                                        <div className="col-6">
                                            <FeeTemplate title='Deposit and withdrawal score' data={selectedSecond} />
                                        </div>
                                    </div>
                                </AccordionTab>
                            </Accordion>
                            </div>
                        </div>
                </div>
            </div>
        </div>
     </>
    )
};

export default React.memo(ComparisonScreen);


interface BrokerDetails {
	origin: string;
	feeScore: number;
	uSStock: string;
	ukStock: string;
	germanStock: string;
	depositAndWithdrawal: number;
	description2: string;
	basicData: string;
	description: string;
    bastBroker: boolean;
	link: string;
	name: string;
	score: number;
}