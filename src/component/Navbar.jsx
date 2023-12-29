import { useSelector, useDispatch } from 'react-redux';
import { handleDeleteProduct } from '../action/reducer/lightboxSlice';

import Button from './reusable/Button';

import logo from '../assets/images/logo.svg';
import cart from '../assets/images/icon-cart.svg';
import deleteBtn from '../assets/images/icon-delete.svg';
import menuBtn from '../assets/images/icon-menu.svg';
import avatar from '../assets/images/image-avatar.png';

function Navbar() {
	const { navbarLinks, productTotal } = useSelector(
		(state) => state.lightboxTemplate
	);
	const dispatch = useDispatch();

	return (
		<>
			<section className='max-w-7xl mx-auto p-5 lg:px-0 lg:py-10 flex md:flex-row items-center justify-between md:gap-10'>
				<figure className='flex flex-row items-center gap-5'>
					<div className='drawer block relative z-50 lg:hidden'>
						<input id='my-drawer' type='checkbox' className='drawer-toggle' />
						<div className='drawer-content'>
							<label htmlFor='my-drawer' className='drawer-button'>
								<img src={menuBtn} alt='menu icon' />
							</label>
						</div>
						<div className='drawer-side'>
							<label
								htmlFor='my-drawer'
								aria-label='close sidebar'
								className='drawer-overlay'
							></label>
							<ul className='menu p-4 w-80 min-h-full bg-white text-base-content'>
								{navbarLinks?.map((item, index) => (
									<li key={index} className='navLinks mb-8 font-bold text-lg'>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
					<img src={logo} alt='Logo' />
				</figure>

				<ul className='flex-1 hidden lg:flex items-center gap-5'>
					{navbarLinks?.map((item, index) => (
						<li key={index} className='navLinks navGrow'>
							{item}
						</li>
					))}
				</ul>

				<div className='dropdown dropdown-end flex md:flex-row items-center gap-8'>
					<div className='cursor-pointer'>
						<img tabIndex={0} role='button' src={cart} alt='Cart' />
						<div
							tabIndex={0}
							className='dropdown-content z-[100] menu w-64 mt-4 p-2 [&>*]:my-2 bg-white rounded-box shadow-xl'
						>
							<h1 className='font-bold'>cart</h1>
							<hr />

							{productTotal.length === 0 ? (
								<h1>your cart is empty</h1>
							) : (
								<>
									{productTotal?.map((item, index) => (
										<div
											key={index}
											className='flex flex-row items-center gap-2'
										>
											<img
												src={item.image}
												alt='image'
												className='w-10 rounded-sm'
											/>
											<div className='flex-1 flex flex-col'>
												<h1 className='text-xs'>{item.title}</h1>
												<h1 className='text-xs'>
													$125.00 x {item.itemCount} ${item.price}.00
												</h1>
											</div>
											<img
												src={deleteBtn}
												alt='delete button'
												className='w-4 h-4'
												onClick={() => dispatch(handleDeleteProduct(item))}
											/>
										</div>
									))}

									<Button name='checkout' customStyle='orangeBtn' />
								</>
							)}
						</div>
					</div>

					<figure className='w-10 h-10'>
						<img src={avatar} alt='Avatar' />
					</figure>
				</div>
			</section>

			<hr className='max-w-7xl mx-auto hidden md:block relative z-[0]' />
		</>
	);
}

export default Navbar;
