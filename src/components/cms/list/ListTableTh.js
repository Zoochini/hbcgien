import React, { Component } from 'react'

export class ListTableTh extends Component {
  render() {
    let { data } = this.props;
    return <th scope="col">{data}</th>;
  }
}

export default ListTableTh
