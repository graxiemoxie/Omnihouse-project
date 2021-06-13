import React from "react";
import "./Carousel.css";
import imageIcon from "../../assets/svg/imageIcon.svg";
import chevronLeft from "../../assets/svg/chevronLeft.svg";
import chevronRight from "../../assets/svg/chevronRight.svg";

class Carousel extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }

  render() {
    return (
      <div className="view-house-image-wrapper">
        <figure className="full-house-image">
          <img src={this.props.images[this.state.currentIndex]} alt="" />
        </figure>
        <div className="view-house-image-icons">
          <div className="image-counter">
            <span>
              <img src={imageIcon} alt="" />
            </span>
            <span>
              {this.state.currentIndex + 1}/{this.props.images.length}
            </span>
          </div>
          <div className="chevron-icons">
            <span
              className="chevron-left"
              onClick={() => this.onPreviousImage()}
            >
              <img src={chevronLeft} alt="" />
            </span>
            <span className="chevron-right" onClick={() => this.onNextImage()}>
              <img src={chevronRight} alt="" />
            </span>
          </div>
        </div>

        <div className="dots-container">
          {this.props.images.map((item, index) => {
            return (
              <div
                className={
                  this.state.currentIndex === index
                    ? "carousel-inidicator-active"
                    : "carousel-inidicator-inactive"
                }
              ></div>
            );
          })}
        </div>
      </div>
    );
  }

  onNextImage() {
    let nextIndex = this.state.currentIndex + 1;
    if (nextIndex > this.props.images.length - 1) {
      nextIndex = 0;
    }
    this.setState({ currentIndex: nextIndex });
  }

  onPreviousImage() {
    let previousIndex = this.state.currentIndex - 1;
    if (previousIndex < 0) {
      previousIndex = this.props.images.length - 1;
    }
    this.setState({ currentIndex: previousIndex });
  }
}

export default Carousel;
