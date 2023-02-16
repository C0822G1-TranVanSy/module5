import {BenhAn} from './benh-an';

export interface BenhNhan {
  id: number;
  benhAn: BenhAn;
  maBenhNhan: string;
  tenBenhNhan: string;
  ngayNhapVien: string;
  ngayRaVien: string;
  lyDo: string;
  phuongPhap: string;
  bacSi: string;
}
