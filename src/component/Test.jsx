import { useSelector } from 'react-redux';
import { SlideshowLightbox } from 'lightbox.js-react';

import 'lightbox.js-react/dist/index.css';

function Test() {
	const { productThumb } = useSelector((state) => state.lightboxTemplate);

	return (
		<div className='max-w-2xl mx-auto py-10'>
			<SlideshowLightbox
				className=' grid grid-cols-4 gap-10'
				showThumbnails={true}
			>
				{productThumb?.map((item, index) => (
					<img key={index} className='w-full rounded-lg' src={item.actual} />
				))}
			</SlideshowLightbox>
		</div>
	);
}

export default Test;
// actual for hero content
{
	/* <div className='mt-10 grid grid-cols-4 justify-items-stretch gap-10'>
					{productThumb?.map((item, index) => (
						<img
							key={index}
							src={item.actual}
							alt='sneaker'
							className='h-28 rounded-lg'
						/>
					))}
				</div> */
}
