
import PropTypes from 'prop-types';

export const ProductGrid =({products=[]})=>{
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Description</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>{
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

    )
}
ProductGrid.prototype={
    products:PropTypes.array.isRequired
}