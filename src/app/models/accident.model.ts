import { Injury } from './injury.modal';
import { Location } from './location.modal';

export interface Accident {
    eventTime: string;
    mda: string;
    gps: Location;
    injuries: Array<Injury>;
    isTreated: boolean;
    kinematic: string;
    mechanism: string;
}