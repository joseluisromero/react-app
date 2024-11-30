import  {useEffect, useState} from 'react';
import { ProductGrid } from './ProductGrid';
import { listProducts } from '../services/ProductService';
import PropTypes from 'prop-types';
import { ProductForm } from './ProductForm';

export const ProductApp =({ title })=>{

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const result=listProducts();
        setProducts(result);
    },[]);
    const handlerAddProduct = (product) => {
        console.log(product);
        setProducts([...products, { ...product }]);
    }
    
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <div>
                    <ProductForm handlerAdd = {handlerAddProduct} />
                </div>
                <div>
                    <ProductGrid products={products} />
                </div>
            </div>
        </div>
    )
}
ProductApp.protoTypes={
    title:PropTypes.string.isRequired
}