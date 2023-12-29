import { useDispatch } from 'react-redux';
import {
	increment,
	decrement,
	handleAddProduct
} from '../../action/reducer/lightboxSlice';

import Button from '../reusable/Button';
import cart from '../../assets/images/icon-cart-white.svg';

function Description({ data }) {
	const dispatch = useDispatch();

	return (
		<>
			<h2 className='hero__logoBrand'>{data.company}</h2>
			<h1 className='hero__title text-4xl'>{data.title}</h1>
			<p className='hero__description'>{data.description}</p>

			<div className='flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-2'>
				<div className='flex flex-row items-center gap-4'>
					<h2 className='hero__updatePrice text-lg'>${data.price}.00</h2>
					<h2 className='hero__discountPrice px-2'>{data.discount}%</h2>
				</div>

				<h2 className='text-sm line-through opacity-70'>
					${data.originalPrice}.00
				</h2>
			</div>

			<div className='last:mb-0 flex flex-col md:flex-row gap-4 md:gap-0'>
				<div className='join mr-2 w-full md:w-min'>
					<Button
						name='-'
						customStyle='join-item w-[45%] md:w-min hero__incrementBtn text-xl'
						handleClick={() => dispatch(decrement())}
					/>
					<h1 className='join-item btn btn-square'>{data.itemCount}</h1>
					<Button
						name='+'
						customStyle='join-item w-[45%] md:w-min hero__incrementBtn text-xl'
						handleClick={() => dispatch(increment())}
					/>
				</div>

				<Button
					name='Add to cart'
					customStyle='orangeBtn'
					hasIcon='true'
					icon={<img src={cart} alt='cart' className='text-white' />}
					handleClick={() => dispatch(handleAddProduct(data))}
				/>
			</div>
		</>
	);
}

export default Description;
