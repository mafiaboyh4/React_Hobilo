import { PrimeIcons } from 'primereact/api';
import React from 'react';
import './brokersDetailsStyle.scss';
import etorostatic from '../../../assets/imgs/brokers/etorostatic.png';
import award from '../../../assets/imgs/award_badge.webp';
import { RatingTemplate } from '../BrokersScreen';
import { Button } from 'primereact/button';
import YouTube from 'react-youtube';

const BrokerDetailsScreen = () => {

    const opts = {
        height: '490',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

     const  _onReady = (event:any) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    return (
        <>
        <div className="container ml-0">
            <div className="broker-review-main-controller">
                <div className="head">
                    <div className='d-flex flex-row'>
                        <div className="child">
                            <img src={etorostatic} alt="?" />
                        </div>
                        <div className="child">
                            <span className="f-25 fw-b">
                                Interactive Brokers Review 2022
                            </span>
                            <span><i className={PrimeIcons.CALENDAR}></i> jul 2022</span>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="child score">
                            <RatingTemplate percent={96} score={4.9} />
                        </div>
                        <div className="child">
                            <div className="controller">
                                <img src={award} className="mr-2 " />
                                <span>Best discount broker</span>
                            </div>
                        </div>
                        <div className="child flex-row">
                            <div className="btn-controller">
                                <Button label="Sing Up" onClick={()=> {
                                    let x = document.createElement("a");
                                    x.href = `https://www.etoro.com/accounts/sign-up`;
                                    x.target = "_blank"
                                    x.click();
                                }}  />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="review-controller">
                    <h3 className='fw-b mb-3'>eToro review summary</h3>
                    <div className="bc_custom_html">
                        <p className='mx-0'><a rel="nofollow" >eToro</a> is a well-known Israeli fintech company and a <a href="https://brokerchooser.com/how-to-invest/social-trading" target="_blank">social trading</a> broker, established in 2007.</p>
                    <blockquote>
                    <p className='mx-0'>Check out our <a href="https://brokerchooser.com/broker-reviews/etoro-review/etoro-review-for-beginners" target="_blank">eToro review tailored to the needs of beginner investors and traders</a>.</p>
                    </blockquote>

                    <p className='mx-0'>eToro serves UK clients through a unit regulated by the Financial Conduct Authority (FCA) and Australians through an Australian Securities and Investment Commission (ASIC)-regulated entity. All other customers are served by a Cypriot unit that is regulated by the Cyprus Securities and Exchange Commission (CySEC).</p>

                    <p className='mx-0'>eToro is not listed on any stock exchange, does not disclose its annual report on its website and does not have a bank parent.</p>

                    <p className='mx-0'>Being regulated by the top-tier FCA and ASIC is a good sign for eToro's safety.</p>

                    <p className='mx-0'><strong>HEADS UP: Minimum deposit based on residency and account activation </strong>– Be sure to check the minimum deposit that is required to activate your account. After uploading your documents, a deposit is also needed in order to make trades. The amount of the deposit required&nbsp;is based on your residency, and ranges&nbsp;from $10 to $10,000. More details are available in the review’s&nbsp;<a href="https://brokerchooser.com/broker-reviews/etoro-review#review-part-account-opening" target="_blank">Account opening</a> section.</p>

                    <p className='mx-0'><span className="bc-broker-data-field" data-broker-id="14" data-param-id="277"><strong>Disclaimer:</strong> CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. <strong>78% of retail investor accounts lose money when trading CFDs with this provider.</strong> You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. </span></p>
                    </div>
                </div>
            
                <div className="review-controller">
                    <div className="controller">
                        <p>
                            <strong>Recommended for</strong> traders interested in social trading (i.e. copying other
                            investors’ trades) and zero commission stock trading
                        </p>
                        <div className="text-center mt-2  mr-0  w-full ">
                        <Button label='Sing up'  onClick={()=> {
                                let x = document.createElement("a");
                                x.href = `https://www.etoro.com/accounts/sign-up`;
                                x.target = "_blank"
                                x.click();
                            }} />
                            <br/>
                            <span className="bc-cta-cfd-warning "><strong>78% of retail CFD accounts lose
                                    money</strong></span>
                        </div>
                    </div>
                </div>
                
                <div className="review-controller">
                    <h3 className='fw-b mb-3'>eToro pros and cons</h3>
                    <p>eToro offers commission-free stock trading, and the account opening process is fast and seamless. It has innovative features like social trading, which lets you copy the strategies of other traders.</p>
                    <p>On the negative side, eToro's non-trading fees are high as there are fees for withdrawal and inactivity. Withdrawals can be slow and USD is the only currency you can hold your cash in. Lastly, it's difficult to contact customer support.</p>
                    <table className="bc_procon_table">
                        <tbody>
                            <tr>
                                <th className="pro_header">Pros</th>
                                <th className="con_header">Cons</th>
                            </tr>
                            <tr>
                                <td className="pro_cell">
                                    <span className="pro_bullet">•</span> Free stock and ETF trading
                                </td>
                                <td className="con_cell">
                                    <span className="con_bullet">•</span> High non-trading fees
                                </td>
                            </tr>
                            <tr>
                                <td className="pro_cell">
                                    <span className="pro_bullet">•</span> Seamless account opening
                                </td>
                                <td className="con_cell">
                                    <span className="con_bullet">•</span> Only one account base currency
                                </td>
                            </tr>
                            <tr>
                                <td className="pro_cell">
                                    <span className="pro_bullet">•</span> Social trading
                                </td>
                                <td className="con_cell">
                                    <span className="con_bullet">•</span> Customer support should be improved
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <YouTube videoId="_lCGxOpKtQU" opts={opts} onReady={_onReady} />

                </div>
            </div>
        </div>
        </>
    )
};

export default React.memo(BrokerDetailsScreen);