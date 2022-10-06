import { api } from "./services/api";

type Vehicles = "car";

type Models = {
	vehicle: Vehicles;
	brand: string;
};

export const brands = async (vehicle: Vehicles): Promise<string[]> => {
	const url = `/brands/${vehicle}`;

	const response = await api.get(url);

	return response.data;
};

export const models = async ({ vehicle, brand }: Models): Promise<string[]> => {
	const url = `/brands/${vehicle}/${brand}`;

	const response = await api.get(url);

	return response.data;
};
