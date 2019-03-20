import React, { Component } from 'react';
import styled from "styled-components";

const _loaded = {};

class ImageLoader extends Component {

  state = {
    loaded: _loaded[this.props.src]
  };

  static defaultProps = {
    className: '',
    loadingClassName: 'img-loading',
    loadedClassName: 'img-loaded'
  };

  onLoad = () => {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };


  render() {

    let { className, loadedClassName, loadingClassName } = this.props;

    className = `${className} ${this.state.loaded
      ? loadedClassName
      : loadingClassName}`;

    return <Img
      src={this.props.src}
      className={className}
      onLoad={this.onLoad} />;
  }
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  object-fit: cover;
`;

export default ImageLoader;
