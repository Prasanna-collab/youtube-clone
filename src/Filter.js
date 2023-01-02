import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter d-flex align-items-center justify-content-space-between">
      <div className="single-filter">
        <span className="filter-items pointer active">All</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer active">Music</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer active">Mixes</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer active">Computer</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer active">Programming</span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer active">Tamil_Cinema </span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer active">Marvel_Studios </span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer active">Dua_Lipa </span>
      </div>
      <div className="single-filter">
        <span className="filter-items pointer active">Juke_Box</span>
      </div>
      <div className="single-filter">
      <div classname="filter-items pointer active">
        <svg
          viewBox="10 -5 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style={{"width":"17px"}}
        >
          <g mirror-in-rtl="" class="style-scope yt-icon">
            <path
              d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
      </div>
      </div>
    </div>
  );
}

export default Filter;
