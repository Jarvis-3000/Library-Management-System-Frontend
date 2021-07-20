const books = [
	{
		name: 'The End',
		url: 'https://www.skipprichard.com/wp-content/uploads/2014/12/9780803737396.jpg',
		description:
			'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.',
		author: 'Satish Gaud',
		categories: ['Love', 'Technologoy', 'Fiction', 'Education'],
		type: 'PDF',
		ISBN: 'FFF001',
		availability: 'Coming Soon',
		edition: '5',
		condition: 'normal',
		issued: false,
		reviews: [
			{
				user: 'Satish Gaud',
				comment: 'A book is a unique string of words, as good as its bits.',
			},
		],
	},
	{
		name: 'The Wolf Border',
		url: 'http://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-2015-/large/wolfbordercover.jpg?1384968217',
		description:
			'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.',
		author: 'Satish Gaud',
		categories: ['Love', 'Technologoy', 'Fiction', 'Education'],
		type: 'PDF',
		ISBN: 'FFF001',
		availability: 'Coming Soon',
		edition: '5',
		condition: 'normal',
		issued: false,
		reviews: [
			{
				user: 'Satish Gaud',
				comment: 'A book is a unique string of words, as good as its bits.',
			},
		],
	},
	{
		name: 'The Hobbit',
		url: 'http://www.bestchoicereviews.org/wp-content/uploads/2015/01/The-Hobbit-or-There-and-Back-Again-childrens-books.jpg',
		description:
			'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.',
		author: 'Satish Gaud',
		categories: ['Love', 'Technologoy', 'Fiction', 'Education'],
		type: 'PDF',
		ISBN: 'FFF001',
		availability: 'Coming Soon',
		edition: '5',
		condition: 'normal',
		issued: false,
		reviews: [
			{
				user: 'Satish Gaud',
				comment: 'A book is a unique string of words, as good as its bits.',
			},
		],
	},
	{
		name: 'Book Of Numbers',
		url: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/best-book-covers-2015-/large/bookofnumberscover.jpg?1384968217',
		description:
			'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.',
		author: 'Satish Gaud',
		categories: ['Love', 'Technologoy', 'Fiction', 'Education'],
		type: 'PDF',
		ISBN: 'FFF001',
		availability: 'Coming Soon',
		edition: '5',
		condition: 'normal',
		issued: false,
		reviews: [
			{
				user: 'Satish Gaud',
				comment: 'A book is a unique string of words, as good as its bits.',
			},
		],
	},
	{
		name: 'Click Millionaires',
		url: 'https://cdn.lifehack.org/wp-content/uploads/2014/10/click-millionaires1.jpg',
		description:
			'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.',
		author: 'Satish Gaud',
		categories: ['Love', 'Technologoy', 'Fiction', 'Education'],
		type: 'PDF',
		ISBN: 'FFF001',
		availability: 'Coming Soon',
		edition: '5',
		condition: 'normal',
		issued: false,
		reviews: [
			{
				user: 'Satish Gaud',
				comment: 'A book is a unique string of words, as good as its bits.',
			},
		],
	},
	{
		name: 'Rich Dad Poor Dad',
		url: 'https://www.skipprichard.com/wp-content/uploads/2014/12/9780803737396.jpg',
		description:
			'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.',
		author: 'Satish Gaud',
		categories: ['Love', 'Technologoy', 'Fiction', 'Education'],
		type: 'PDF',
		ISBN: 'FFF001',
		availability: 'Coming Soon',
		edition: '5',
		condition: 'normal',
		issued: false,
		reviews: [
			{
				user: 'Satish Gaud',
				comment: 'A book is a unique string of words, as good as its bits.',
			},
		],
	},
	{
		name: 'Bhagvad Geeta',
		url: 'https://wisdombooksofindia.com/wp-content/uploads/2019/05/Eng-cvr-Bhagavad-gita.jpg',
		description:
			'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.',
		author: 'Satish Gaud',
		categories: ['Love', 'Technologoy', 'Fiction', 'Education'],
		type: 'PDF',
		ISBN: 'FFF001',
		availability: 'Coming Soon',
		edition: '5',
		condition: 'normal',
		issued: false,
		reviews: [
			{
				user: 'Satish Gaud',
				comment: 'A book is a unique string of words, as good as its bits.',
			},
		],
	},
	{
		name: 'Programming In C',
		url: 'https://donkeytime.org/img/best-c-programming-book-pdf-free-download-4.jpg',
		description:
			'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.',
		author: 'Satish Gaud',
		categories: ['Love', 'Technologoy', 'Fiction', 'Education'],
		type: 'PDF',
		ISBN: 'FFF001',
		availability: 'Coming Soon',
		edition: '5',
		condition: 'normal',
		issued: false,
		reviews: [
			{
				user: 'Satish Gaud',
				comment: 'A book is a unique string of words, as good as its bits.',
			},
		],
	},
	{
		name: 'Python Programming',
		url: 'https://images-na.ssl-images-amazon.com/images/I/51IyLAfOVzL.jpg',
		description:
			'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.',
		author: 'Satish Gaud',
		categories: ['Love', 'Technologoy', 'Fiction', 'Education'],
		type: 'PDF',
		ISBN: 'FFF001',
		availability: 'Coming Soon',
		edition: '5',
		condition: 'normal',
		issued: false,
		reviews: [
			{
				user: 'Satish Gaud',
				comment: 'A book is a unique string of words, as good as its bits.',
			},
		],
	},
	{
		name: 'Two States',
		url: 'https://rukminim1.flixcart.com/image/1408/1408/book/5/2/0/2-states-original-imaeyg6ywfrehnhz.jpeg?q=90',
		description:
			'A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.',
		author: 'Satish Gaud',
		categories: ['Love', 'Technologoy', 'Fiction', 'Education'],
		type: 'PDF',
		ISBN: 'FFF001',
		availability: 'Coming Soon',
		edition: '5',
		condition: 'normal',
		issued: false,
		reviews: [
			{
				user: 'Satish Gaud',
				comment: 'A book is a unique string of words, as good as its bits.',
			},
		],
	},
]

export default books
