import React from "react";
import "./FilterSection.css";

class FilterSection extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="filter-section-container">
        <div className="filter-section">
          <form>
            <h3>Find a rental property</h3>
            <div className="input-area">
              <label>Search area</label>
              <input type="search" placeholder="eg. Oxford or NW3" />
            </div>
            <div className="min-max-option">
              <div className="selection-area">
                <label>Minimum beds</label>
                <select id="exampleList">
                  <option value="A">No min</option>
                  <option value="B"></option>
                  <option value="c"></option>
                  <option value="d"></option>
                </select>
              </div>
              <div className="selection-area">
                <label>Maximum beds</label>
                <select id="exampleList">
                  <option value="">No max</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="input-area">
              <label>Price per</label>
              <select id="exampleList">
                <option value="">month</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="min-max-option">
              <div className="selection-area">
                <label>Minimum price</label>
                <select id="exampleList">
                  <option value="">No min</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <div className="selection-area">
                <label>Maximum price</label>
                <select id="exampleList">
                  <option value="">No max</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
          </form>
          <div className="button-container">
            <button type="button" className="find-btn">
              FIND PROPERTIES
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default FilterSection;
