export class Dispenser {
	id 			= 0;
	name 		= '';
	affiliation	= '';
	manager 	: Manager;
	addresses	: Address[];
	volume		= ''; 
}

export class Address {
	street		= '';
	city		= '';
	province	= '';
	postalCode	= '';
}

export class Manager {
	name 	= '';
	title	= '';
	email	= '';
	phone	= '';
}

export const dispensers: Dispenser[] = [
  {
	id: 1,
	name: 'Campus Pharmacy',
	affiliation: 'Independent',
	addresses: [
		{street: '460 St. Davids Rd #9', 
		city: 'St. Catherines', 
		province: 'ON',
		postalCode: ''
		},
	],
	manager: {
		name: 'Rafik Sharobim',
		title: 'Manager',
		phone: '905-688-8800',
		email: 'brockpharmacy@gmail.com​'
	},
	volume: 'Low'
  },
  {
	id: 2,
	name: 'West Lincoln Pharmacy',
	affiliation: 'Pharmasave',
	addresses: [
		{street: '25 - 239 St. Catherines St.', 
		city: 'Smithville', 
		province: 'ON',
		postalCode: ''
	    },
	],
	manager: {
		name: 'Bruce McAlpine',
		title: 'Manager',
		phone: '905-957-5701',
		email: 'westlincolnpharmacy@gmail.com'
	},
	volume: 'Med'
  },
  {
	id: 3,
	name: 'Mapleland IDA Pharmacy',
	affiliation: 'McKesson - Guardian/IDA',
	addresses: [
		{street: '120 Welland Ave. Unit 10B', 
		city: 'St. Catherines', 
		province: 'ON',
		postalCode: ''
		},
	],
	manager: {
		name: 'Vaughan Osgan',
		title: 'Pharmacy Manager',
		phone: '905-641-4440',
		email: 'maplelandpharmacy@yahoo.com'
	},
	volume: 'High'
  },
];

export const volumes = ['Low', 'Med', 'High'];
