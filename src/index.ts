import fetch from "node-fetch";

export const brands = async (vehicle: string) => {
	const url = `http://127.0.0.1:5151/api/brands/${vehicle}`;

	const response = await fetch(url);

	const data = await response.json();

	return data;
};

console.log(brands("car"));
