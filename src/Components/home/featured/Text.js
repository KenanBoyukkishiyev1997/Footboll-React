import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease'
import Animate from 'react-move/Animate'
import FeaturedPlayer from '../../../Resources/images/featured_player.png';
class Text extends Component {
    anmateNumber = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                rotate: 0
            }}

            enter={{
                opacity:[1],
                rotate: [360],
                timing: {  duration: 1000, ease: easePolyOut }
            }}
        >
            {({opacity, rotate}) => {
                return (
                    <div className='featured_number' style={{opacity,transform:`translate(260px,170px) rotateY(${rotate}deg) `}}>
                        3
                    </div>
                )
            }}
        </Animate>
    )


    anmateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                x:503,
                y:450
            }}

            enter={{
                opacity:[1],
                x:[273],
                y:[450],
                timing: {  duration: 500, ease: easePolyOut }
            }}
        >
            {({opacity, x,y }) => {
                return (
                    <div className='featured_first' style={{opacity,transform:`translate(${x}px,${y}px)`}}>
                        League
                    </div>
                )
            }}
        </Animate>
    )

    anmateSecond = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
                x:503,
                y:586
            }}

            enter={{
                opacity:[1],
                x:[273],
                y:[586],
                timing: {deley:300,  duration: 500, ease: easePolyOut }
            }}
        >
            {({opacity, x,y }) => {
                return (
                    <div className='featured_second' style={{opacity,transform:`translate(${x}px,${y}px)`}}>
                        Championships
                    </div>
                )
            }}
        </Animate>
    )

    anmatePlayer = () => (
        <Animate
            show={true}
            start={{
                opacity:0,
            }}

            enter={{
                opacity:[1],
                timing: {deley:800,  duration: 500, ease: easePolyOut }
            }}
        >
            {({opacity}) => {
                return (
                    <div className='featured_player' style={{opacity, background:`url(${FeaturedPlayer})`, transform:`translate(550px,201px)`}}>
                    </div>
                )
            }}
        </Animate>
    )
    render() {
        return (
            <div className='featured_text'>
                {this.anmatePlayer()}
                {this.anmateNumber()}
                {this.anmateFirst()}
                {this.anmateSecond()}
            </div>
        )
    }
}
export default Text