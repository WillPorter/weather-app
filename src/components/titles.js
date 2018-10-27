import React from "react";

class Titles extends React.Component {

    render() {

        return (

            <div className="title-wrapper">

              <h1 className="title-container__title">Weather App</h1>
              <p className="title-container__subtitle"> Built with React and <br />the OpenWeatherMap api</p>
            </div>
        )
    }
}

export default Titles;
