import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row bg-dark w-100 mt-5">
        <div className="col-lg-3 px-5 py-5">
          <h4 className="text-light">Quick Line</h4>
        </div>
        <div className="col-lg-3 px-5 py-5">
          <h4 className="text-light">Contact</h4>
        </div>
        <div className="col-lg-3 px-5 py-5">
          <h4 className="text-light">Gallery</h4>
        </div>
        <div className="col-lg-3 px-3 py-5">
          <h4 className="text-light">NewsLetter</h4>
          <p className="text-light mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          </p>
          <div>
          <input type="search" className="p-2 px-3 rounded shadow" placeholder="Your email"/>
          <button className="btn btn-info p-2 px-3 ms-2">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
