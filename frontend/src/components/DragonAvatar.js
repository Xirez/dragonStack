import React, { Component } from 'react';
import { skinny, slender, sporty, stocky, patchy, plain, spotted, striped } from '../assets';

const propertyMap = {
  backgroundColor: {
    black:  '#111721', 
    white:  '#d0d9e8', 
    green:  '#309b42', 
    blue:   '#3345ce', 
    red:    '#bc1212', 
    yellow: '#d5e00f', 
    pink:   '#ed0ecf'},
  build: { slender, stocky, sporty, skinny },
  pattern: { plain, striped, spotted, patchy },
  size: { small: 100, medium: 140, large: 180, enormous: 220, gigantic: 240 }
};

class DragonAvatar extends Component {
  get DragonImage() {
    const dragonPropertyMap = {};

    this.props.dragon.traits.forEach(trait => {
      const { traitType, traitValue } = trait;

      dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
    });

    const {backgroundColor, build, pattern, size} = dragonPropertyMap;

    const sizing = { width: size, height: size };

    return(
      <div className='dragon-avatar-image-wrapper'>
        <div className='dragon-avatar-image-background' style={{backgroundColor, ...sizing}}></div>
        <img src={ pattern } className='dragon-avatar-image-pattern' style={{...sizing}} />
        <img src={ build } className='dragon-avatar-image' style={{...sizing}} />
      </div>
    );
  }

  render() {
    const { generationId, dragonId, traits } = this.props.dragon;

    if (!dragonId) return <div></div>;

    return (
      <div>
        <span>G{generationId}.</span>
        <span>I{dragonId}. </span>
        { traits.map(trait => trait.traitValue).join(', ') }
        { this.DragonImage }
      </div>
    )
  }
}

export default DragonAvatar;