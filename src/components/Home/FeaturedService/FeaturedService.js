import React from 'react';
import featuredImg from '../../../images/featuredImg.png';
const FeaturedService = () => {
    return (
        <section>
            <div className="container mb-5">
                <div className="row mb-5 d-flex align-items-center">
                    <div className="col-md-5 mb-4 m-md-0 me-3">
                        <img src={featuredImg} alt="" className="img-fluid" style={{height: '500px'}} />
                    </div>

                    <div className="col-md-7 align-self-center">
                    <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button className="btn btn-primary btn-gradiant">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;