import React, { Component } from 'react';
import boiledEggImage from './boiledEgg.png';
import siftBoiledEggImage from './softBoiledEgg.png';

import EggComponent from './EggComponent';



class EggPage extends Component {
  render() {
    const eggs = [
      {
        type: 'boiled',
        image: boiledEggImage,
        time: this.props.time.boiledEgg.minutes * 60000 + this.props.time.boiledEgg.seconds
      },
      {
        type: 'soft-boiled',
        image: siftBoiledEggImage,
        time: this.props.time.softBoiledEgg.minutes * 60000 + this.props.time.softBoiledEgg.seconds
      }
    ];
    return (
      <div className="page">
        {
          eggs.map(egg => 
            <EggComponent 
              key={egg.type}
              type={egg.type} 
              image={egg.image} 
              time={egg.time}
              size={this.props.size}
            />
          )
        }
      </div>
    );
  }
}

export default EggPage;
