import './ProductCard.css'
import {Heart} from 'akar-icons'

const ProductCard = ({product}) => {
    return (
        <div className='product-card'>
            <div className='product-image-container'>
                {/*Chamar de "image, name" pois no FeaturedProducts está com esta nomenclatura*/}
                <img src={product.image} alt={product.name} />
                <button className='favorite-button'>
                    <Heart size={24}/>
                </button>
            </div>

            <div className='product-info'>
                <h4 className='product-name'>{product.name}</h4>
                <p className='product-price'>{product.price}</p>
            </div>
        </div>
    );
}

export default ProductCard