import React from "react";
import "./MoreDetailsPage.css";
import saveIcon from "../../assets/svg/saveIcon.svg";
import clearIcon from "../../assets/svg/clearIcon.svg";
import houseImage from "../../assets/img/houseImage.png";
import houseImage2 from "../../assets/img/houseImage2.jpg";
import messageIcon from "../../assets/svg/messageIcon.svg";
import bedIcon from "../../assets/svg/bedIcon.svg";
import chairIcon from "../../assets/svg/chairIcon.svg";
import toiletIcon from "../../assets/svg/toiletIcon.svg";
import undergroundIcon from "../../assets/svg/undergroundIcon.svg";
import GoogleApiWrapper from "../../components/GoogleMapsApi/GoogleMapsApi";
import Carousel from "../Carousel.js/Carousel";

class MoreDetailsPage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      images: [houseImage, houseImage2, houseImage],
    };
  }

  render() {
    return (
      <section className="main-area-section">
        <div className="wrapper">
          <div className="heading">
            <div className="heading-icons">
              <span>
                <a href="#">
                  <img src={saveIcon} alt="" />
                </a>
              </span>
              <span>
                <a href="/">
                  <img src={clearIcon} alt="" />
                </a>
              </span>
            </div>
          </div>
          <Carousel images={this.state.images} />
          <FullHouseDetails />
          <div className="full-house-info">
            <div className="google-map-location">
              <GoogleApiWrapper />
            </div>
            <div className="full-house-description">
              <p>
                Situated on the 12th floor of the Crawford Building this modern
                one bedroom flat is available to rent end of June. Early
                viewings are highly recommended.
              </p>
              <p>
                This modern apartment features an open plan kitchen/ living
                area, a large bathroom and a double sized bedroom with fitted
                wardrobe. Other benefits include, floor to ceiling windows and a
                24 hour concierge service.
              </p>
              <p>
                The Crawford building itself has it's own entrance to Aldgate
                East Underground station which makes it ideal for transport
                links.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const FullHouseDetails = () => {
  return (
    <section>
      <div className="house-title">
        <div className="house-titile-container">
          <p className="house-name">3 Bedroom flat in Hackney Bridge</p>
          <p className="house-price">£1,420 pcm</p>
        </div>
        <p className="house-message-icon">
          <img src={messageIcon} alt="" />
        </p>
      </div>

      <div className="house-info-section">
        <div className="home-info-icons-section">
          <div className="home-info-icons">
            <span>
              <img src={bedIcon} alt="" className="small-icon" />
            </span>
            <span>3</span>
          </div>
          <div className="home-info-icons">
            <span>
              <img src={chairIcon} alt="" className="small-icon" />
            </span>
            <span>1</span>
          </div>
          <div className="home-info-icons">
            <span>
              <img src={toiletIcon} alt="" className="small-icon" />
            </span>
            <span>1</span>
          </div>
        </div>

        <div className="home-info-address-wrapper">
          <span>
            <img src={undergroundIcon} alt="" className="underground-img" />
          </span>
          <span className="address">South Kensington (0.1 mile)</span>
        </div>
        <div>Furnished</div>
        <div className="move-in-date"> Move-in from 20/04/21 </div>
      </div>
      <div className="border-bott0m"></div>
    </section>
  );
};

export default MoreDetailsPage;
