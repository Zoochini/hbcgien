import React, { Component } from "react";
import Partenaire from "../partenaires/Partenaire";

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      index: null,
      animation: "slide-in-left",
      intervalId: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URI}partenaires`)
      .then((res) => res.json())
      .then(
        (res) =>
          this.setState({
            content: res,
            index: 0,
            intervalId: setInterval(() => {
              this.slide();
            }, 5*1000),
          }),
        (err) => console.log("Error")
      );
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  //Function for the setInterval method, used for auto slide the carousel
  slide() {
    let { content, index } = this.state;
    this.setState({
      animation: "slide-out-left",
    });
    setTimeout(() => {
      this.setState({
        index: index + 1 >= content.length ? 0 : index + 1,
        animation: "slide-in-right",
      });
    }, 300);
  }

  handleClick(e) {
    let { content, index } = this.state;
    //Switch used for the slide event and animation
    switch (e.target.value) {
      case "left":
        if (index === null) break;
        this.setState({
          animation: "slide-out-right",
        });
        setTimeout(() => {
          this.setState({
            index: index - 1 < 0 ? content.length - 1 : index - 1,
            animation: "slide-in-left",
          });
        }, 500);
        break;
      case "right":
        if (index === null) break;
        this.setState({
          animation: "slide-out-left",
        });
        setTimeout(() => {
          this.setState({
            index: index + 1 >= content.length ? 0 : index + 1,
            animation: "slide-in-right",
          });
        }, 500);
        break;
      default:
        return;
    }
  }

  render() {
    let { content, index, animation } = this.state;
    return (
      <div className="carousel col-lg-5">
        <button className="left-button" onClick={this.handleClick} value="left">
          {"<"}
        </button>
        {index !== null ? (
          <Partenaire
            className={`partenaire ${animation}`}
            name={content[index].name}
            link={content[index].url}
            src={`data:${content[index].image.contentType};base64, ${content[index].image.data}`}
          />
        ) : (
          ""
        )}
        <button
          className="right-button"
          onClick={this.handleClick}
          value="right"
        >
          {">"}
        </button>
      </div>
    );
  }
}
