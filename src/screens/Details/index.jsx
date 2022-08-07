function DetailsScreen() {
  return (
    <>
      <main className="main">
        <section className="pt-3">
          <div className="container">
            <div className="mb-3">
              <div className="img-banner rounded-5 shadow">
                <div className="banner-head p-2">
                  <div className="d-flex justify-content-between">
                    <a
                      href="/"
                      className="btn-square-32 rounded-circle bg-tranparent"
                    >
                      <img src="assets/images/left-circle-arrow.svg" alt="" />
                    </a>
                    <div className="d-flex gap-2">
                      <a href="/" className="btn-square-32 rounded-circle">
                        <img src="assets/images/share.svg" alt="" />
                      </a>
                      <a href="/" className="btn-square-32 rounded-circle">
                        <img src="assets/images/bookmark.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="banner-content p-3">
                  <h3>JPM Mall</h3>
                  <p>Sector 10, Gurgaon</p>
                  <div className="row align-items-end">
                    <div className="col-8">
                      <p>Carpet Area: 673 m2</p>
                      <p>#2 Best Value for your Business </p>
                    </div>
                    <div className="col-4 text-end">
                      <span className="badge bg-success mb-2">8.2</span>
                      <p>₹ 34,200</p>
                    </div>
                  </div>
                </div>
                <img src="assets/images/webaliser.jpg" alt="" />
              </div>
            </div>
            <div className="mb-3">
              <h3 className="h5">Factors affecting your business </h3>
            </div>
            <div
              className="accordion accordion-custom mb-4"
              id="accordionExample"
            >
              <div className="accordion-item shadow mb-3">
                <div
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#Competition"
                  aria-expanded="false"
                  aria-controls="Competition"
                >
                  <img src="assets/images/png/winner.png" alt="" />
                  <div className="accordion-header">
                    <h5>Competition</h5>
                    <p>4 restaurants/1000 people</p>
                  </div>
                  <span className="badge bg-success mb-2">8.2</span>
                </div>
                <div
                  id="Competition"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingCompetition"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0">
                    <div className="p-3">
                      <div className="progress-box">
                        <div className="progress">
                          <div
                            className="progress-bar bg-till"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            75%
                          </div>
                        </div>
                        <div className="row justify-content-between">
                          <div className="col-4 text-start">Bad</div>
                          <div className="col-4 text-center">Good</div>
                          <div className="col-4 text-end">Pefect</div>
                        </div>
                      </div>
                      <p>
                        Better than{" "}
                        <span className="label label-success">75%</span> of
                        properties in Gurgaon as it has 4 restaurants/1000
                        people. City Average is 3 restaurants/1000 people.
                      </p>
                      <p>
                        There are{" "}
                        <span className="label label-danger">
                          60 Restaurants
                        </span>{" "}
                        in the location that can compete with you for the same
                        customers.
                      </p>
                      <p>
                        This location has{" "}
                        <span className="label label-success">
                          20 big brands
                        </span>{" "}
                        that can compete with your business. Big brands
                        generally attract more footfalls.
                      </p>
                      <div className="lessmore-table">
                        <h6>
                          <strong>Brands(20)</strong>
                        </h6>
                        <div className="brands-table">
                          <div className="row m-0">
                            <div className="col-6 p-2 bg-light">
                              <strong>Brands</strong>
                            </div>
                            <div className="col-6 p-2 bg-light">
                              <strong>Distance</strong>
                            </div>
                          </div>
                          <div className="row m-0">
                            <div className="col-6 p-2">McDonald’s</div>
                            <div className="col-6 p-2">500m</div>
                          </div>
                          <div className="row m-0">
                            <div className="col-6 p-2">KFC</div>
                            <div className="col-6 p-2">200m</div>
                          </div>
                          <div className="row m-0">
                            <div className="col-6 p-2">Nando’s </div>
                            <div className="col-6 p-2">1km</div>
                          </div>
                          <div className="row m-0">
                            <div className="col-6 p-2">Big Chill</div>
                            <div className="col-6 p-2">500m</div>
                          </div>
                          <div className="row m-0">
                            <div className="col-6 p-2">Burger King</div>
                            <div className="col-6 p-2">200m</div>
                          </div>
                          <div className="row m-0">
                            <div className="col-6 p-2">Pizza Hut</div>
                            <div className="col-6 p-2">200m</div>
                          </div>
                          <div className="row m-0">
                            <div className="col-6 p-2">Domino’s </div>
                            <div className="col-6 p-2">1km</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-light-blue overflow-hidden">
                      <div className="mb-3">
                        <h3 className="h5">
                          <strong>
                            Compare with Similar Properties basis:
                          </strong>
                        </h3>
                      </div>
                      <div className="properties-nav">
                        <ul>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-4 active-btn"
                            >
                              Similar Competition
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-4"
                            >
                              Similar Ranks
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-4"
                            >
                              Similar Location
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-4"
                            >
                              Similar Competition
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h4 className="h6 mb-3">
                        <a href="/" className="text-black">
                          <strong>150 properties found</strong>
                        </a>
                      </h4>
                      <div className="table-responsive fixed-head">
                        <table className="table table-bordered properties-table">
                          <thead>
                            <tr>
                              <th>Similar Properties</th>
                              <th>
                                Restaurants/
                                <br />
                                1000 people
                              </th>
                              <th>
                                Big Brand
                                <br />
                                Name
                              </th>
                              <th>
                                Big Brand
                                <br />
                                Count
                              </th>
                              <th>
                                Competition
                                <br />
                                Count
                              </th>
                              <th>
                                Percentile
                                <br />
                                Score
                              </th>
                              <th>
                                % above
                                <br />
                                average{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address ">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-success mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr className="row-fixed">
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-orange mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-danger mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-warning mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-danger mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-success mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item shadow mb-3">
                <div
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#Footfalls"
                  aria-expanded="false"
                  aria-controls="Footfalls"
                >
                  <img
                    src="assets/images/png/ion_footsteps-outline.svg"
                    alt=""
                  />
                  <div className="accordion-header">
                    <h5>Footfalls</h5>
                    <p>100 people/day (150m radius)</p>
                  </div>
                  <span className="badge bg-green mb-2">10.0</span>
                </div>
                <div
                  id="Footfalls"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFootfalls"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0">
                    <div className="p-3">
                      <div className="progress-box">
                        <div className="progress">
                          <div
                            className="progress-bar bg-till"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            75%
                          </div>
                        </div>
                        <div className="row justify-content-between">
                          <div className="col-4 text-start">Bad</div>
                          <div className="col-4 text-center">Good</div>
                          <div className="col-4 text-end">Pefect</div>
                        </div>
                      </div>
                      <p>
                        Better than{" "}
                        <span className="label label-success">75%</span> of
                        properties in Gurgaon as it has a footfall of{" "}
                        <span className="label label-success">
                          100 people/day (150 m radius)
                        </span>{" "}
                        as compared to a city average of 50 people/day (150 m
                        radius)
                      </p>
                      <p>
                        {" "}
                        60% of footfalls{" "}
                        <span className="label label-success">
                          coming to this market is of high
                        </span>{" "}
                        income group
                      </p>
                      <h6>
                        <strong>Income Segments of footfall</strong>
                      </h6>
                      <div className="graph-box">
                        <img src="assets/images/graph.jpg" alt="" />
                      </div>
                    </div>
                    <div className="p-3 bg-light-blue overflow-hidden">
                      <div className="mb-3">
                        <h3 className="h5">
                          <strong>
                            Compare with Similar Properties basis:
                          </strong>
                        </h3>
                      </div>
                      <div className="properties-nav">
                        <ul>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3 active-btn"
                            >
                              Similar Competition
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Ranks
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Location
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Competition
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h4 className="h6 text-primary">
                        <strong>150 properties found</strong>
                      </h4>
                      <div className="table-responsive fixed-head">
                        <table className="table table-bordered properties-table">
                          <thead>
                            <tr>
                              <th>Similar Properties</th>
                              <th>Footfall/Day</th>
                              <th>
                                High Income
                                <br />
                                Potential
                              </th>
                              <th>
                                Medium Income
                                <br />
                                Potential
                              </th>
                              <th>
                                Low Income
                                <br />
                                Potential
                              </th>
                              <th>
                                Percentile
                                <br />
                                Score
                              </th>
                              <th>
                                % above
                                <br />
                                average{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address ">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-success mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-orange mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-danger mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-warning mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-danger mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-success mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item shadow mb-3">
                <div
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#Population"
                  aria-expanded="false"
                  aria-controls="Population"
                >
                  <img
                    src="assets/images/png/fluent_people-audience.svg"
                    alt=""
                  />
                  <div className="accordion-header">
                    <h5>Population</h5>
                    <p>100 people/day (150m radius)</p>
                  </div>
                  <span className="badge bg-orange mb-2">5.5</span>
                </div>
                <div
                  id="Population"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingPopulation"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0">
                    <div className="p-3">
                      <div className="progress-box">
                        <div className="progress">
                          <div
                            className="progress-bar bg-till"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            75%
                          </div>
                        </div>
                        <div className="row justify-content-between">
                          <div className="col-4 text-start">Bad</div>
                          <div className="col-4 text-center">Good</div>
                          <div className="col-4 text-end">Pefect</div>
                        </div>
                      </div>
                      <p>
                        Better than{" "}
                        <span className="label label-success">75%</span> of
                        properties in Gurgaon as it has a population of{" "}
                        <span className="label label-success">
                          1000 people (50 m radius)
                        </span>{" "}
                        as compared to a city average of 750 people (50 m
                        radius)
                      </p>
                      <p>
                        This location has a shop potential of{" "}
                        <span className="label label-danger">
                          2187 people/shop
                        </span>
                        . These are only 43% of properties with a higher
                        restaurant density.
                      </p>
                      <h6>
                        <strong>Demographics</strong>
                      </h6>
                      <ul
                        className="nav nav-pills mb-3"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="age-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#age"
                            type="button"
                            role="tab"
                            aria-controls="age"
                            aria-selected="true"
                          >
                            Age
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="sex-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#sex"
                            type="button"
                            role="tab"
                            aria-controls="sex"
                            aria-selected="false"
                          >
                            Sex
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="age"
                          role="tabpanel"
                          aria-labelledby="age-tab"
                        >
                          <div className="graph-box">
                            <img src="assets/images/graph2.jpg" alt="" />
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="sex"
                          role="tabpanel"
                          aria-labelledby="sex-tab"
                        >
                          <div className="graph-box">
                            <img src="assets/images/graph3.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-light-blue overflow-hidden">
                      <div className="mb-3">
                        <h3 className="h5">
                          <strong>
                            Compare with Similar Properties basis:
                          </strong>
                        </h3>
                      </div>
                      <div className="properties-nav">
                        <ul>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3 active-btn"
                            >
                              Similar Competition
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Ranks
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Location
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Competition
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h4 className="h6 text-primary">
                        <strong>150 properties found</strong>
                      </h4>
                      <div className="table-responsive fixed-head">
                        <table className="table table-bordered properties-table">
                          <thead>
                            <tr>
                              <th>Similar Properties</th>
                              <th>
                                Population <br />
                                within 1 km
                              </th>
                              <th>
                                Gender <br />
                                (Female)
                              </th>
                              <th>
                                Gender <br />
                                (Male)
                              </th>
                              <th>
                                &lt;15 <br />
                                years
                              </th>
                              <th>
                                15-35 <br />
                                years
                              </th>
                              <th>
                                35-50 <br />
                                years
                              </th>
                              <th>&gt;50 years</th>
                              <th>
                                Shop <br />
                                Potential
                              </th>
                              <th>
                                Percentile <br />
                                Score
                              </th>
                              <th>
                                % above <br />
                                average{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-success mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>48%</td>
                              <td>52%</td>
                              <td>23.3%</td>
                              <td>23.3%</td>
                              <td>23.3%</td>
                              <td>23.3%</td>
                              <td>2187 people/shop</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-orange mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>33.3</td>
                              <td>40%</td>
                              <td>60%</td>
                              <td>15.3%</td>
                              <td>15.3%</td>
                              <td>15.3%</td>
                              <td>15.3%</td>
                              <td>2187 people/shop</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-danger mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>56.7</td>
                              <td>52%</td>
                              <td>48%</td>
                              <td>23.3%</td>
                              <td>23.3%</td>
                              <td>23.3%</td>
                              <td>23.3%</td>
                              <td>2187 people/shop</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-warning mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>11.4</td>
                              <td>44%</td>
                              <td>56%</td>
                              <td>34.3%</td>
                              <td>34.3%</td>
                              <td>34.3%</td>
                              <td>34.3%</td>
                              <td>2187 people/shop</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-danger mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>78.6</td>
                              <td>58%</td>
                              <td>42%</td>
                              <td>57.9%</td>
                              <td>57.9%</td>
                              <td>57.9%</td>
                              <td>57.9%</td>
                              <td>2187 people/shop</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-success mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>31.8</td>
                              <td>48%</td>
                              <td>52%</td>
                              <td>34.3%</td>
                              <td>34.3%</td>
                              <td>34.3%</td>
                              <td>34.3%</td>
                              <td>2187 people/shop</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item shadow mb-3">
                <div
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#MarketPresence"
                  aria-expanded="false"
                  aria-controls="MarketPresence"
                >
                  <img
                    src="assets/images/png/ic_outline-business-center.svg"
                    alt=""
                  />
                  <div className="accordion-header">
                    <h5>Market Presence</h5>
                    <p>10 Shops in JPM Mall</p>
                  </div>
                  <span className="badge bg-warning mb-2">6.7</span>
                </div>
                <div
                  id="MarketPresence"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingMarketPresence"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0">
                    <div className="p-3">
                      <ul className="details-list icon-list">
                        <li>
                          <img
                            src="assets/images/healthicons_market-stall-outline.svg"
                            alt=""
                          />
                          Market for Restaurants- Yes
                        </li>
                        <li>
                          <img src="assets/images/shop-outline.svg" alt="" />
                          No. of Shops - 10
                        </li>
                      </ul>
                      <p>
                        This market has a{" "}
                        <span className="label label-success">
                          higher density
                        </span>{" "}
                        of 10 restaurants as compared to a city average of 2
                        restaurants/ market.
                      </p>
                      <div className="mb-3">
                        <h6>
                          <strong>Same Category Shops within Market:</strong>
                        </h6>
                        <table className="table table-bordered text-center">
                          <thead>
                            <tr>
                              <td className="bg-light">
                                <strong>Brands</strong>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>McDonald’s</td>
                            </tr>
                            <tr>
                              <td>KFC</td>
                            </tr>
                            <tr>
                              <td>Nando’s </td>
                            </tr>
                            <tr>
                              <td>Big Chill</td>
                            </tr>
                            <tr>
                              <td>Burger King</td>
                            </tr>
                            <tr>
                              <td>Pizza Hut</td>
                            </tr>
                            <tr>
                              <td>Domino’s</td>
                            </tr>
                          </tbody>
                        </table>
                        <p>
                          This market has{" "}
                          <span className="label label-success">
                            100 footfalls/restaurant{" "}
                          </span>
                          available which is{" "}
                          <span className="label label-success">higher</span>{" "}
                          than city average.
                        </p>
                        <p>
                          The market share is of restaurant is{" "}
                          <span className="label label-success">40%</span> as
                          compared to the city average of{" "}
                          <span className="label label-success">10%</span>.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h6>
                          <strong>
                            Other Complementary Shops in the Market are:{" "}
                          </strong>
                        </h6>
                        <p className="text-primary">
                          <u>ATM(25), Apparel(13), Shoes(10), Restaurants(8)</u>
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-light-blue overflow-hidden">
                      <div className="mb-3">
                        <h3 className="h5">
                          <strong>
                            Compare with Similar Properties basis:
                          </strong>
                        </h3>
                      </div>
                      <div className="properties-nav">
                        <ul>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3 active-btn"
                            >
                              Similar Market Presence
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Ranks
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Location
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Competition
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h4 className="h6 text-primary">
                        <strong>150 properties found</strong>
                      </h4>
                      <div className="table-responsive fixed-head">
                        <table className="table table-bordered properties-table">
                          <thead>
                            <tr>
                              <th>Similar Properties</th>
                              <th>
                                Market for <br />
                                Restaurants
                              </th>
                              <th>
                                Number of <br />
                                Shops
                              </th>
                              <th>
                                Market <br />
                                Share
                              </th>
                              <th>Footfall/Shop</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-success mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>Yes</td>
                              <td>12</td>
                              <td>32.9</td>
                              <td>07</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-orange mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>No</td>
                              <td>13</td>
                              <td>32.9</td>
                              <td>07</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-danger mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>Yes</td>
                              <td>09</td>
                              <td>32.9</td>
                              <td>07</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-warning mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>Yes</td>
                              <td>12</td>
                              <td>32.9</td>
                              <td>07</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-danger mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>Yes</td>
                              <td>34</td>
                              <td>32.9</td>
                              <td>07</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-success mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>No</td>
                              <td>12</td>
                              <td>32.9</td>
                              <td>07</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item shadow mb-3">
                <div
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#Income"
                  aria-expanded="false"
                  aria-controls="Income"
                >
                  <img src="assets/images/png/wallet.svg" alt="" />
                  <div className="accordion-header">
                    <h5>Income</h5>
                    <p>₹40,000/person (1km radius)</p>
                  </div>
                  <span className="badge bg-danger mb-2">3.2</span>
                </div>
                <div
                  id="Income"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingIncome"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body p-0">
                    <div className="p-3">
                      <div className="progress-box">
                        <div className="progress">
                          <div
                            className="progress-bar bg-till"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            75%
                          </div>
                        </div>
                        <div className="row justify-content-between">
                          <div className="col-4 text-start">Bad</div>
                          <div className="col-4 text-center">Good</div>
                          <div className="col-4 text-end">Pefect</div>
                        </div>
                      </div>
                      <p>
                        Better than{" "}
                        <span className="label label-success">75%</span> of
                        properties in Gurgaon as it has a avg.income of
                        ₹40,000/person as compared to a city average of
                        ₹30,000/person
                      </p>
                      <h6>
                        <strong>Income Segments of footfall</strong>
                      </h6>
                      <div className="graph-box">
                        <img src="assets/images/graph.jpg" alt="" />
                      </div>
                    </div>
                    <div className="p-3 bg-light-blue overflow-hidden">
                      <div className="mb-3">
                        <h3 className="h5">
                          <strong>
                            Compare with Similar Properties basis:
                          </strong>
                        </h3>
                      </div>
                      <div className="properties-nav">
                        <ul>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3 active-btn"
                            >
                              Similar Competition
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Ranks
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Location
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="btn btn-light btn-sm shadow rounded-3"
                            >
                              Similar Competition
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h4 className="h6 text-primary">
                        <strong>150 properties found</strong>
                      </h4>
                      <div className="table-responsive fixed-head">
                        <table className="table table-bordered properties-table">
                          <thead>
                            <tr>
                              <th>Similar Properties</th>
                              <th>
                                Income/person/
                                <br />
                                month
                              </th>
                              <th>&lt;50k</th>
                              <th>50k-1L</th>
                              <th>&gt;1L</th>
                              <th>
                                Percentile
                                <br />
                                Score
                              </th>
                              <th>
                                % above
                                <br />
                                average{" "}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address ">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-success mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-orange mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-danger mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-warning mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-danger mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row m-0 pro-address">
                                  <div className="col-7 p-0">
                                    <p>
                                      <strong>Mall 21</strong>
                                    </p>
                                    <p className="small text-light">
                                      Sector 10
                                    </p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <span className="badge bg-success mb-2">
                                      8.2
                                    </span>
                                  </div>
                                  <div className="col-7 p-0">
                                    <p className="small text-light">673 m2</p>
                                  </div>
                                  <div className="col-5 p-0 text-end">
                                    <p className="small text-light">₹ 34,200</p>
                                  </div>
                                </div>
                              </td>
                              <td>67.4</td>
                              <td>Nando’s, Pizzahut, Domino’s, KFC</td>
                              <td>05</td>
                              <td>07</td>
                              <td>67.4%</td>
                              <td>32.9%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-3 bg-white">
          <div className="mb-3">
            <div className="container">
              <h3 className="h5">Compare with Similar Properties</h3>
            </div>
          </div>
          <div className="compare-properties-box">
            {/* <div class="table-responsive">
                    <table class="property-to-items-table">
                        <thead>
                            <tr>
                                <th>
                                    <button type="button" class="btn btn-light border add-btn d-flex align-items-center">
                                        <img src="assets/images/add-icon.svg" alt="" class="plus-icon">
                                        <span>Add more Properties to Compare</span>
                                    </button>
                                </th>
                                <th>
                                    <div class="img-box">
                                        <span class="badge bg-danger mb-2">3.2</span>
                                        <img src="assets/images/img.jpg" alt="">
                                    </div>
                                    <p><strong>Mall 12, Sector 10</strong></p>
                                    <p class="small text-light">Carpet Area: 673 m2</p>
                                    <p class="text-primary"><strong>₹ 27,077</strong></p>
                                </th>
                                <th>
                                    <div class="img-box">
                                        <span class="badge bg-success mb-2">8.2</span>
                                        <img src="assets/images/img.jpg" alt="">
                                    </div>
                                    <p><strong>Mall 12, Sector 10</strong></p>
                                    <p class="small text-light">Carpet Area: 673 m2</p>
                                    <p class="text-primary"><strong>₹ 27,077</strong></p>
                                </th>
                                <th>
                                    <div class="img-box">
                                        <span class="badge bg-warning mb-2">6.2</span>
                                        <img src="assets/images/img.jpg" alt="">
                                    </div>
                                    <p><strong>Mall 12, Sector 10</strong></p>
                                    <p class="small text-light">Carpet Area: 673 m2</p>
                                    <p class="text-primary"><strong>₹ 27,077</strong></p>
                                </th>
                                <th>
                                    <div class="img-box">
                                        <span class="badge bg-orange mb-2">5.5</span>
                                        <img src="assets/images/img.jpg" alt="">
                                    </div>
                                    <p><strong>Mall 12, Sector 10</strong></p>
                                    <p class="small text-light">Carpet Area: 673 m2</p>
                                    <p class="text-primary"><strong>₹ 27,077</strong></p>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div> */}
            <div className="table-responsive compare-table-scroll">
              <table className="property-to-compare-table">
                <thead>
                  <tr>
                    <th>
                      <button
                        type="button"
                        className="btn btn-light border add-btn d-flex align-items-center"
                      >
                        <img
                          src="assets/images/add-icon.svg"
                          alt=""
                          className="plus-icon"
                        />
                        <span>Add more Properties to Compare</span>
                      </button>
                    </th>
                    <th>
                      <div className="img-box">
                        <span className="badge bg-danger mb-2">3.2</span>
                        <img src="assets/images/img.jpg" alt="" />
                      </div>
                      <p>
                        <strong>Mall 12, Sector 10</strong>
                      </p>
                      <p className="small text-light">Carpet Area: 673 m2</p>
                      <p className="text-primary">
                        <strong>₹ 27,077</strong>
                      </p>
                    </th>
                    <th>
                      <div className="img-box">
                        <span className="badge bg-success mb-2">8.2</span>
                        <img src="assets/images/img.jpg" alt="" />
                      </div>
                      <p>
                        <strong>Mall 12, Sector 10</strong>
                      </p>
                      <p className="small text-light">Carpet Area: 673 m2</p>
                      <p className="text-primary">
                        <strong>₹ 27,077</strong>
                      </p>
                    </th>
                    <th>
                      <div className="img-box">
                        <span className="badge bg-warning mb-2">6.2</span>
                        <img src="assets/images/img.jpg" alt="" />
                      </div>
                      <p>
                        <strong>Mall 12, Sector 10</strong>
                      </p>
                      <p className="small text-light">Carpet Area: 673 m2</p>
                      <p className="text-primary">
                        <strong>₹ 27,077</strong>
                      </p>
                    </th>
                    <th>
                      <div className="img-box">
                        <span className="badge bg-orange mb-2">5.5</span>
                        <img src="assets/images/img.jpg" alt="" />
                      </div>
                      <p>
                        <strong>Mall 12, Sector 10</strong>
                      </p>
                      <p className="small text-light">Carpet Area: 673 m2</p>
                      <p className="text-primary">
                        <strong>₹ 27,077</strong>
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="row-fixed">
                    <td colSpan={4}>
                      <h5>Competition</h5>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td>
                      Restaurants/
                      <br /> 1000 people
                    </td>
                    <td>5</td>
                    <td>4</td>
                    <td>4</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>
                      Big Brand
                      <br /> Name
                    </td>
                    <td>Big Chills, Pizzahut</td>
                    <td>Big Chills, Pizzahut</td>
                    <td>Big Chills, Pizzahut</td>
                    <td>Big Chills, Pizzahut</td>
                  </tr>
                  <tr>
                    <td>
                      Big Brand <br />
                      Count
                    </td>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>
                      Competition <br />
                      Count
                    </td>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>
                      Percentile <br />
                      Score
                    </td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                  </tr>
                  <tr>
                    <td>
                      Percentile <br />
                      Score
                    </td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                  </tr>
                  <tr className="row-fixed">
                    <td colSpan={4}>
                      <h5>Footfalls</h5>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td>Footfall/day</td>
                    <td>12</td>
                    <td>23</td>
                    <td>23</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td>
                      High Income <br />
                      Group
                    </td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>
                      Medium Income <br />
                      Group
                    </td>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>
                      Low Income <br />
                      Group
                    </td>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>
                      Percentile <br />
                      Score
                    </td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                  </tr>
                  <tr>
                    <td>
                      % above <br />
                      average
                    </td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                  </tr>
                  <tr className="row-fixed">
                    <td colSpan={4}>
                      <h5>Market Presence</h5>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td>
                      Market for <br />
                      Restaurants
                    </td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>
                      Number of <br />
                      Shops
                    </td>
                    <td>8</td>
                    <td>4</td>
                    <td>8</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>
                      Market <br />
                      Share
                    </td>
                    <td>25.2%</td>
                    <td>76.2%</td>
                    <td>76.2%</td>
                    <td>80.5%</td>
                  </tr>
                  <tr>
                    <td>Footfall/Shop</td>
                    <td>48.9</td>
                    <td>69.4</td>
                    <td>69.4</td>
                    <td>69.4</td>
                  </tr>
                  <tr className="row-fixed">
                    <td colSpan={4}>
                      <h5>Income</h5>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td>
                      Income/person <br />
                      /month
                    </td>
                    <td>$10,000</td>
                    <td>$12,000</td>
                    <td>$14,000</td>
                    <td>$16,000</td>
                  </tr>
                  <tr>
                    <td>&lt;50k</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                  </tr>
                  <tr>
                    <td>50k-1L</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                  </tr>
                  <tr>
                    <td>&gt;1L</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                  </tr>
                  <tr>
                    <td>
                      Percentile <br />
                      Score
                    </td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                  </tr>
                  <tr>
                    <td>
                      % above <br />
                      average
                    </td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                    <td>15.2%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="py-3">
          <div className="container">
            <ul className="details-list icon-list">
              <li>
                <img src="assets/images/location.svg" alt="" />
                Location: Mall
              </li>
              <li>
                <img src="assets/images/build.svg" alt="" />
                Build Up Area: 232.26 sq.m.
              </li>
              <li>
                <img src="assets/images/house-plan.svg" alt="" />
                Avg. Rent Appreciation/Year: 5%
              </li>
              <li>
                <img src="assets/images/clarity_store-line.svg" alt="" />
                Property Age: 5 to 10 years old
              </li>
              <li>
                <img src="assets/images/fluent_my-location.svg" alt="" />
                Floor Number: 2nd floor
              </li>
              <li>
                <img src="assets/images/garage-lock.svg" alt="" />
                Lock-in period: 36 months
              </li>
              <li>
                <img src="assets/images/shop-window.svg" alt="" />
                Address: GF, Flat No- 287, Shaheed Bhagat Singh Apartments,
                Sector 14 Pocket 3, Dwarka, New Delhi 110075, Delhi Dwarka
              </li>
            </ul>
            {/* MAP START */}
            <div className="g-map mb-3">
              <img src="assets/images/map.png" alt="" />
            </div>
            {/* MAP END */}
            <div className="mb-3">
              <h3 className="h5">Description</h3>
              <p className="text-light">
                Commercial showroom available for lease in the prime location of
                sector-60 gurgaon. This commercial showroom on ground floor is
                part of a well-Known commercial complex known as JMP Store.
              </p>
            </div>
            <div className="mb-3">
              <h3 className="h5">Facilities</h3>
              <ul className="details-list icon-list">
                <li>
                  <img src="assets/images/building-bank.svg" alt="" />
                  ATM
                </li>
                <li>
                  <img
                    src="assets/images/wheelchair-accessibility.svg"
                    alt=""
                  />
                  Wheelchair Accessibility
                </li>
                <li>
                  <img src="assets/images/parking.svg" alt="" />
                  Visitor parking
                </li>
                <li>
                  <img src="assets/images/waste-disposal.svg" alt="" />
                  Waste Disposal
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <br />
      <br />
      <br />
      <div className="quick-call px-3 py-2 bg-white shadow row m-0 justify-content-center align-items-center">
        <div className="col-7 d-grid px-2">
          <a
            href="/"
            className="btn btn-primary btn-lg rounded-5 d-flex justify-content-center align-items-center"
          >
            <img src="assets/images/phone.svg" alt="" /> Request a Call
          </a>
        </div>
        <div className="col-5 d-grid px-2">
          <a
            href="/"
            className="btn btn-whatsapp btn-lg rounded-5 d-flex justify-content-center align-items-center"
          >
            <img src="assets/images/logos_whatsapp.svg" alt="" /> Chat{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default DetailsScreen;
