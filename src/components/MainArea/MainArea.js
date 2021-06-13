import React from "react";
import "./MainArea.css";
import messageIcon from "../../assets/svg/messageIcon.svg";
import houseImage from "../../assets/img/houseImage.png";
import bedIcon from "../../assets/svg/bedIcon.svg";
import chairIcon from "../../assets/svg/chairIcon.svg";
import undergroundIcon from "../../assets/svg/undergroundIcon.svg";

class MainArea extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      properties: [
        {
          image: houseImage,
          title: "3 Bedroom flat in Hackney Bridge",
          price: "£1,420 pcm",
          bedrooms: 3,
          baths: 1,
          toilets: 2,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "4 Bedroom flat in Hackney Bridge",
          price: "£2,420 pcm",
          bedrooms: 4,
          baths: 1,
          toilets: 2,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
        {
          image: houseImage,
          title: "1 Bedroom flat in Hackney Bridge",
          price: "£420 pcm",
          bedrooms: 1,
          baths: 1,
          toilets: 1,
          landmarks: [
            { icon: undergroundIcon, text: "South Kensington (0.1 mile)" },
          ],
          moveInDate: "20/04/21",
        },
      ],
    };
  }

  render() {
    return (
      <section className="main-area-section">
        <div className="wrapper">
          <div className="heading">
            <p>15 Search results</p>
          </div>
          {this.state.properties.map((item) => {
            return <HouseList property={item} />;
          })}
        </div>
      </section>
    );
  }
}

const HouseList = (props) => {
  return (
    <div className="listing">
      <a href="/second-page" className="image-wrapper">
        <img src={props.property.image} alt="" className="house-image" />
      </a>
      <div className="details-wrapper">
        <div className="bold-text">{props.property.title}</div>
        <span className="bold-text price">{props.property.price}</span>
        <div className="list-icon-wrapper">
          <div className="listing-icon">
            <span>
              <img src={bedIcon} alt="" className="small-icon" />
            </span>
            <span className="number">{props.property.bedrooms}</span>
          </div>
          <div className="listing-icon">
            <span>
              <img src={chairIcon} alt="" className="small-icon" />
            </span>
            <span className="number">{props.property.baths}</span>
          </div>
          <span>{props.property.toilets}</span>
        </div>
        {props.property.landmarks.map((item) => {
          return (
            <div className="listing-address-wrapper">
              <span>
                <img src={item.icon} alt="" className="underground-img" />
              </span>
              <span className="address">{item.text}</span>
            </div>
          );
        })}

        <div className="move-in-date"> Move-in from 20/04/21 </div>
      </div>
      <img src={messageIcon} alt="" className="listing-message-icon" />
    </div>
  );
};

export default MainArea;
