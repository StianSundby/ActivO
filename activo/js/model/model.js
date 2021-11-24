let appDiv = document.getElementById("app");

const model = {
	app: {
		loginPage: "Login",
		registerPage: "Register",
		homePage: "Home",
		currentUser: {},
	},
	input: {
		filtersChecked: [],
		credentialsLogin: {
			username: "Terje",
			password: "startcoding",
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
						id: 4,
						name: "Group 1",
						members: [
							{ name: "Adrian", age: 30 },
							{ name: "Alexander", age: 29 },
							{ name: "Anders", age: 27 },
						],
					},
					{
						id: 6,
						name: "Group 2",
						members: [
							{ name: "Asbjørn", age: 30 },
							{ name: "Bjørn", age: 29 },
							{ name: "Carina", age: 27 },
						],
					},
					{
						id: 7,
						name: "Group 3",
						members: [
							{ name: "Chris", age: 30 },
							{ name: "Christoffer", age: 29 },
							{ name: "Danica", age: 27 },
							{ name: "Daniel", age: 23 },
							{ name: "Eirik", age: 30 },
						],
					},
					{
						id: 10,
						name: "Group 4",
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
						id: 5,
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
						id: 8,
						name: "Group 2",
						members: [
							{ name: "Terje", age: 30 },
							{ name: "Elin", age: 29 },
							{ name: "Emil", age: 27 },
							{ name: "Erlend", age: 26 },
						],
					},
					{
						id: 9,
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
						id: 1,
						name: "Group 1",
						members: [
							{ name: "Joakim", age: 20 },
							{ name: "Kristian", age: 19 },
							{ name: "Stian", age: 24 },
						],
					},
					{
						id: 2,
						name: "Group 2",
						members: [
							{ name: "Marius", age: 27 },
							{ name: "Christian", age: 31 },
						],
					},
					{
						id: 12,
						name: "Group 3",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 13,
						name: "Group 4",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 14,
						name: "Group 5",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 15,
						name: "Group 6",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 16,
						name: "Group 7",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 17,
						name: "Group 8",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 18,
						name: "Group 9",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 19,
						name: "Group 10",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 20,
						name: "Group 11",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 21,
						name: "Group 12",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 22,
						name: "Group 13",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
					{
						id: 23,
						name: "Group 14",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
						],
					},
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
				filters: ["physicalLowerbody"],
			},
			{
				name: "Go for a run",
				filters: ["physicalLowerbody"],
			},
			{
				name: "Go to the gym",
				filters: ["physicalLowerbody", "physicalLowerbody", "indoors"],
			},
			{
				name: "Cross-country skiing",
				filters: ["winter", "physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Downhill-skiing",
				filters: ["cost", "winter", "physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Bikeride",
				filters: ["physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Go for a swim",
				filters: ["physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Rockclimbing",
				filters: ["cost", "physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Play tennis",
				filters: ["cost", "physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Go bowling",
				filters: ["cost", "indoors", "physicalUpperbody"],
			},
			{
				name: "Go to the cinema",
				filters: ["cost", "indoors", "city"],
			},
			{
				name: "Go to an Escape Room",
				filters: ["true", "indoors", "city", "physicalUpperbody", "ageRestriction"],
			},
			{
				name: "Play squash",
				filters: ["cost", "city", "physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Go to a concert",
				filters: ["cost", "city", "ageRestriction"],
			},
			{
				name: "Play some board games",
				filters: ["indoors", "physicalUpperbody"],
			},
			{
				name: "Play a game of cards",
				filters: ["indoors", "physicalUpperbody"],
			},
			{
				name: "Go on a fishing trip",
				filters: ["physicalUpperbody"],
			},
			{
				name: "Go camping",
				filters: [],
			},
			{
				name: "Go to the theatre",
				filters: ["cost", "indoors", "city"],
			},
			{
				name: "Play golf",
				filters: ["cost", "physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Go play minigolf",
				filters: ["cost", "city", "physicalUpperbody", "physicalLowerbody"],
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
				name: "Go ice-skating",
				filter: ["cost", "winter", "physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Grab something to eat",
				filters: ["cost"],
			},
			{
				name: "Sing some karaoke",
				filters: ["cost", "indoors", "city"],
			},
			{
				name: "Play paintball",
				filters: ["cost", "physicalUpperbody", "physicalLowerbody", "ageRestricton"],
			},
			{
				name: "Play lasertag",
				filters: ["cost", "physicalUpperbody", "physicalLowerbody", "ageRestriction"],
			},
			{
				name: "Go shopping",
				filters: ["cost", "city", "physicalLowerbody"],
			},
			{
				name: "Go on a boat ride",
				filters: [],
			},
			{
				name: "Go to an amusementpark",
				filters: ["cost", "physicalLowerbody"],
			},
			{
				name: "Visit a museum",
				filters: ["cost", "indoors", "city", "physicalLowerbody"],
			},
			{
				name: "Visit a zoo",
				filters: ["cost", "physicalLowerbody"],
			},
			{
				name: "Play shuffleboard",
				filters: ["cost", "indoors", "city", "physicalUpperbody"],
			},
			{
				name: "Go to the carnival",
				filters: ["cost", "city"],
			},
			{
				name: "Go rollerblading",
				filters: ["physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Grab a coffee",
				filters: ["cost", "indoors", "city"],
			},
			{
				name: "Go GeoCaching",
				filters: ["physicalUpperbody", "physicalLowerbody"],
			},
			{
				name: "Bake something tasty",
				filters: ["indoors", "physicalUpperbody"],
			},
			{
				name: "Paint a picture",
				filters: ["cost", "true", "physicalUpperbody"],
			},
			{
				name: "Go bungee-jumping",
				filters: ["cost", "physicalUpperbody", "physicalLowerbody", "ageRestriction"],
			},
			{
				name: "Play snooker",
				filters: ["cost", "indoors", "physicalUpperbody"],
			},
			{
				name: "Go skydiving!",
				filters: ["cost", "physicalUpperbody", "physicalLowerbody", "ageRestriction"],
			},
			{
				name: "Go to a flee-market",
				filters: ["cost"],
			},
		],
	},
};
