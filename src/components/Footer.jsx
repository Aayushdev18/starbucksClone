import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faXTwitter, faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="divbody">
      <div className="divmain">
        <div>
          <img
            src="https://www.starbucks.in/assets/icon/logo.png"
            className="img"
            alt="Starbucks Logo"
          />
        </div>

        <div className="footercontainer">
          <div className="footersection">
            <h3 className="hthree">About Us</h3>
            <ul className="ullihe">
              <li className="lihe">Our Heritage</li>
              <li className="lihe">Coffee House</li>
              <li className="lihe">Our Company</li>
            </ul>
          </div>

          <div className="footersection">
            <h3 className="hthree">Responsibility</h3>
            <ul className="ullihe">
              <li className="lihe">Diversity</li>
              <li className="lihe">Community</li>
              <li className="lihe">Ethical Sourcing</li>
              <li className="lihe">Learn More</li>
            </ul>
          </div>

          <div className="footersection">
            <h3 className="hthree">Quick Links</h3>
            <ul className="ullihe">
              <li className="lihe">Privacy Policy</li>
              <li className="lihe">FAQs</li>
              <li className="lihe">Customer Service</li>
              <li className="lihe">Delivery</li>
              <li className="lihe">Loyalty Program Terms and Conditions</li>
              <li className="lihe">Beverage Subscription</li>
              <li className="lihe">Starbucks India Mobile App Terms of Use</li>
              <li className="lihe">Special Discount 25% Off Offer</li>
            </ul>
          </div>

          <div className="footersection">
            <h3 className="hthree">SOCIAL MEDIA</h3>
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
            <FontAwesomeIcon icon={faXTwitter} className="icon" />
          </div>

          <div>
            <div className="appdownload">
              <div className="appdiv">
                <div className="app">
                  <FontAwesomeIcon icon={faApple} className="appicon" />
                </div>

                <div className="apptext">
                  <p className="downtext">DOWNLOAD ON THE</p>
                  <p className="apptype">App Store</p>
                </div>
              </div>
            </div>

            <div className="appdownload">
              <div className="appdiv">
                <div className="app">
                  <FontAwesomeIcon icon={faAndroid} className="appicon" />
                </div>

                <div className="apptext">
                  <p className="downtext">GET IT ON</p>
                  <p className="apptype">Play Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
