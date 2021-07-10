import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="fluid" id="content">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-12 text-center">
                <p class="pt-4 pb-2">
                  2021 Copyright{" "}
                  <a
                    href="https://www.instagram.com/_ammar_zaidan/"
                    target="_blank"
                  >
                    ammarzaidan
                  </a>
                  . All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
