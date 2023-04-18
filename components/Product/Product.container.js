import React, { useContext, useState } from 'react';
import { products } from '@/components/Product/Products';
import { AiFillStar, AiFillHeart } from 'react-icons/ai';
import { AppContext } from '../Search/AppContext';

const Productcontainer = () => {
    const { query } = useContext(AppContext);

    const filteredProducts = products.filter((product) => {
        if (query === '') {
            return true;
        }
        const { name, type, brand } = product;
        const queryLower = query.toLowerCase();
        const nameLower = name.toLowerCase();
        const typeLower = type.toLowerCase();
        const brandLower = brand.toLowerCase();
        return nameLower.includes(queryLower) || typeLower.includes(queryLower) || brandLower.includes(queryLower);
    });

    const options = [
        {
            name: 'Recommended',
            value: 'recommended',
        },
        {
            name: 'What\'s New',
            value: 'new',
        },
        {
            name: 'Popularity',
            value: 'popularity',
        },
        {
            name: 'Better Discount',
            value: 'discount',
        },
        {
            name: 'Price: High to Low',
            value: 'high',
        },
        {
            name: 'Price: Low to High',
            value: 'low',
        },
    ];

    const items = [
        'Add-Ons',
        'Bundles',
        'Character',
        'Collar',
        'Country of Origin',
        'Fabric',
        'Fabric 2',
    ];

    const select = () => (
        <select className="sort__options__select">
            {options.map((option, index) => (
                <option value={option.value} key={index}>
                    {option.name}
                </option>
            ))}
        </select>
    );

    return (
        <>
            <div className="product__sort">
                <div className="sort__left">
                    <div className="sort__items">
                        {items.map((item, index) => {
                            return (
                                <div className="sort__item" key={index}>
                                    <span>{item}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="sort__right">
                    <div className="sort__options">
                        <div className="sort__left">Sort by</div>
                        {select()}
                    </div>
                </div>
            </div>
            <div className="product">
                {
                    filteredProducts.length > 0 && (
                        filteredProducts.map((product) => {
                            const { id, name, brand, price, discount, rating, images } = product;
                            return (
                                <div className="product__card" key={id}>
                                    <div className="product__image">
                                        <img src={images[0]} alt={name} />
                                        <div className="product__rating">
                                            <span className="rating__number">{rating}</span>
                                            <AiFillStar className="rating__icon" />
                                            <span className="rating__seperator">|</span>
                                            <span className="rating__count">18.5K</span>
                                        </div>
                                        <div className="product__similar">
                                            <span className="similar__text">View Similar</span>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <div className="product__name">
                                            <span>{name}</span>
                                        </div>
                                        <div className="product__type">
                                            <span>{brand}</span>
                                        </div>
                                        <div className="product__price">
                                            <span className="product__price__actual">Rs.{parseInt(price - (price * discount) / 100)}</span>
                                            <span className="product__discount">Rs.{price}</span>
                                            <span className="product__discount__percent">{discount}% off</span>
                                        </div>
                                        <div className="product__wishlist__stock">
                                            <div className="product__stock">
                                                {product.stock > 5 ? <span className="stock__text">In Stock</span> : <span className="stock__text">Only Few Left</span>}
                                            </div>
                                            <div className="product__wishlist">
                                                <AiFillHeart className="wishlist__icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
            </div>
            {filteredProducts.length === 0 && (
                <div className="product__not__found">
                    <span className="not__found__text">No Results Found</span>
                </div>
            )}
        </>
    );
}

export default Productcontainer;