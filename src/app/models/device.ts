export interface Device {
    hwId: string;
    name: string;
    state: string;
    img: string;
}

export interface DeviceResult {
    page: number;
    total_results: number;
    total_pages: number;
    results: Device[];
}
