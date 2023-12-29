import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

function ImageCarousel({ data }) {
	return (
		<SlideshowLightbox
			className='mt-10 grid grid-cols-4 justify-items-stretch gap-10'
			showThumbnails={true}
		>
			{data?.map((item, index) => (
				<img
					key={index}
					src={item.actual}
					alt='sneaker'
					className='h-28 rounded-lg'
				/>
			))}
		</SlideshowLightbox>
	);
}

export default ImageCarousel;
