import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__item">
            <h3 className="footer__title">Online shopping</h3>

            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  Men
                </a>
              </li>
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  Women
                </a>
              </li>
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  Kids
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__item">
            <h3 className="footer__title">Useful links</h3>

            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  FAQ
                </a>
              </li>
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  Blog
                </a>
              </li>
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__item">
            <h3 className="footer__title">Experience myntra app on Mobile</h3>

            <ul className="footer__list-store">
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  <img
                    className="footer__img"
                    src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  <img
                    className="footer__img"
                    src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__item">
            <h3 className="footer__title">Keep in touch</h3>

            <ul className="footer__list-store">
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  <FacebookIcon />
                </a>
              </li>
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  <TwitterIcon />
                </a>
              </li>
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  <YouTubeIcon />
                </a>
              </li>
              <li className="footer__list-item">
                <a href="//" className="footer__link">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p> 2022 &copy; Online Store</p>
      </div>
    </footer>
  );
};

export default Footer;
