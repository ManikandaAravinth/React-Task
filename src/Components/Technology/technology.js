import React from "react";
export function Technology() {
  return (
    <>
      <div className="technology container-fluid py-5">
        <h1>Learn 4.0 Technologies</h1>
        <p className="subtitle">Get trained by alumni of IITs and top companies like Amazon, Microsoft, intel, Nvidia, Qualcomm, etc. Learn directly from professionals invovled in product Development.</p>
        <div class="row row-cols-1 row-cols-md-4 g-5">
          <div className="col"></div>
          <div class="col">
            <div class="card DS">
              <div class="card-body">
                <h5 class="card-title">Data Science</h5>
                <p class="card-text">Data scientists gather and analyze large sets of structured and unstructured data.</p>
                <div className="d-flex justify-content-end">
                  <img src="https://as1.ftcdn.net/v2/jpg/01/79/98/88/1000_F_179988836_PkaxJwWlMtSom0Wj65lzjwXHlsLc3ZOJ.jpg" class="card-img w-25" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card IOT">
              <div class="card-body">
                <h5 class="card-title">IOT Developer</h5>
                <p class="card-text">IoT Developers are professionals who can developer, manage and monitor IoT devices.</p>
                <div className="d-flex justify-content-end">
                  <img src="https://cdn-icons-png.flaticon.com/512/6212/6212609.png" class="card-img-top w-25" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
          <div class="col">
            <div class="card VR">
              <div class="card-body">
                <h5 class="card-title">VR Developer</h5>
                <p class="card-text">A VR developer creates completely new digital environments that people can see.</p>
                <div className="d-flex justify-content-end">
                  <img src="https://www.openarc.net/wp-content/uploads/2021/09/icon-virt-tours.png" class="card-img-top w-25" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card ML">
              <div class="card-body">
                <h5 class="card-title">ML Engineer</h5>
                <p class="card-text">Machine learning engineers feed data into models defined by data scientists.</p>
                <div className="d-flex justify-content-end">
                  <img src="https://cdn-icons-png.flaticon.com/512/2103/2103445.png" class="card-img-top w-25" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}