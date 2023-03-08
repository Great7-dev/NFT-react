import React from 'react';
import Card from '../Card/Card';
import { NftStyle } from './Nftstyle';


const Nft = () => {

    
    return (
        <NftStyle >
        <div className='nft-container'>
        <div className='grid-container'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
        
        </NftStyle >
    );
    }

export default Nft;