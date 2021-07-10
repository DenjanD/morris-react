import React from "react";
import Myself from "../images/aing.JPG";
import PHPlogo from "../images/php-logo.png";
import JSlogo from "../images/js-logo.png";
import MYSQLlogo from "../images/mysql-logo.png";
import RAlogo from "../images/ra-logo.png";

class Content extends React.Component {
  render() {
    return (
      <div className="fluid" id="content">
        <div className="row" id="about">
          <div className="col-md-6">
            <img src={Myself} alt="" className="selfPort mx-auto d-block" />
          </div>
          <div className="col-md-6 aboutDesc">
            <h1>About Me</h1>
            <p className="aboutText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              iure, sunt vitae nemo nisi itaque et unde dignissimos? Velit illum
              vel tempore eos! Impedit velit, quasi esse suscipit id labore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              facere totam voluptatum nam maiores quasi alias iusto unde nulla
              amet sapiente, sequi optio impedit. Nobis, nisi earum? Aliquid,
              molestias exercitationem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              facere totam voluptatum nam maiores quasi alias iusto unde nulla
              amet sapiente, sequi optio impedit. Nobis, nisi earum? Aliquid,
              molestias exercitationem!
            </p>
          </div>
        </div>
        <div className="row" id="expertise">
          <div className="col-md-12 text-center exp-title">
            <h1>My Expertise</h1>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card card-dashboard-product d-block">
                  <div class="card-body">
                    <img
                      src={PHPlogo}
                      alt=""
                      class="w-100 mb-2 mx-auto d-block"
                    />
                    <div class="card-title">PHP</div>
                    <div class="card-category">Description</div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card card-dashboard-product d-block">
                  <div class="card-body">
                    <img
                      src={JSlogo}
                      alt=""
                      class="w-100 mb-2 mx-auto d-block"
                    />
                    <div class="card-title">Javascript</div>
                    <div class="card-category">Description</div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card card-dashboard-product d-block">
                  <div class="card-body">
                    <img
                      src={MYSQLlogo}
                      alt=""
                      class="w-100 mb-2 mx-auto d-block"
                    />
                    <div class="card-title">MySQL</div>
                    <div class="card-category">Description</div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card card-dashboard-product d-block">
                  <div class="card-body">
                    <img
                      src={RAlogo}
                      alt=""
                      class="w-100 mb-2 mx-auto d-block"
                    />
                    <div class="card-title">REST API</div>
                    <div class="card-category">Description</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row align-items-center justify-content-center"
          id="contacts"
        >
          <div className="col-md-12 text-center">
            <h1>Contact Me</h1>
          </div>
          <div className="col-md-12 w-25">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" />
              <label htmlFor="name">Email</label>
              <input type="email" id="email" className="form-control" />
              <label htmlFor="name">Message</label>
              <textarea type="text" id="message" className="form-control" />
            </form>
            <button className="btn btn-primary btn-block mt-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
