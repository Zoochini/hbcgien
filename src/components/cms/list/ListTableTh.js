import React, { Component } from 'react'

export class ListTableTh extends Component {
  render() {
    let { data } = this.props;
    return <th scope="">{data}</th>;
  }
}

export default ListTableTh
