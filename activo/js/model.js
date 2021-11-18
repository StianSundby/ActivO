let appDiv = document.getElementById("app");

const model = {
	app: {
		loginPage: "Login",
		registerPage: "Register",
		homePage: "Home",
		currentUser: {},
	},
	input: {
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
					{
						id: 24,
						name: "Group 15",
						members: [
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
							{ name: "Andreas", age: 30 },
							{ name: "Kristoffer", age: 29 },
							{ name: "Mikkel", age: 2021 },
							{ name: "Stigh", age: 26 },
							{ name: "Vanja", age: 24 },
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
		filters: [
			{ cost: true },
			{ indoors: false },
			{ city: false },
			{ Winter: false },
			{ physicalUpperbody: false },
			{ physicalLowerbody: false },
			{ ageRestriction: false },
		],
		activities: [
			{
				name: "Go for a walk",
				cost: false,
				indoors: false,
				physicalUpperBody: false,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Go for a run",
				cost: false,
				indoors: false,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Go to the gym",
				cost: false,
				indoors: true,
				city: true,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Cross-country skiing",
				cost: false,
				indoors: false,
				city: false,
				winter: true,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Downhill-skiing",
				cost: true,
				indoors: false,
				city: false,
				winter: true,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: 60,
			},
			{
				name: "Bikeride",
				cost: false,
				indoors: false,
				winter: false,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Go for a swim",
				cost: false,
				city: false,
				winter: false,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: 90,
			},
			{
				name: "Rockclimbing",
				cost: true,
				indoors: true,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Play tennis",
				cost: true,
				city: false,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Go bowling",
				cost: true,
				indoors: true,
				city: true,
				physicalUpperBody: true,
				physicalLowerbody: false,
				ageRestriction: 90,
			},
			{
				name: "Go to the cinema",
				cost: true,
				indoors: true,
				city: true,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Go to an Escape Room",
				cost: true,
				indoors: true,
				city: true,
				physicalUpperBody: false,
				physicalLowerbody: true,
				ageRestriction: 60,
			},
			{
				name: "Play squash",
				cost: true,
				city: true,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: 80,
			},
			{
				name: "Go to a concert",
				cost: true,
				indoors: false,
				city: true,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: 70,
			},
			{
				name: "Play some board games",
				cost: false,
				indoors: true,
				physicalUpperBody: true,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Play a game of cards",
				cost: false,
				indoors: true,
				city: false,
				physicalUpperBody: true,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Go on a fishing trip",
				cost: false,
				indoors: false,
				city: false,
				physicalUpperBody: true,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Go camping",
				cost: false,
				indoors: false,
				city: false,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Go to the theatre",
				cost: true,
				indoors: true,
				city: true,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Play golf",
				cost: true,
				indoors: false,
				city: false,
				winter: false,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Go play minigolf",
				cost: true,
				indoors: false,
				city: true,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Go on a road-trip",
				cost: false,
				indoors: false,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Go to the beach",
				cost: false,
				indoors: false,
				winter: false,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Go ice-skating",
				cost: true,
				winter: true,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: 90,
			},
			{
				name: "Grab something to eat",
				cost: true,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Sing some karaoke",
				cost: true,
				indoors: true,
				city: true,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Play paintball",
				cost: true,
				indoors: false,
				winter: false,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: 50,
			},
			{
				name: "Play lasertag",
				cost: true,
				indoors: true,
				city: true,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: 40,
			},
			{
				name: "Go shopping",
				cost: true,
				city: true,
				physicalUpperBody: false,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Go on a boat ride",
				cost: false,
				indoors: false,
				city: false,
				winter: false,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Go to an amusementpark",
				cost: true,
				indoors: false,
				city: false,
				physicalUpperBody: false,
				physicalLowerbody: true,
				ageRestriction: 80,
			},
			{
				name: "Visit a museum",
				cost: true,
				indoors: true,
				city: true,
				physicalUpperBody: false,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Visit a zoo",
				cost: true,
				indoors: false,
				city: false,
				winter: false,
				physicalUpperBody: false,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Play shuffleboard",
				cost: true,
				indoors: true,
				city: true,
				physicalUpperBody: true,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Go to the carnival",
				cost: true,
				indoors: false,
				city: true,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: 100,
			},
			{
				name: "Go rollerblading",
				cost: false,
				indoors: false,
				city: false,
				winter: false,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: 70,
			},
			{
				name: "Grab a coffee",
				cost: true,
				indoors: true,
				city: true,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Go GeoCaching",
				cost: false,
				indoors: false,
				city: false,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Bake something tasty",
				cost: false,
				indoors: true,
				city: false,
				physicalUpperBody: true,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Paint a picture",
				cost: true,
				indoors: true,
				city: false,
				physicalUpperBody: true,
				physicalLowerbody: false,
				ageRestriction: false,
			},
			{
				name: "Go bungee-jumping",
				cost: true,
				indoors: false,
				city: false,
				winter: false,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: 60,
			},
			{
				name: "Play snooker",
				cost: true,
				indoors: true,
				city: true,
				winter: true,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: false,
			},
			{
				name: "Go skydiving!",
				cost: true,
				indoors: false,
				city: false,
				winter: false,
				physicalUpperBody: true,
				physicalLowerbody: true,
				ageRestriction: 60,
			},
			{
				name: "Go to a flee-market",
				cost: true,
				physicalUpperBody: false,
				physicalLowerbody: false,
				ageRestriction: false,
			},
		],
	},
};
