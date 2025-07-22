const form = document.querySelector("form");
let nicknameRegex = /^[a-zA-Z0-9_.-]*$/;
let emailRegex = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i;
let passwordRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
let phoneNumberRegex = /^[0-9]{8}$/;
class Users {
	constructor(nickname, email, password, phoneNumber, language) {
		this.nickname = nickname;
		this.email = email;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.language = language;
	}
}

let user = new Users("az", "az@gmail.com", "eerrd", "0678", "English");
console.log(user);

const checkNickname = (nickname) => {
	if (nickname.match(nicknameRegex)) {
	}
};

const options = {
	method: "POST",
	headers: new Headers(),
};

const init = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		pseudo: "Poweramo",
		message: "Yo les gens !",
	}),
	mode: "cors",
};

fetch("./users.json", options)
	.then((res) => res.json())
	.then((data) => console.log(data.));

form.addEventListener("submit", () => {});
