import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { data, sliderSettings } from './Data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../globalStyle';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyle';

const Carousel = (props) => {
	const [sliderRef, setSliderRef] = useState(null);

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
				{data.map((el, index) => (
					<ImageWrapper key={index}>
						<CarouselImage src={el.image} />
						<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
							{el.title}
						</TextWrapper>
						<TextWrapper size="0.9rem" margin="0.7rem" color="#4f4f4f">
							{el.description}
						</TextWrapper>
						<CardButton>Read More</CardButton>
					</ImageWrapper>
				))}
			</ReviewSlider>
		</Section>
	);
};

export default Carousel;