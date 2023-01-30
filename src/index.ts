import { api } from "./services/api";

export type FetchiclesVehicles = "CAR" | "MOTORCYCLE";

export type FetchiclesModels = {
	vehicle: FetchiclesVehicles;
	brand: string;
};

export const brands = async (
	vehicle: FetchiclesVehicles,
): Promise<string[]> => {
	const url = `/brands/${vehicle}`;

	const response = await api.get(url);

	return response.data;
};

export const models = async ({
	vehicle,
	brand,
}: FetchiclesModels): Promise<string[]> => {
	const url = `/brands/${vehicle}/${brand}`;

	const response = await api.get(url);

	return response.data;
};
