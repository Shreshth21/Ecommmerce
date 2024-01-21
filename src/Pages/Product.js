import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrumps from '../Components/BreadCrumps/BreadCrumps';
import ProductsDisplay from '../Components/ProductsDisplay/ProductsDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrumps product={product}/>
      <ProductsDisplay product={product}/>
      <DescriptionBox product={product} />
      <RelatedProducts />
    </div>
  )
}

export default Product
