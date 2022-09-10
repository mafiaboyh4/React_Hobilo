import React, { useState } from 'react';
import './comparisonStyle.scss';
import { Dropdown } from 'primereact/dropdown';
import { data } from "./brokersList.json";
import etorostatic from '../../../assets/imgs/brokers/etorostatic.png';
import tradestation from '../../../assets/imgs/brokers/tradestation-review.png';
import { Button } from 'primereact/button';

const ComparisonScreen = () => {
    const [firstList, setFirstList] = useState<BrokerDetails[]>(structuredClone(data));
    const [secondList, setSecondList] = useState<BrokerDetails[]>(structuredClone(data));

    const [selectedFirst, setSelectedFirst] = useState<BrokerDetails>(firstList[0]);
    const [selectedSecond, setSelectedSecond] = useState<BrokerDetails>(secondList[1])


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
                                <div className="child">
                                    <span className='f-16 line'>Last update of data — Jul 2022</span>
                                    <div className="h-line"></div>

                                </div>
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
	description: string;
	link: string;
	name: string;
	score: number;
}