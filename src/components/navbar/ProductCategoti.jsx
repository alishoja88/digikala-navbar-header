import React from 'react';
const ProductCategori = (props) => {
    const { products } = props
    console.log("pro" , products);
    
    return (
        <div className="product-categori">
            <span key={products.id} className="title-product-categori">
                {products.titel}
            </span>
            <div>
                <ul>
                    {products.submenu.map(item => (
                        <li className="list-product-categori" key={item.id}>
                            <a className="link-product-categori" href="#">{item.titel}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProductCategori;