import React from "react";
import { ModalStyle } from "./modalStyle";
import {ImCancelCircle} from "react-icons/im";
import { useRecoilState } from "recoil";
import { editModalState } from "../../atoms/mod";


const Modal = () => {
    const [edit, setEdit] = useRecoilState(editModalState);

    const handleClose = () => {
        setEdit(false);
    }

    return (
        <ModalStyle>
            <div className="mymodal">
            <div className="container">
            <ImCancelCircle className="close" onClick={handleClose}/>
                <h1 className="heading">Description:</h1>
                <p className="text">
                    Crypto Animals is a collection of 10 unique NFTs featuring hand-drawn illustrations of some of the world's most beloved animals. Each NFT is created on the Ethereum blockchain using a custom smart contract, making them one-of-a-kind and verifiably scarce.
                    These adorable animals are designed to bring joy and delight to their new owners. From a playful panda to a majestic lion, each NFT has its own personality and story. The collection is inspired by the natural world and the beauty of wildlife, with a focus on cute and charming creatures that will appeal to all ages..</p>
                <h1 className="heading">Price:</h1>
                <p className="text">0.031 ETH</p> 
                <h1 className="heading">Wallet Address:</h1>
                <p className="text">0x71c7656ec7ab88b098defb751b7401b5f6d8976f</p>       
            </div>
            <button className="bid">Place a Bid</button>
            </div>
        </ModalStyle>
    );
}

export default Modal;