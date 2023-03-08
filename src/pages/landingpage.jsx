import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Nft from '../components/Nft/Nft';
import { LandingPageStyle } from './landingpageStyle';

const Landingpage = () => {
    return (
        <LandingPageStyle>
        <Navbar/>
        <Nft/>
      </LandingPageStyle>
    );
    }

export default Landingpage;