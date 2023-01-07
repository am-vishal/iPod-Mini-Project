import { Component } from "react";

class MenuItems extends Component {
  render() {
    const { optionsInMenu } = this.props;
    return (
      <>
        {optionsInMenu.map((item, index) => {
          return (
            <div
              className={this.props.selectedOption === index ? "selected" : ""}
              key={index}
            >
              <p>{item}</p>
            </div>
          );
        })}
        {optionsInMenu.length === 3 ? (
          <div style={{ color: "green" }}>
            <p style={{ fontSize: 18 }}>
              click "<i className="fas fa-backward"></i>" to go back
            </p>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
export default MenuItems;
