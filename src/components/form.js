import React from "react";

class Form extends React.Component{

    render(){

        return(
              <div className="form-wrap">
                <form onSubmit = {this.props.loadWeather}>
                  <input type="text" name="city" placeholder="City..."/>
                  <input type="text" name="country" placeholder="Country..."/>
                  <button type="submit">Get Weather</button>
                </form>
              </div>
        )
    }
}

export default Form;
