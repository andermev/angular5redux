import { Page } from '../pagination/pagination/entities/page.entity';
import { Device } from './device';

export interface ResponseService {
    page: Page;
    devices: any;
}
