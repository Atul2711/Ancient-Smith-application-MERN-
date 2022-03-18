import React, { useState,useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { Context } from '../context/Context';

import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles';
import { useLocation, useNavigate,Link } from 'react-router-dom';
import { data } from './Data/NavbarData';

function Navbar() {

	const img={
	width: "40px",
	height: "40px",
	borderRadius: "50%",
	objectFit:"cover",
	cursor: "pointer"
	}

		const { user, dispatch } = useContext(Context);
		const PF = "http://localhost:5000/images/"
	  
		const handleLogout = () => {
		  dispatch({ type: "LOGOUT" });
		};

  const [show,setShow]=useState(false);

  let history=useNavigate();
  let location=useLocation();

  const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/'+{to}) {
			scrollTo(id);
		}

		history.push(to);
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						{/* <NavIcon src="./assets/logo.png" alt="logo" /> */}
						Ancient Smith
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
							<Link to={`${el.to}`} className="link">
							<NavLinks>
									{el.text}
								</NavLinks>
							</Link>

							</NavItem>
						))}

						<NavItem>
						
            			<Link className="link" to="/compose">
								<NavLinks>
									Write
								</NavLinks>
            			</Link>
        
						</NavItem>
         			 
			<NavItem>
				{user?(
					<Link className="link" to="/profile">
								<NavLinks>
								<img style={img} src={PF+user.profilepicture} alt="Profile" />
								</NavLinks>
            			</Link>
				):(
					<Link className="link" to="/register">
								<NavLinks>
									Signup
								</NavLinks>
            			</Link>
				)
				}
			</NavItem>
			{user && <NavItem >
								<NavLinks onClick={handleLogout}>
									Logout
								</NavLinks>
		  			</NavItem>}



					</NavMenu>
					
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;