export declare type FetchiclesVehicles = "CAR" | "MOTORCYCLE";
export declare type FetchiclesModels = {
    vehicle: FetchiclesVehicles;
    brand: string;
};
export declare const brands: (vehicle: FetchiclesVehicles) => Promise<string[]>;
export declare const models: ({ vehicle, brand, }: FetchiclesModels) => Promise<string[]>;
