import  {useEffect, useState} from 'react';
const initProducts=[ 
    {
    name:"Monitor Samsung 65",
    price: 100, 
    description: "El monitor esta  bueno"
    },
    {
        name:"IPhone 11",
        price: 600, 
        description: "El telefono esta  bueno"
    }
];
export const ProductApp =()=>{

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setProducts(initProducts);
    },[]);
    
    return (
        <>
        <h1>Hola mundo con React!</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Description</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {initProducts.map((product)=>{
                    return(
                        <tr key={product.name}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                        </tr>
                    )
                })}
                </tbody>
        </table>
        </>
    )
}