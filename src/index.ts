import axios from "axios";

export const brands = async (vehicle: string) => {
	const url = `http://127.0.0.1:5151/api/brands/${vehicle}`;

	const response = await axios.get(url);

	return response.data;
};

brands("car").then(data => console.log(data));
