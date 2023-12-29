import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeBtn } from '../action/reducer/lightboxSlice';
import mainImg from '../assets/images/image-product-1.jpg';
import ImageCarousel from './Hero/ImageCarousel';
import Description from './Hero/Description';

function Hero() {
	const { productThumb, productItem, previousBtn, nextBtn } = useSelector(
		(state) => state.lightboxTemplate
	);
	const dispatch = useDispatch();

	return (
		<section className='max-w-6xl mx-auto my-10 md:p-2 flex flex-col md:flex-row md:gap-28'>
			{/* image desktop section */}
			<section className='order-1 w-[38rem] hidden lg:block'>
				<img
					src={mainImg}
					alt='sneaker'
					className='h-96 w-full rounded-lg mb-10'
				/>

				<ImageCarousel data={productThumb} />
			</section>

			{/* image mobile section */}
			<section className='order-1 block md:hidden'>
				<div className='carousel w-full'>
					{productThumb?.map((item, index) => (
						<div
							key={index}
							id={`${item.id}${index}`}
							className='carousel-item relative w-full'
						>
							<img src={item.actual} className='w-full' />
							<div
								className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'
								onClick={() => dispatch(handleChangeBtn(index))}
							>
								<a href={`#${previousBtn}`} className='btn btn-circle'>
									❮
								</a>
								<a href={`#${nextBtn}`} className='btn btn-circle'>
									❯
								</a>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* detail section */}
			<section className='order-2 max-w-full md:max-w-md p-5 md:py-10 md:px-0 [&>*]:mb-4'>
				{productItem?.map((item, index) => (
					<Fragment key={index}>
						<Description data={item} />
					</Fragment>
				))}
			</section>
		</section>
	);
}

export default Hero;
