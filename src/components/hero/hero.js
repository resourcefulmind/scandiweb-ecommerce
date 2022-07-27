import React from "react";
import ProductD from '../../assets/ProductD.png';
import ProductB from '../../assets/ProductB.png';
import ProductA from '../../assets/ProductA.png';
import ProductC from '../../assets/ProductC.png';
import Image from '../../assets/Image.png';



class Hero extends React.Component {

    render() { 
        return (
            <div className="scandiweb__hero__container">
                    <h2>Category name</h2>
                    <div>
                        <div className="product-img-container">
                            <img src={ProductB} alt="Product B" />
                        </div>
                        <h3>Apollo Running Short</h3>
                        <p>$50.00</p>
                    </div>
                    <div>
                        <div className="product-img-container">
                            <img src={ProductB} alt="Product B" />
                        </div>
                        <h3>Apollo Running Short</h3>
                        <p>$50.00</p>
                    </div>
                    <div>
                        <div className="product-img-container">
                            <img src={ProductB} alt="Product B" />
                        </div>
                        <h3>Apollo Running Short</h3>
                        <p>$50.00</p>
                    </div>
                    <div>
                        <div className="product-img-container">
                            <img src={ProductB} alt="Product B" />
                        </div>
                        <h3>Apollo Running Short</h3>
                        <p>$50.00</p>
                    </div>
                    <div>
                        <div className="product-img-container">
                            <img src={ProductB} alt="Product B" />
                        </div>
                        <h3>Apollo Running Short</h3>
                        <p>$50.00</p>
                    </div>
                    <div>
                        <div className="product-img-container">
                            <img src={ProductB} alt="Product B" />
                        </div>
                        <h3>Apollo Running Short</h3>
                        <p>$50.00</p>
                    </div>
            </div>
        );
    }
}

export default Hero;
