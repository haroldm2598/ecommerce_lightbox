import { createSlice } from '@reduxjs/toolkit';

import ImgThumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import ImgThumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import ImgThumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import ImgThumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';

import ImgActual1 from '../../assets/images/image-product-1.jpg';
import ImgActual2 from '../../assets/images/image-product-2.jpg';
import ImgActual3 from '../../assets/images/image-product-3.jpg';
import ImgActual4 from '../../assets/images/image-product-4.jpg';

const initialState = {
	navbarLinks: ['Collections', 'Men', 'Women', 'About', 'Contact'],
	productItem: [
		{
			id: 1,
			image: ImgThumbnail1,
			company: 'Sneaker Company',
			title: 'Fall Limited Edition Sneakers',
			description:
				'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
			price: 125,
			discount: 50,
			originalPrice: 250,
			itemCount: 1
		}
	],
	productThumb: [
		{ id: 'slide', thumbnail: ImgThumbnail1, actual: ImgActual1 },
		{ id: 'slide', thumbnail: ImgThumbnail2, actual: ImgActual2 },
		{ id: 'slide', thumbnail: ImgThumbnail3, actual: ImgActual3 },
		{ id: 'slide', thumbnail: ImgThumbnail4, actual: ImgActual4 }
	],
	productTotal: [],
	price: 125,
	priceAdd: 125,
	previousBtn: '',
	nextBtn: ''
};

const lightboxSlice = createSlice({
	name: 'lightbox',
	initialState,
	reducers: {
		increment: (state) => {
			state.productItem[0].itemCount += 1;
			state.productItem[0].price += state.priceAdd;
		},
		decrement: (state) => {
			if (state.productItem[0].itemCount <= 1) {
				state.productItem[0].itemCount = 1;
				state.productItem[0].price = state.priceAdd;
			} else {
				state.productItem[0].itemCount -= 1;
				state.productItem[0].price -= state.priceAdd;
			}
		},
		handleAddProduct: (state, action) => {
			state.productTotal.push(action.payload);
		},
		handleDeleteProduct: (state, action) => {
			state.productTotal = state.productTotal.filter(
				(item) => item?.id !== action.payload.id
			);
		},
		handleChangeBtn: (state, action) => {
			switch (action.payload) {
				case 0:
					state.previousBtn = 'slide3';
					state.nextBtn = 'slide1';
					break;
				case 1:
					state.previousBtn = 'slide0';
					state.nextBtn = 'slide2';
					break;
				case 2:
					state.previousBtn = 'slide1';
					state.nextBtn = 'slide3';
					break;
				case 3:
					state.previousBtn = 'slide2';
					state.nextBtn = 'slide0';
					break;
				default:
					console.log('not found');
					break;
			}
		}
	}
});

export const {
	increment,
	decrement,
	handleAddProduct,
	handleDeleteProduct,
	handleChangeBtn
} = lightboxSlice.actions;
export default lightboxSlice.reducer;
