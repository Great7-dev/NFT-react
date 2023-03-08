import React from "react";
import Logo from "../../assets/img-01.jpg"
import { CardStyle } from "./Cardstyle";
import { editModalState } from '../../atoms/mod';
import { useRecoilState } from "recoil";
import Modal from "../Modal/modal";



const Card = () => {
    const handleModal = () => {
        setEdit(true);
       
    }
    const [edit, setEdit] = useRecoilState(editModalState);
    return (
        <CardStyle>
            <div className='card-image'>
                <img src={Logo} alt='nft'className="logo" />
                <h2 className='card-title'>Travel Monkey Club</h2>
                <p className='card-description'>Created by Great Okhawere</p>
                <p className='card-price'>Price: 0.031 ETH</p>
            </div>
            <p className="more" onClick={handleModal}>Get More Info</p>
            {edit && <Modal/>}
        </CardStyle>
    );
}

export default Card;