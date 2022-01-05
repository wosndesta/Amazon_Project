import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
			<div className="home">
				<div className="home__container">
					<img
						className="home__image"
						src="https://m.media-amazon.com/images/I/61FkG0lVNdL._SX3000_.jpg"
						alt=""
					/>
					<div className="home__row">
						<Product
							image="https://m.media-amazon.com/images/I/61y46d2qEPL._AC_SX425_.jpg"
							id="12321341"
							title=" The 360° Mirror - 3 Way Mirror for Self Hair Cutting with Height Adjustable Telescoping Hooks"
							dollar={"$"}
							price={69.45}
							rating={3}
						/>
						<Product
							image="https://images-na.ssl-images-amazon.com/images/I/411y5UdVmvL._AC_UL450_SR450,320_.jpg"
							id="878675434"
							title="Fire TV Stick 4K streaming device with latest Alexa Voice Remote (includes TV controls), Dolby Vision"
							dollar={"$"}
							price={47.99}
							rating={5}
						/>
						<Product
							image="https://images-na.ssl-images-amazon.com/images/I/61NGnpjoRDL._AC_UL450_SR450,320_.jpg"
							id="00983456"
							title="2021 Apple 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray"
							dollar={"$"}
							price={340}
							rating={4}
						/>
						<Product
							image="https://m.media-amazon.com/images/I/61AI24Sv9ML._AC_UY395_.jpg"
							id="12321341"
							title="CHAULRI Infinity Earrings AAA Quality Birthday Anniversary Jewelry Gifts for Women"
							dollar={"$"}
							price={280}
							rating={4}
						/>
					</div>
					<div className="home__row">
						<Product
							image="//cdn.shopify.com/s/files/1/0494/7777/9613/products/3in1_fd508f96-aaa2-4b13-b6ba-2873bcb678e3.jpg?v=1609809022"
							id="456547909"
							title="Ethiopian Organic Premium Coffee, 100% Arabica Coffee 2(12Oz.) - Limu Light Roast 2(12Oz.) - Limu Medium Roast  2(12Oz.) - Sidamo Green Beans "
							dollar={"$"}
							price={25.99}
							rating={5}
						/>
						<Product
							image="https://m.media-amazon.com/images/I/718XeEwsvsL._AC_SY450_.jpg"
							id="12321341"
							title="Hathaway Spartan 6-Ft Pool & Table Tennis Multigame Table for Family Recreation Game Rooms with Red Felt Playing Surface."
							dollar={"$"}
							price={11.96}
							rating={4}
						/>
						<Product
							image="https://m.media-amazon.com/images/I/713qhtEOq5L._SY355_.jpg"
							id="12345678"
							title="Ring Stick Up Cam Battery HD security camera with custom privacy controls, Simple setup, Works with Alexa - Black"
							dollar={"$"}
							price={11.96}
							rating={5}
						/>
					</div>
					<div className="home__row discover">
						<img
							src="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/4809a538-1d98-4f36-9d4c-3ad65003073a.jpg "
							// price={11.96}
							rating={0}
						/>
					</div>
					<div className="home__row">
						<Product
							image="https://m.media-amazon.com/images/I/61K+PRZ1MiL._AC_UL320_.jpg"
							id="3245789"
							title=" Canada Goose Carson Down Parka  "
							price={1196}
							rating={5}
						/>
						<Product
							image="https://m.media-amazon.com/images/I/71vz+dj2PPL._AC_SX425_.jpg"
							id="98712098"
							title=" 2020 Newest HP Envy 2-in-1 Laptop, 15.6 IPS FHD Touch Screen, Backlit Keyboard, Amazon Alexa, Windows 10, Black"
							price={1169.99}
							rating={5}
						/>
						<Product
							image="https://m.media-amazon.com/images/I/812wiz16nlL._AC_SX450_.jpg"
							id="56720098"
							title="TOYMANY 8PCS Merino Sheep Figures Farm Animal Toy Figurines - Plastic Forest Animal Figurines for Kids Boys Girls Age 3-5 6-12"
							price={1098}
							rating={4}
						/>
						<Product
							image="https://m.media-amazon.com/images/I/81UH+te8rNL._AC_SY450_.jpg"
							id="546544677"
							title="Sony X85J 65 Inch TV: 4K Ultra HD LED Smart Google TV with Native 120HZ Refresh Rate"
							price={11.66}
							rating={3}
						/>
					</div>
				</div>
			</div>
		);
}

export default Home;
