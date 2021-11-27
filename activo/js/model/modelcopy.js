const model = {
	app: {
		loginPage: "Login",
		registerPage: "Register",
		homePage: "Home",
		currentUser: {},
	},
	input: {
		currentGroup: null,
		changeGroupName: "",
		editingGroup: "",
		filtersChecked: [
			{ free: null },
			{ indoors: null },
			{ city: null },
			{ winter: null },
			{ physical: null },
		],
		credentialsLogin: {
			username: "Terje",
			password: "startcoding",
		},
		createNewGroup: {
			name: "Terje",
		},
		addNewMember: {
			name: null,
			age: null,
		},
		credentialsRegister: {
			username: "",
			email: "",
			password: "",
			passwordConfirm: "",
			age: "",
			groups: [],
		},
	},
	data: {
		lastGroupID: 9,
		filterCheckboxes: [
			"Age limit ok?",
			"Free?",
			"Inside?",
			"In the city?",
			"Winter activities?",
			"Physical activities?",
		],
		users: [
			{
				id: 1,
				email: "",
				username: "Terje",
				password: "startcoding",
				age: 50,
				groups: [
					{
						id: 1,
						name: "Group 1",
						members: [
							{ name: "Adrian", age: 30 },
							{ name: "Alexander", age: 29 },
							{ name: "Anders", age: 27 },
						],
					},
					{
						id: 2,
						name: "Group 2",
						members: [
							{ name: "Asbjørn", age: 30 },
							{ name: "Bjørn", age: 29 },
							{ name: "Carina", age: 27 },
						],
					},
					{
						id: 3,
						name: "Group 3",
						members: [
							{ name: "Chris", age: 30 },
							{ name: "Christoffer", age: 29 },
							{ name: "Danica", age: 27 },
							{ name: "Daniel", age: 23 },
							{ name: "Eirik", age: 30 },
						],
					},
				],
			},
			{
				id: 2,
				email: "",
				username: "Bjørnar",
				password: "dontStressMeowth",
				age: 27,
				groups: [
					{
						id: 4,
						name: "Group 1",
						members: [
							{ name: "Bayan", age: 30 },
							{ name: "John Espen", age: 29 },
							{ name: "Kenneth", age: 27 },
							{ name: "Marius", age: 26 },
							{ name: "Tomas", age: 24 },
						],
					},
					{
						id: 5,
						name: "Group 2",
						members: [
							{ name: "Terje", age: 30 },
							{ name: "Elin", age: 29 },
							{ name: "Emil", age: 27 },
							{ name: "Erlend", age: 26 },
						],
					},
					{
						id: 6,
						name: "Group 3",
						members: [
							{ name: "Joakim", age: 30 },
							{ name: "Lise", age: 29 },
							{ name: "Stella", age: 27 },
						],
					},
				],
			},
			{
				id: 3,
				email: "",
				username: "Linn",
				age: 40,
				groups: [],
			},
			{
				id: 4,
				email: "admin@admin.admin",
				username: "admin",
				password: "admin",
				age: 1,
				groups: [
					{
						id: 7,
						name: "Group 1",
						members: [
							{ name: "Joakim", age: 20 },
							{ name: "Kristian", age: 19 },
							{ name: "Stian", age: 24 },
						],
					},
					{
						id: 8,
						name: "Group 2",
						members: [
							{ name: "Marius", age: 27 },
							{ name: "Christian", age: 31 },
						],
					},
					{
						id: 9,
						name: "Group 3",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					,
				],
			},
		],
		// Here comes the 44 activites.
		// if a state is set to null then it can be either or
		activities: [
			{
				name: "Go for a walk",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: null },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Go for a run",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: null },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Go to the gym",
				filters: [
					{ free: false },
					{ indoors: true },
					{ city: true },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Cross-country skiing",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: false },
					{ winter: true },
					{ physical: true },
				],
			},
			{
				name: "Downhill-skiing",
				filters: [
					{ free: false },
					{ indoors: false },
					{ city: false },
					{ winter: true },
					{ physical: true },
				],
			},
			{
				name: "Bikeride",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: null },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Go for a swim",
				filters: [
					{ free: true },
					{ indoors: null },
					{ city: false },
					{ winter: false },
					{ physical: true },
				],
			},
			{
				name: "Ice bath!",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: false },
					{ winter: true },
					{ physical: true },
				],
			},
			{
				name: "Rockclimbing",
				filters: [
					{ free: false },
					{ indoors: null },
					{ city: null },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Play tennis",
				filters: [
					{ free: false },
					{ indoors: null },
					{ city: null },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Go bowling",
				filters: [
					{ free: false },
					{ indoors: true },
					{ city: true },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Go to the cinema",
				filters: [
					{ free: false },
					{ indoors: true },
					{ city: true },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Go to an Escape Room",
				filters: [
					{ free: false },
					{ indoors: true },
					{ city: true },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Play squash",
				filters: [
					{ free: false },
					{ indoors: true },
					{ city: null },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Go to a concert",
				filters: [
					{ free: false },
					{ indoors: null },
					{ city: null },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Play some board games",
				filters: [
					{ free: true },
					{ indoors: true },
					{ city: null },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Play a game of cards",
				filters: [
					{ free: true },
					{ indoors: null },
					{ city: null },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Go on a fishing trip",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: false },
					{ winter: true },
					{ physical: null },
				],
			},
			{
				name: "Go ice-fishing!",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: false },
					{ winter: true },
					{ physical: true },
				],
			},
			{
				name: "Go camping",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: false },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Go to the theatre",
				filters: [
					{ free: false },
					{ indoors: true },
					{ city: true },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Play golf",
				filters: [
					{ free: false },
					{ indoors: false },
					{ city: false },
					{ winter: false },
					{ physical: true },
				],
			},
			{
				name: "Go play minigolf",
				filters: [
					{ free: false },
					{ indoors: null },
					{ city: true },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Go on a road-trip",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: null },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Go to the beach",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: null },
					{ winter: false },
					{ physical: false },
				],
			},
			{
				name: "Go ice skating",
				filters: [
					{ free: null },
					{ indoors: false },
					{ city: null },
					{ winter: true },
					{ physical: true },
				],
			},
			{
				name: "Grab something to eat",
				filters: [
					{ free: false },
					{ indoors: null },
					{ city: null },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Sing some karaoke",
				filters: [
					{ free: null },
					{ indoors: true },
					{ city: null },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Play paintball",
				filters: [
					{ free: false },
					{ indoors: false },
					{ city: null },
					{ winter: false },
					{ physical: true },
				],
			},
			{
				name: "Play lasertag",
				filters: [
					{ free: false },
					{ indoors: true },
					{ city: true },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Go shopping",
				filters: [
					{ free: false },
					{ indoors: null },
					{ city: true },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Go on a boat ride",
				filters: [
					{ free: null },
					{ indoors: false },
					{ city: false },
					{ winter: false },
					{ physical: false },
				],
			},
			{
				name: "Go to an amusementpark",
				filters: [
					{ free: false },
					{ indoors: false },
					{ city: null },
					{ winter: false },
					{ physical: false },
				],
			},
			{
				name: "Visit a museum",
				filters: [
					{ free: false },
					{ indoors: true },
					{ city: null },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Visit a zoo",
				filters: [
					{ free: false },
					{ indoors: false },
					{ city: null },
					{ winter: false },
					{ physical: false },
				],
			},
			{
				name: "Play shuffleboard",
				filters: [
					{ free: false },
					{ indoors: true },
					{ city: true },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Go rollerblading",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: null },
					{ winter: false },
					{ physical: true },
				],
			},
			{
				name: "Grab a coffee",
				filters: [
					{ free: false },
					{ indoors: null },
					{ city: null },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Go GeoCaching",
				filters: [
					{ free: true },
					{ indoors: false },
					{ city: null },
					{ winter: null },
					{ physical: true },
				],
			},
			{
				name: "Bake something tasty",
				filters: [
					{ free: null },
					{ indoors: true },
					{ city: false },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Paint a picture",
				filters: [
					{ free: null },
					{ indoors: null },
					{ city: false },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Go bungee-jumping",
				filters: [
					{ free: false },
					{ indoors: false },
					{ city: false },
					{ winter: false },
					{ physical: true },
				],
			},
			{
				name: "Play snooker",
				filters: [
					{ free: false },
					{ indoors: true },
					{ city: null },
					{ winter: null },
					{ physical: false },
				],
			},
			{
				name: "Go skydiving!",
				filters: [
					{ free: false },
					{ indoors: false },
					{ city: false },
					{ winter: false },
					{ physical: true },
				],
			},
			{
				name: "Go to a flee-market",
				filters: [
					{ free: null },
					{ indoors: null },
					{ city: null },
					{ winter: null },
					{ physical: false },
				],
			},
		],
	},
};
