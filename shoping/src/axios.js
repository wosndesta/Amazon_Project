import axios from "axios";

const instance = axios.create({
	// THE API (cloud function) URL
	baseURL: "https://us-central1-clone-9e1e3.cloudfunctions.net/api",
});

export default instance;


