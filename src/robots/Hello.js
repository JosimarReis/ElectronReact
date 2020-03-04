import React from "react";
export default class Hello extends React.Component {
  render() {
    return this.props.show ? <div>vamos lá</div> : <div></div>;
  }
}
