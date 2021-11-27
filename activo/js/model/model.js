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
		filtersChecked: [],
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
			groups: [
				{
					id: 5,
					name: "Group 1",
					members: [
						{ name: "Elisabeth", age: 30 },
						{ name: "Emil", age: 29 },
						{ name: "Erik", age: 27 },
						{ name: "Even", age: 26 },
					],
				},
				{
					id: 8,
					name: "Group 2",
					members: [
						{ name: "Flemming", age: 30 },
						{ name: "Geir", age: 29 },
						{ name: "Harald", age: 27 },
					],
				},
				{
					id: 9,
					name: "Group 3",
					members: [
						{ name: "Jonas", age: 30 },
						{ name: "Karsten", age: 29 },
						{ name: "Kasper", age: 27 },
					],
				},
			],
		},
	},
	data: {
		lastGroupID: 23,
		filterCheckboxes: [
			"Age limit",
			"Free",
			"Only inside",
			"In the city",
			"Winter activities",
			"Physical upper body",
			"Physical lower body",
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
				username: "Eskil",
				age: 45,
				groups: [],
			},
			{
				id: 4,
				email: "",
				username: "Linn",
				age: 40,
				groups: [],
			},
			{
				id: 5,
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
			{
				id: 6,
				email: "kri@kri.kri",
				username: "kri",
				password: "kri",
				age: 13,
				groups: [],
			},
		],
		activities: [
			{
				name: "Go for a walk",
				filters: [],
			},
			{
				name: "Go for a run",
				filters: [],
			},
			{
				name: "Go to the gym",
				filters: [],
			},
			{
				name: "Cross-country skiing",
				filters: [],
			},
			{
				name: "Downhill-skiing",
				filters: [],
			},
			{
				name: "Bikeride",
				filters: [],
			},
			{
				name: "Go for a swim",
				filters: [],
			},
			{
				name: "Rockclimbing",
				filters: [],
			},
			{
				name: "Play tennis",
				filters: [],
			},
			{
				name: "Go bowling",
				filters: [],
			},
			{
				name: "Go to the cinema",
				filters: [],
			},
			{
				name: "Go to an Escape Room",
				filters: [],
			},
			{
				name: "Play squash",
				filters: [],
			},
			{
				name: "Go to a concert",
				filters: [],
			},
			{
				name: "Play some board games",
				filters: [],
			},
			{
				name: "Play a game of cards",
				filters: [],
			},
			{
				name: "Go on a fishing trip",
				filters: [],
			},
			{
				name: "Go camping",
				filters: [],
			},
			{
				name: "Go to the theatre",
				filters: [],
			},
			{
				name: "Play golf",
				filters: [],
			},
			{
				name: "Go play minigolf",
				filters: [],
			},
			{
				name: "Go on a road-trip",
				filters: [],
			},
			{
				name: "Go to the beach",
				filters: [],
			},
			{
				name: "Go ice skating",
				filters: [],
			},
			{
				name: "Grab something to eat",
				filters: [],
			},
			{
				name: "Sing some karaoke",
				filters: [],
			},
			{
				name: "Play paintball",
				filters: [],
			},
			{
				name: "Play lasertag",
				filters: [],
			},
			{
				name: "Go shopping",
				filters: [],
			},
			{
				name: "Go on a boat ride",
				filters: [],
			},
			{
				name: "Go to an amusementpark",
				filters: [],
			},
			{
				name: "Visit a museum",
				filters: [],
			},
			{
				name: "Visit a zoo",
				filters: [],
			},
			{
				name: "Play shuffleboard",
				filters: [],
			},
			{
				name: "Go to the carnival",
				filters: [],
			},
			{
				name: "Go rollerblading",
				filters: [],
			},
			{
				name: "Grab a coffee",
				filters: [],
			},
			{
				name: "Go GeoCaching",
				filters: [],
			},
			{
				name: "Bake something tasty",
				filters: [],
			},
			{
				name: "Paint a picture",
				filters: [],
			},
			{
				name: "Go bungee-jumping",
				filters: [],
			},
			{
				name: "Play snooker",
				filters: [],
			},
			{
				name: "Go skydiving!",
				filters: [],
			},
			{
				name: "Go to a flee-market",
				filters: [],
			},
		],
	},
};
