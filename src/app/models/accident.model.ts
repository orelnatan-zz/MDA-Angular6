import { Injury } from './injury.modal';
import { Location } from './location.modal';

export interface Accident {
    EventTime: string;
    MDA: string;
    gps: Location;
    injuries: Array<Injury>;
    isTreated: boolean;
    kinematic: string;
    mechanism: string;
}