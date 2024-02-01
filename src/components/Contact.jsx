import React, { useContext } from "react";
import { AppContext } from "../App";
function Contact() {
  const { about } = useContext(AppContext);
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          <div className="row" data-aos="fade-in">
            <div className="col-md-6 col-sm-12">
              <div className="card mb-2" style={{ cursor: "auto", padding: 20 }}>
                <div className="mx-auto d-block list-inline-item">
                  <i className="bx bx-envelope" style={{ fontSize: "3rem !important" }}></i>
                </div>

                <div className="mx-auto d-block" style={{ marginTop: 20 }}>
                  <a href="mailto:sundyshwe@gmail.com">
                    <b>{about.email}</b>
                  </a>
                  <div>Email me</div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="card mb-2" style={{ cursor: "auto", padding: 20 }}>
                <div className="mx-auto d-block list-inline-item">
                  <i className="bx bx-phone-call" style={{ fontSize: "3rem !important" }}></i>
                </div>

                <div className="mx-auto d-block" style={{ marginTop: 20 }}>
                  <a href="#">
                    <b>{about.phone}</b>
                  </a>
                  <div>Call me</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
