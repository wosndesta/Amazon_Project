import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Header.css"
import { Link } from 'react-router-dom'
import {useStateValue} from './Stateprovider'


function Header() {

  const [{ basket, user }, dispatch] = useStateValue();


    return (
			<div className="header">
				<Link to="/">
					<img
						className="header__logo"
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					/>
				</Link>
				<h3 className="prime">prime</h3>

				<div className="header__search">
					<input className="header__searchInput" type="text" />
					<SearchIcon className="header__searchIcon" />
				</div>
				<div className="header__nav"></div>
				<div className="header__option">
					<span className="header__optionLineOne">Hello, Wosen</span>
					<span className="header__optionLineTwo">Account & Lists</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">& Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
					<ShoppingCartOutlinedIcon />
					
						<span className="header__optionLineTwo header__basketCount">
							
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		);
}

export default Header
