import { useEffect, useState } from 'react';
// import ProductContext from '../context/ProductContext';
import { images } from '../data/images';
import plusIcon from '../images/icon-plus.svg';
import minusIcon from '../images/icon-minus.svg';
import './item.css';
import Lightbox from '../components/Lightbox';

function ProductEdit(props) {
	// const { productQuantity, setProductQuantity, handleAddToCart } = useContext(ProductContext);
  const [productQuantity, setProductQuantity] = useState(0);
	const [cartProductQuantity, setCartProductQuantity] = useState(0);
	const [currentProductImage, setCurrentProductImage] = useState(0);
    const[response,setResponse] = useState()
	const [lightbox, setLightbox] = useState(false);
    let pr = props.price
    let qt = props.quantity
    let of = props.off
    let d = props.delivery
    let na = props.name
    let rt = props.rating
    let i = props.id
    console.log(i)
	const [price,setPrice] = useState(pr)
    console.log(price)
    const[del,setDel] = useState(-1) 
    const [quantity,setQuantity] = useState(qt)
  const [id,setId] = useState(i)
    const [offer,setOffer] = useState(of)
    console.log(offer)
    const [date,setDate] = useState(d)
    const [rating,setRating] = useState(na)
    const [name,setName] = useState(rt)
    let count=0;
    const params = [price,quantity,date,name,rating,offer]
    const names = ["price","quantity","date","name","rating","offer"]
	// Handle action add items to cart
	const handleAddToCart = () => {
        let url = "http://localhost:8080/api/v1/item/"+i
        for(let i=0;i<6;i++){
            if(params[i]!=null&& params[i]!=NaN){
                console.log(params[i])
                if(count==0){
                    url = url + "?"+names[i]+"="+params[i]
                    count++
                }
                else{
                    url = url + "&"+names[i]+"="+params[i]
                }
            }
        }
        const requestOptions = {
            method: 'PUT'
            }
        
       
        fetch(url,requestOptions)
        .then(response => {return response.json()})
        .then(data => {
            console.log(data)   
            setResponse(data);
            console.log(response)
        });
	};
    function handleCl(){
        const requestOptions={
            method: 'DELETE'
        }
        const url = "http://localhost:8080/api/v1/item/"+props.id
        fetch(url,requestOptions)
        .then(res=>{return res.json()})
        .then(data=>{console.log(data)
            setDel(data)
        })
    }
    function handlePrice(e){
        setPrice(e.target.value)
    }
    function handleQuantity(e){
        setQuantity(e.target.value)
    }
    function handleOffer(e){
        setOffer(e.target.value)
    }
    function handleDate(e){
        setDate(e.target.value)
    }
    function handleRating(e){
        setRating(e.target.value)
    }
    function handleName(e){
        setName(e.target.value)
    }
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
						Total Quantity : <input className='text-uppercase fw-700 fs-100 letter-spacing-1 clr-primary-400' placeholder={props.quantity} onChange={handleQuantity}/>
					</p>
					<h1 className='fw-700 line-height-300 fs-800 clr-neutral-900'>
                    <input className='fw-700 line-height-300 fs-800 clr-neutral-900' placeholder={props.name} onChange={handleName}/>
					</h1>
					<p className='fw-400 line-height-500 fs-400 clr-neutral-700'>
						Rating : <input className='fw-400 line-height-500 fs-400 clr-neutral-700' placeholder={props.rating} onChange={handleRating}/>
					</p>
					<p className='fw-400 line-height-500 fs-400 clr-neutral-700'>
						Expected Delivery Date : <input className='fw-400 line-height-500 fs-400 clr-neutral-700' placeholder='Enter the date in yyyy-mm-dd format' onChange={handleDate}/>
					</p>
					<div className='product-price'>
						<div className='discounted-price flex'>
						Rs.	<input className='fw-700 clr-neutral-900 fs-700' placeholder={props.price} onChange={handlePrice}/>
							
						</div>
						<div className='original-price'>
                        <input type="text" className='offer fw-700 fs-400 clr-primary-400' placeholder='Enter offer in decimals' onChange={handleOffer}/>
							{/* <input className='fw-700 fs-400 line-height-500 clr-neutral-400' placeholder='Enter Price '/> */}
								{/* Rs. {props.price}
							</span> */}
						</div>
					</div>

					<div className='action-wrapper flex'>
						{/* <div className='product-quantity flex'>
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
						</div> */}
                        <button onClick={handleCl} className='btn flex fw-700 fs-400'>
							{/* <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
									fill='#ffffff'
									fillRule='nonzero'
								/>
							</svg> */}
							Delete Product
						</button>
						<button onClick={handleAddToCart} className='btn flex fw-700 fs-400'>
							{/* <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
									fill='#ffffff'
									fillRule='nonzero'
								/>
							</svg> */}
							Update Product
						</button>
					</div>
                    {del==1&&<p className='fw-400 line-height-500 fs-400 success'>
						Product Deleted Successfully!
					</p>}
                    {response==1&&<p className='fw-400 line-height-500 fs-400 success'>
						Product Updated Successfully!
					</p>}
                    {del==0&&<p className='fw-400 line-height-500 fs-400 clr-primary-700'>
						Sorry the product does not exist
					</p>}
                    {response==0&&<p className='fw-400 line-height-500 fs-400 clr-primary-700'>
						Sorry the product could not be updated
					</p>}
				</div>
			</div>

			{lightbox && <Lightbox images={images} setLightbox={setLightbox} />}
		</main>
	);
}
export default ProductEdit;
