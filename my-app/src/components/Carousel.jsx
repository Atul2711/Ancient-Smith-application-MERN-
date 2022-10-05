import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from './Data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../globalStyle';
import { Link } from "react-router-dom";
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyle';

const Carousel = (props) => {
	const [sliderRef, setSliderRef] = useState(null);
	const PF = "http://localhost:5000/api/images/";
	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
					{props.title}
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>

			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{props.posts.map((el, index) => (
					<ImageWrapper key={index}>
					{el.photo &&(<CarouselImage src={el.photo} />)}
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="0.8rem" margin="0.4rem 0 0" weight="bold">
							Created at: {new Date(el.createdAt).toDateString()}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.content.substr(0,100)}
						</TextWrapper>
						<Link to={`/post/${el._id}`}>
						<CardButton>Read More</CardButton>
						</Link>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;
