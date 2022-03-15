export const data = [

	{
		title: 'Our security ',
		description: 'Learn more about our security systems to make sure your data is always safe',
		image: './assets/2.jpeg',
	},
	{
		title: 'Our Team',
		description: 'Our team consists of the best experts in the industry, learn about them',
		image: './assets/2.jpeg',
	},
	{
		title: 'Our servers',
		description: 'Find more about hardware and software used for your service',
		image: './assets/2.jpeg',
	},
	{
		title: 'Our top clients',
		description: 'We have provided services to top clients in tech industry',
		image: './assets/2.jpeg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};