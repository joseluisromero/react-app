import PropTypes from 'prop-types';
export const ProductDetail =({products})=>{
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
                        <ProductDetail products={product} key={product.name} />
                    )
                })}
                </tbody>
        </table>

    )
}
ProductDetail.prototype={
    products:PropTypes.array.isRequired
}