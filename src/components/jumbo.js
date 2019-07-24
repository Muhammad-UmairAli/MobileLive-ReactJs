import React, { Component } from 'react';

export default class jumbo extends Component {
  render() {
    const style = {
      color: '#F48245'
    };

    const style2 = {
      marginTop: '-5%'
    };
    return (
      <div>
        <div className="jumbotron text-center ">
          <h1 className="display-1 font-weight-bold">
            Accelerating Digital <br /> Transformation
          </h1>
          <p className="lead">
            Perfecting digital experiences, enhancing operational productivity,
            and empowering the future
          </p>
        </div>
        <div className="parallax ">
          <div className="container">
            <br />
            <h1 className=" font-weight-bold text-light">
              Success isn’t Complicated,
              <br /> It is simply choosing to be better than yesterday
            </h1>
            <br />
            <p className="text-light">
              mobileLIVE is a Canadian tech-service provider unifying people,
              technology, and business to accelerate digital transformation.
            </p>
            <br />
            <p className="text-light">
              We don’t see this transformation as a choice anymore; rather an
              imperative. One that focuses on perfecting experiences, not just
              products and processes. One that empowers us to do more, by doing
              it more intelligently. And one that believes in the creation of
              tomorrow - today.
            </p>
            <br />
            <p className="text-light">
              Our reputation - reliable; our industry recognition - notable; and
              our record of never having lost a customer - non-negotiable.
            </p>
          </div>
        </div>
        <div style={style2} className="row bg-dark mx-5  p-4">
          <div className="col box text-light  text-center">
            <h1 style={style}>4</h1>
            <p1>offices in 2 countries</p1>
          </div>
          <div className="col box text-light  text-center">
            <h1 style={style}>250+</h1>
            <p1>diverse team members</p1>
          </div>
          <div className="col box text-light  text-center">
            <h1 style={style}>100%</h1>
            <p1>customer retention</p1>
          </div>
          <div className="col box text-light  text-center">
            <h1 style={style}>200%</h1>
            <p1>reliable (and awesome)</p1>
          </div>
          <div className="col box text-light  text-center">
            <h1 style={style}>83%</h1>
            <p1>caffeinated </p1>
          </div>
          <div className="col  text-light  text-center">
            <h1 style={style}>0%</h1>
            <p1>ego </p1>
          </div>
        </div>
      </div>
    );
  }
}
