import {Doctor} from './doctor';

export interface Medical {
  id: number;
  code: string;
  patientName: string;
  startDate: string;
  endDate: string;
  reason: string;
  therapeuticMethod: string;
  doctor: Doctor;
}
