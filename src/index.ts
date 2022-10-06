import { api } from "./services/api";

export const brands = async (vehicle: string) => {
	const url = `/brands/${vehicle}`;

	const response = await api.get(url);

	return response.data;
};

export const models = async (vehicle: string, brand: string) => {
	const url = `/brands/${vehicle}/${brand}`;

	const response = await api.get(url);

	return response.data;
};
