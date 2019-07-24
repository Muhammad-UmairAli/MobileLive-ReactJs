import React, { Component } from 'react';

export default class frame extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col mt-5">
            <h1 className="text-center">how we approach tomorrow, today</h1>
            <div class="embed-responsive embed-responsive-16by9 mt-5">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TUDCuwmmn5w"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
