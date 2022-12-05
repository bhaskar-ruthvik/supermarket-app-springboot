import { useEffect, useState } from 'react';
// import ProductContext from '../context/ProductContext';
import { images } from '../data/images';
import plusIcon from '../images/icon-plus.svg';
import minusIcon from '../images/icon-minus.svg';
import './item.css';
import Lightbox from '../components/Lightbox';

function Product(props) {
	// const { productQuantity, setProductQuantity, handleAddToCart } = useContext(ProductContext);
  const [productQuantity, setProductQuantity] = useState(0);
	const [cartProductQuantity, setCartProductQuantity] = useState(0);
	const [currentProductImage, setCurrentProductImage] = useState(0);
	const [lightbox, setLightbox] = useState(false);
	const [price,setPrice] = useState(0)
	const [cart,setCart]=useState(0)
	
	
	const handleAddToCart = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); 
		var yyyy = today.getFullYear();

		today = yyyy + '-' + mm + '-' + dd;
		const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": props.name,
                "item_code": props.id,
                "quantity": productQuantity,
                "price": props.price,
                "offer": props.off,
				"offer_price": props.offp,
				"url1" : props.img1,
				"rating" : props.rating,
				"date" : today,
                "deliveryDate": props.delivery,
				"customerId": window.localStorage.getItem("id")	 
            
               
            })
        };
        fetch("http://localhost:8080/api/v1/cart",requestOptions)
        .then(response => {return response.json()})
        .then(data => {
            console.log(data)   
            setCart(data);
            console.log(cart);
        });
		
		setCartProductQuantity((prevState) => prevState + productQuantity);
		setProductQuantity(0);
		
	};
	const images=[props.img1,props.img2,props.img3,props.img4]
	return (
		<main className='product'>
			<div className='container-md grid product-container'>
				<div className='flex product-image'>
					<img
						onClick={() => window.innerWidth > 768 && setLightbox(true)}
						src={images[currentProductImage]}
						alt=''
					/>
					<div className='thumbnail-wrapper flex'>
						<div className='thumbnail'>
							<img
								onClick={() => setCurrentProductImage(0)}
								className={currentProductImage === 0 ? 'active' : ''}
								src={props.img1}
								alt='thumbnail'
							/>
						</div>

						<div className='thumbnail'>
							<img
								onClick={() => setCurrentProductImage(1)}
								className={currentProductImage === 1 ? 'active' : ''}
								src={props.img2}
								alt='thumbnail'
							/>
						</div>

						<div className='thumbnail'>
							<img
								onClick={() => setCurrentProductImage(2)}
								className={currentProductImage === 2 ? 'active' : ''}
								src={props.img3}
								alt='thumbnail'
							/>
						</div>

						<div className='thumbnail'>
							<img
								onClick={() => setCurrentProductImage(3)}
								className={currentProductImage === 3 ? 'active' : ''}
								src={props.img4}
								alt='thumbnail'
							/>
						</div>
					</div>

					{/* Can open lightbox on larger screen size */}
					{window.innerWidth <= 768 && (
						<>
							<button
								onClick={() =>
									setCurrentProductImage((prevState) =>
										prevState === 0 ? images.length - 1 : prevState - 1
									)
								}
								className='lightbox-control control-prev'>
								<svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M11 1 3 9l8 8'
										stroke='#1D2026'
										strokeWidth='3'
										fill='none'
										fillRule='evenodd'
									/>
								</svg>
							</button>
							<button
								onClick={() =>
									setCurrentProductImage((prevState) =>
										prevState === images.length - 1 ? 0 : prevState + 1
									)
								}
								className='lightbox-control control-next'>
								<svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='m2 1 8 8-8 8'
										stroke='#1D2026'
										strokeWidth='3'
										fill='none'
										fillRule='evenodd'
									/>
								</svg>
							</button>
						</>
					)}
				</div>
				<div className='product-description flow'>
					<p className='text-uppercase fw-700 fs-100 letter-spacing-1 clr-primary-400'>
						Total Quantity : {props.quantity}
					</p>
					<h1 className='fw-700 line-height-300 fs-800 clr-neutral-900'>
						{props.name}
					</h1>
					<p className='fw-400 line-height-500 fs-400 clr-neutral-700'>
						Rating : {props.rating}
					</p>
					<p className='fw-400 line-height-500 fs-400 clr-neutral-700'>
						Expected Delivery Date : {props.delivery}
					</p>
					<div className='product-price'>
						<div className='discounted-price flex'>
							<span className='fw-700 clr-neutral-900 fs-700'>Rs. {props.offp}</span>
							<span className='offer fw-700 fs-400 clr-primary-400'>{props.off}% off</span>
						</div>
						<div className='original-price'>
							<span className='fw-700 fs-400 line-height-500 text-line-through clr-neutral-400'>
								Rs. {props.price}
							</span>
						</div>
					</div>

					<div className='action-wrapper flex'>
						<div className='product-quantity flex'>
							<img
								src={minusIcon}
								alt=''
								onClick={() =>
									setProductQuantity((prevState) => (prevState !== 0 ? prevState - 1 : 0))
								}
							/>
							<span className='fw-700 fs-400 clr-neutral-900'>{productQuantity}</span>
							<img
								src={plusIcon}
								alt=''
								onClick={() => setProductQuantity((prevState) => prevState + 1)}
							/>
						</div>
						<button onClick={handleAddToCart} className='btn flex fw-700 fs-400'>
							<svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
									fill='#ffffff'
									fillRule='nonzero'
								/>
							</svg>
							Add to cart
						</button>
						
					</div>
					{cart==1&& <p className='fw-400 line-height-500 fs-400 success'>
						Added to cart successfully!
					</p>}
				</div>	
			</div>
			
			{lightbox && <Lightbox images={images} setLightbox={setLightbox} />}
		</main>
	);
}
export default Product;
