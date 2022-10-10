declare type Vehicles = "car";
declare type Models = {
	vehicle: Vehicles;
	brand: string;
};
export declare const brands: (vehicle: Vehicles) => Promise<string[]>;
export declare const models: ({ vehicle, brand }: Models) => Promise<string[]>;
export {};
