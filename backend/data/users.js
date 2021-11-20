import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "Sergio Vazquez",
		email: "sergio@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "Sam Carrillo",
		email: "sam@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

export default users;
