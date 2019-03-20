import React, { Component } from 'react';
import axios from 'axios';
import {
  Header,
  Logo,
  Item,
  ImgWrap,
  DropDown
} from './styles';
import ImageLoader from '../image-loader';

class Dogs extends Component {

  state = {
    images: {},
    breeds: {},
    active: null,
    transitioning: false,
    selected: 'affenpinscher',
    dropDownActive: false
  };

  handleDogBreedData = () => {
    axios.get('https://dog.ceo/api/breeds/list/all').then(status => {
      this.setState({breeds: status.data});
    });
  };

  handleDogImageData = () => {
    axios.get(`https://dog.ceo/api/breed/${this.state.selected}/images`).then(status => {
      this.setState({images: status.data});
    });
  };

  handleSelectionClick = index => {
    this.setState({ active: index });
    if (index === this.state.active) {
      this.setState({ active: null })
    }
  };

  handleBreedSelection = (e) => {
    this.toggleDropDownSelection();
    this.setState({
      selected: e.currentTarget.textContent,
      transitioning: true
    });
  };

  toggleDropDownSelection = () => {
    this.setState({
      dropDownActive: !this.state.dropDownActive,
      active: null
    })
  };

  handleWrapLines = str => {
    let words = str.split(' ');
    return words.map((val, index) => {
      return <span className={`span-${index}`} key={index}>{val}&nbsp;</span>;
    });
  };

  componentDidMount() {
    this.handleDogBreedData();
    this.handleDogImageData();
  }

  componentDidUpdate(prevProps, prevState, nextState) {
    if (this.state.selected !== prevState.selected){
      this.handleDogImageData();
    }

    if (this.state.images.message !== prevState.images.message) {
      setTimeout(() => {
        this.setState({
          transitioning: false
        })
      }, 1000)
    }
  }

  render() {
    const { images, breeds, active, dropDownActive, selected, transitioning } = this.state;

    const dogImages = images.message && images.message.map((data, index) => {

      const isUpdatedSource = data.includes(selected);

      return (
        <Item
          key={index}
          className={`gds-skeleton decorate gds-flex__item item-to-select ${active === index ? 'selected': ''} ${transitioning ? 'transitioning' : ''}`}
          onClick={() => this.handleSelectionClick(index)}
        >
          <div className={`item-image item-image-${index}`}>
            <ImgWrap className="image-wrap">

              { isUpdatedSource &&
                <ImageLoader src={data}/>
              }
            </ImgWrap>
          </div>

          <div
            className="gds-ranker-card__data-wrapper"
            style={{zIndex: 0}}>
            <span className="gds-ranker-card__number gds-ranker-card__number--secondary">{index + 1}</span>
          </div>
        </Item>
      )
    });

    const dogBreeds = breeds.message && Object.keys(breeds.message).map((data, index) => {
      return (
        <li className="gds-button-dropdown__menu-item" key={index} onClick={this.handleBreedSelection}>
          <span className="gds-button-dropdown__menu-link">
            {data}
          </span>
        </li>
      )
    });
    return (
      <>
        <Header>
          <Logo>
            <i className="fa fa-dog-leashed"/>
          </Logo>
          <div>
            <h1 className="gds-text--header-xl gds-text--hero -m-b-3">{this.handleWrapLines("Dog Image Breeder")}</h1>
            <h2 className="gds-text--header-sm -m-b-3">{this.handleWrapLines("Let's look at some dog photos! Pick a breed. Any breed.")}</h2>
          </div>
        </Header>
        <DropDown className={`gds-button-dropdown ${dropDownActive ? 'gds-button-dropdown--active' : ''}`} data-gds-dropdown="">
          <button
            type="button"
            className="gds-button-dropdown__button gds-button--primary"
            data-gds-dropdown-button=""
            onClick={this.toggleDropDownSelection}
          >
            { selected }
          </button>
          <ul className="gds-button-dropdown__menu">
            { dogBreeds }
          </ul>
        </DropDown>
        <section className="gds-flex dog-images">
          { dogImages }
        </section>
      </>
    );
  }
}


export default Dogs;
