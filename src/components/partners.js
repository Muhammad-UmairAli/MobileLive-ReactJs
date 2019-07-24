import React, { Component } from 'react';

export default class partners extends Component {
  render() {
    return (
      <div className="parallax3">
        <div className="row">
          <div className="col" />
          <div className="col mt-5">
            <h1 className="text-center font-weight-bold">
              and who we partner with
            </h1>
          </div>
          <div className="col" />
        </div>

        <div className="row">
          <div class="col ml-5">
            <img
              src="https://images.ctfassets.net/6krz4kg7somr/6537SGbkw8YEUiuuA2ukyg/99d5a2ecac5233435dfdc6949d66a5d9/amazon_web_services.svg"
              width="260"
              height="260"
            />
          </div>
          <div class="col">
            <img
              src="https://images.ctfassets.net/6krz4kg7somr/1tkBI2eiMASC6kg2EKiSIC/8d5401e5b527b893d5d751d125fe9a01/Asset_144.svg"
              width="260"
              height="260"
            />
          </div>
          <div class="col">
            <img
              src="https://images.ctfassets.net/6krz4kg7somr/1KQVFfFZsoUCq6wqqSAcEi/854ca6f57acb26475cac91dd87b46274/mongoDB.svg"
              width="260"
              height="260"
            />
          </div>
          <div class="col">
            <img
              src="https://images.ctfassets.net/6krz4kg7somr/1OgPsYnOZK8E2euAI4eU2c/fecdd9de14ca431ffe61f7839cb80ba5/lightbend.svg"
              width="260"
              height="260"
            />
          </div>
        </div>
      </div>
    );
  }
}
