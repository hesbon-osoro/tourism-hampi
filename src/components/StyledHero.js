import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const StyledHero = ({img, className, children, home}) => {
    return (
        <div className={className} home={home}>
            <GatsbyImage
                image={img}
                alt=''
                className='hero-image'
                imgStyle={{objectFit: 'cover'}}
            />
            <div className='hero-content'>
                {children}
            </div>
        </div>
    );
}

export default styled(StyledHero)`
    position: relative;
    min-height: ${props => props.home ? 'calc(100vh - 62px)':'50vh'};
    background: ${props => props.home ? 'linear-gradient(rgba(63,208,212,0.7), rgba(0,0,0,0.7))':'none'};
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .hero-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .hero-content {
        position: relative;
        z-index: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
