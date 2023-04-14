import React from 'react'
import './articles.css'
import img3 from '../Images/grilled-tomatoes-1-846x846 1.png'
import img4 from '../Images/meal-prep-ideas-846x846 2.png'
import img5 from '../Images/meal-prep-ideas-846x846 1 3.png'
import img6 from '../Images/grilled-tomatoes-1-846x846 1 4.png'
import img7 from '../Images/meal-prep-ideas-846x846 1 5.png'
import img8 from '../Images/meal-prep-ideas-846x846 1 6.png'

const Articles = () => {
    return (
        <div>
            <div>
                <section className="pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 latb">
                                <h1 className="mb-3 f1 mb-5">Latest Articles</h1>
                            </div>
                            <div className="col-12">
                                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid p-4" alt="100%x280" src={img3} />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Grilled Tomatoes at Home</h4>
                                                            <p className="card-text">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                                                            <button className="bnt3" style={{ borderRadius: "30px" }}>Read More</button>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid p-4" alt="100%x280" src={img4} />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Snacks for Travel</h4>
                                                            <p className="card-text">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                                                            <button className="bnt3" style={{ borderRadius: "30px" }}>Read More</button>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid p-4" alt="100%x280" src={img5} />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Post-workout Recipes</h4>
                                                            <p className="card-text">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                                                            <button className="bnt3" style={{ borderRadius: "30px" }}>Read More</button>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">

                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid p-4" alt="100%x280" src={img6} />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                                                            <button className="bnt3" style={{ borderRadius: "30px" }}>Read More</button>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid p-4" alt="100%x280" src={img7} />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                                                            <button className="bnt3" style={{ borderRadius: "30px" }}>Read More</button>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <img className="img-fluid p-4" alt="100%x280" src={img8} />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Special title treatment</h4>
                                                            <p className="card-text">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                                                            <button className="bnt3" style={{ borderRadius: "30px" }}>Read More</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 text-right ">
                        <a className="btn btn-#444957 mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                            <i className="fa-solid fa-angle-left"></i>
                        </a>1/2
                        <a className="btn btn-#444957 mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                            <i className="fa-solid fa-angle-right"></i>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Articles
