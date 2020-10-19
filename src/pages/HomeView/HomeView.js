import React from 'react';
import { Link } from "react-router-dom";
import AppLayout from '../../layout/AppLayout/AppLayout';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './HomeView.css';
import theme from '../../utils/theme';

function HomeView() {

    return (
        <AppLayout>
            <main className="home-section">
                {/** Introduction Section */}
                <section className="introduction-section">
                    <div className="container">
                        <h2 className="">
                            <span className="text-secondary">Digitex</span><span className="text-primary"> Treasury</span>
                        </h2>
                        <div className="row">
                            <div className="col-md-5 mt-3">
                                <div className="d-flex flex-column justify-content-center align-items-center h-100 left-content">
                                    <p className="mt-4">
                                        The Digitex Treasury allows you to buy DGTX easily and instantly with zero slippage or commissions - without having to go through an exchange. At the same time, it funds our continued operations in development and marketing. For more information about DGTX tokenomics, visit our <Link to="/"><span className="">Knowledge Base</span></Link>
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6 mt-4">
                                            <div className="d-flex align-items-center">
                                                <img src="./images/sale-icon.svg" alt="sale icon" className="d-block mr-3" />
                                                <span className="">Instant transaction</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <div className="d-flex align-items-center">
                                                <img src="./images/sale-icon-2.svg" alt="sale icon" className="d-block mr-3" />
                                                <span className="">Trustless transaction</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <div className="d-flex align-items-center">
                                                <img src="./images/sale-icon-3.svg" alt="sale icon" className="d-block mr-3" />
                                                <span className="">No price slippage</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <div className="d-flex align-items-center">
                                                <img src="./images/sale-icon-4.svg" alt="sale icon" className="d-block mr-3" />
                                                <span className="">No commission</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 offset-md-2 mt-3">
                                <div className="right-content py-3 px-5">
                                    <h3 className="text-center">Token Sale Live!</h3>
                                    <span className="btn btn-block btn-secondary my-4">Buy DGTX Tokens</span>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                                        <div className="">
                                            <h4 className="">983,233.58</h4>
                                            <p className="">DGTX available</p>
                                        </div>
                                        <div className="">
                                            <h4 className="">$0.0318</h4>
                                            <p className="">DGTX price</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center progress my-2">
                                        <div className="" style={{height: "12px", background: `${theme.colors.secondary}`, width: "9.83234%"}}></div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center etherscan">
                                        <div className="">
                                            <p className="mb-0 mr-2">View Digitex Treasury smart contract on etherscan</p>
                                        </div>
                                        <Link to="/">
                                            <div className="etherscan-wrapper px-3">
                                                <img src="./images/etherium.webp" alt="etherscan" className="" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/** Schedule Section */}
                <section className="schedule-section">
                    <div className="container">
                        <h2 className="mb-4">DGTX Release schedule</h2>
                        <div id="carouselSchedule" className="carousel slide" data-interval="false" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselSchedule" data-slide-to="0" className="mx-3 active">2019</li>
                                <li data-target="#carouselSchedule" data-slide-to="1" className="mx-3">2020</li>
                                <li data-target="#carouselSchedule" data-slide-to="2" className="mx-3">2021</li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="d-flex flex-column">
                                        <h2 className="my-5">2019</h2>
                                        <div className="position-relative d-flex justify-content-between align-items-center">
                                            <div className="horizontal-line active"></div>
                                            <div className="">
                                                <div className="circle active"></div>
                                                <h5 className="active">March 1st 2019</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                            <div className="">
                                                <div className="circle active"></div>
                                                <h5 className="active">June 1st 2019</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                            <div className="">
                                                <div className="circle active"></div>
                                                <h5 className="active">September 1st 2019</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                            <div className="">
                                                <div className="circle active"></div>
                                                <h5 className="active">December 1st 2019</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex flex-column">
                                        <h2 className="my-5">2020</h2>
                                        <div className="position-relative d-flex justify-content-between align-items-center">
                                            <div className="horizontal-line active"></div>
                                            <div className="">
                                                <div className="circle active"></div>
                                                <h5 className="active">March 1st 2020</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                            <div className="">
                                                <div className="circle active"></div>
                                                <h5 className="active">June 1st 2020</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                            <div className="">
                                                <div className="circle active"></div>
                                                <h5 className="active">September 1st 2020</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                            <div className="">
                                                <div className="circle"></div>
                                                <h5 className="">December 1st 2020</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex flex-column">
                                        <h2 className="my-5">2021</h2>
                                        <div className="position-relative d-flex justify-content-between align-items-center">
                                            <div className="horizontal-line"></div>
                                            <div className="">
                                                <div className="circle"></div>
                                                <h5 className="">March 1st 2021</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                            <div className="">
                                                <div className="circle"></div>
                                                <h5 className="">June 1st 2021</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                            <div className="">
                                                <div className="circle"></div>
                                                <h5 className="">September 1st 2021</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                            <div className="">
                                                <div className="circle"></div>
                                                <h5 className="">December 1st 2021</h5>
                                                <h6 className="">Released 10m DGTX</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/** Trade Section */}
                <section className="trade-section">
                    <div className="container">
                        <h2 className="text-center">Buy &amp; trade DGTX</h2>
                        <div className="trade-intro">
                            <p className="text-center">
                                As the native currency of the Digitex Futures exchange, traders must own DGTX to buy and sell Bitcoin futures with zero fees. Purchase DGTX now from the Digitex Treasury
                            </p>
                        </div>
                        
                        <div className="trade-carousel">
                            <div id="carouselTrade" className="carousel slide" data-interval="false" data-ride="carousel">
                                <div className="carousel-inner row w-100 mx-auto" role="listbox">
                                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                                        <div className="d-flex flex-column carousel-content">
                                            <div className="position-relative d-flex justify-content-center align-items-center img-wrapper p-4">
                                                <div className="overlay"></div>
                                                <Link to="/" className="">
                                                    <img src="./images/kucoin.webp" alt="" className="d-block w-100" />
                                                </Link>
                                            </div>
                                            <h4 className="my-3 title">
                                                <Link to="/">
                                                    Kucoin
                                                </Link>
                                            </h4>
                                            <Link to="/">
                                                <span className="d-flex align-items-center">Buy now &nbsp; <FontAwesomeIcon icon={faAngleRight} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="d-flex flex-column carousel-content">
                                            <div className="position-relative d-flex justify-content-center align-items-center img-wrapper p-4">
                                                <div className="overlay"></div>
                                                <Link to="/">
                                                    <img src="./images/probit.webp" alt="" className="d-block w-100" />
                                                </Link>
                                            </div>
                                            <h4 className="my-3 title">
                                                <Link to="/">
                                                    Probit
                                                </Link>
                                            </h4>
                                            <Link to="/">
                                                <span className="d-flex align-items-center">Buy now &nbsp; <FontAwesomeIcon icon={faAngleRight} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="d-flex flex-column carousel-content">
                                            <div className="position-relative d-flex justify-content-center align-items-center img-wrapper p-4">
                                                <div className="overlay"></div>
                                                <Link to="/">
                                                    <img src="./images/vcc-exchange.webp" alt="" className="d-block w-100" />
                                                </Link>
                                            </div>
                                            <h4 className="my-3 title">
                                                <Link to="/">
                                                    VCC
                                                </Link>
                                            </h4>
                                            <Link to="/">
                                                <span className="d-flex align-items-center">Buy now &nbsp; <FontAwesomeIcon icon={faAngleRight} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="d-flex flex-column carousel-content">
                                            <div className="position-relative d-flex justify-content-center align-items-center img-wrapper p-4">
                                                <div className="overlay"></div>
                                                <Link to="/">
                                                    <img src="./images/coindcx.webp" alt="" className="d-block w-100" />
                                                </Link>
                                            </div>
                                            <h4 className="my-3 title">
                                                <Link to="/">
                                                    CoinDCX
                                                </Link>
                                            </h4>
                                            <Link to="/">
                                                <span className="d-flex align-items-center">Buy now &nbsp; <FontAwesomeIcon icon={faAngleRight} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="d-flex flex-column carousel-content">
                                            <div className="position-relative d-flex justify-content-center align-items-center img-wrapper p-4">
                                                <div className="overlay"></div>
                                                <Link to="/">
                                                    <img src="./images/coinex.webp" alt="" className="d-block w-100" />
                                                </Link>
                                            </div>
                                            <h4 className="my-3 title">
                                                <Link to="/">
                                                    Coinex
                                                </Link>
                                            </h4>
                                            <Link to="/">
                                                <span className="d-flex align-items-center">Buy now &nbsp; <FontAwesomeIcon icon={faAngleRight} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="d-flex flex-column carousel-content">
                                            <div className="position-relative d-flex justify-content-center align-items-center img-wrapper p-4">
                                                <div className="overlay"></div>
                                                <Link to="/">
                                                    <img src="./images/mercatox.webp" alt="" className="d-block w-100" />
                                                </Link>
                                            </div>
                                            <h4 className="my-3 title">
                                                <Link to="/">
                                                    Mercatox
                                                </Link>
                                            </h4>
                                            <Link to="/">
                                                <span className="d-flex align-items-center">Buy now &nbsp; <FontAwesomeIcon icon={faAngleRight} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="d-flex flex-column carousel-content">
                                            <div className="position-relative d-flex justify-content-center align-items-center img-wrapper p-4">
                                                <div className="overlay"></div>
                                                <Link to="/">
                                                    <img src="./images/changelly.webp" alt="" className="d-block w-100" />
                                                </Link>
                                            </div>
                                            <h4 className="my-3 title">
                                                <Link to="/">
                                                    Changelly
                                                </Link>
                                            </h4>
                                            <Link to="/">
                                                <span className="d-flex align-items-center">Buy now &nbsp; <FontAwesomeIcon icon={faAngleRight} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="d-flex flex-column carousel-content">
                                            <div className="position-relative d-flex justify-content-center align-items-center img-wrapper p-4">
                                                <div className="overlay"></div>
                                                <Link to="/">
                                                    <img src="./images/hitbtc.webp" alt="" className="d-block w-100" />
                                                </Link>
                                            </div>
                                            <h4 className="my-3 title">
                                                <Link to="/">
                                                    HitBTC
                                                </Link>
                                            </h4>
                                            <Link to="/">
                                                <span className="d-flex align-items-center">Buy now &nbsp; <FontAwesomeIcon icon={faAngleRight} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="d-flex flex-column carousel-content">
                                            <div className="position-relative d-flex justify-content-center align-items-center img-wrapper p-4">
                                                <div className="overlay"></div>
                                                <Link to="/">
                                                    <img src="./images/fatbtc.webp" alt="" className="d-block w-100" />
                                                </Link>
                                            </div>
                                            <h4 className="my-3 title">
                                                <Link to="/">
                                                    FatBTC
                                                </Link>
                                            </h4>
                                            <Link to="/">
                                                <span className="d-flex align-items-center">Buy now &nbsp; <FontAwesomeIcon icon={faAngleRight} /></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselTrade" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselTrade" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/** What Section */}
                <section className="what-section">
                    <div className="container">
                        <h2 className="text-center">
                            <span className="text-primary">What is the</span>
                            <span className="text-secondary"> DGTX token</span>
                        </h2>
                        <div className="what-intro">
                            <p className="text-center">
                                Founder and CEO Adam Todd talks about zero-fee trading, and explains why traders have a greater chance of winning on the Digitex Futures exchange
                            </p>
                        </div>
                        <div className="youtube-container">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe title="youtube-video" id="iframe" className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/gvA_v53Nj4M" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/** Distribution Section */}
                <section className="distribution-section">
                    <div className="container">
                        <h2 className="">DGTX Token Distribution</h2>
                        <div className="">
                            <p className="">
                                Total 1 billion DGTX tokens supply.
                            </p>
                        </div>
                        <div className="d-flex distribution-content">
                            <div className="flex-grow-1 d-flex flex-column">
                                <div className="d-flex justify-content-center align-items-center p-3 caption">
                                    <h4 className="mb-0">650m DGTX</h4>
                                </div>
                                <div className="empty-content"></div>
                                <p className="m-0">Sold in the Public ICO January 2018 at $0.008</p>
                                <p className="m-0">View DGTX contract on <Link to="/">etherscan.io</Link></p>
                            </div>
                            <div className="d-flex flex-column content-box">
                                <div className="d-flex justify-content-center align-items-center p-3 caption">
                                    <h4 className="mb-0">50m DGTX</h4>
                                </div>
                                <div className="empty-content"></div>
                                <p className="m-0">
                                    Referral program
                                </p>
                            </div>
                            <div className="d-flex flex-column content-box">
                                <div className="d-flex justify-content-center align-items-center p-3 caption">
                                    <h4 className="mb-0">100m DGTX</h4>
                                </div>
                                <div className="empty-content"></div>
                                <p className="m-0">
                                    Market making
                                </p>
                            </div>
                            <div className="d-flex flex-column content-box">
                                <div className="d-flex justify-content-center align-items-center p-3 caption">
                                    <h4 className="mb-0">100m DGTX</h4>
                                </div>
                                <div className="empty-content"></div>
                                <p className="m-0">
                                    Team vesting
                                </p>
                            </div>
                            <div className="d-flex flex-column content-box">
                                <div className="d-flex justify-content-center align-items-center p-3 caption">
                                    <h4 className="mb-0">100m DGTX</h4>
                                </div>
                                <div className="empty-content"></div>
                                <p className="m-0">
                                    Digitex treasury
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/** Stat Section */}
                <section className="stat-section">
                    <div className="container">
                        <h2 className="mb-5">DGTX Token Stats</h2>
                        <div className="">
                            <table className="table table-striped">
                                <tbody>
                                    <tr>
                                        <th scope="row">DGTX Price:</th>
                                        <td>$0.030461 USD</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ROI Since ICO:</th>
                                        <td className="text-success">304.61 %</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ICO Price:</th>
                                        <td>$0.01 USD</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Market Rank:</th>
                                        <td>#187</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Market Cap:</th>
                                        <td>$28,360,418.38 USD</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-outline-primary mt-2">Show More</button>
                        </div>
                    </div>
                </section>
            </main>
        </AppLayout>
    )
}

export default HomeView;
