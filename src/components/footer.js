import React, { Component } from 'react';

export default class footer extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="text-light m-4">
              <button className=" btn1 btn btn-transparent">Choose</button>{' '}
              Success
            </h4>
            <ul className="d-flex list-inline text-light ml-3">
              <li className="pr-3">
                <p>© 2019 mobileLIVE inc. All Rights Reserved.</p>
              </li>
              <li className="pr-3">
                <p>sitemap</p>
              </li>
              <li className="pr-3">
                <p>accessibility</p>
              </li>
              <li className="pr-3">privacy</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img
              className="float-right mr-5"
              src="https://images.ctfassets.net/6krz4kg7somr/3jqirtRnQA6M8MueEgUaai/a458d8ab3d19c863fe9a3d5b5548630c/f-logo.svg"
              width="150"
              height="150"
            />
          </div>
        </div>
      </div>
    );
  }
}
