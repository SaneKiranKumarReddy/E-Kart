import { useParams} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
export default function ProductDetails() {
    let {id} = useParams();
    useEffect(()=> {
        getProductDetails();
    },[])
    const getProductDetails = ()=> {
        axios.get().then().catch();
    }
    
    return (
        <div className="ProductDetails">
            <div className="ImageContainer">Product Image with id : {id}</div>
            <div className="ProductData">Product Details</div>
        </div>
    );
}