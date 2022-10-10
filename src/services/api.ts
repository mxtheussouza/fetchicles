import axios from "axios";

export const api = axios.create({
	baseURL: "https://fetchicles-api.onrender.com/api",
});
