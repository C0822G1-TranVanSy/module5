import {Component, Input, OnInit, Output} from '@angular/core';
import {Facility} from '../../../model/facility';
import {RentType} from '../../../model/rent-type';
import {FacilityType} from '../../../model/facility-type';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  @Input() facility: Facility = {
    id: 0,
    name: '',
    area: 0,
    cost: 0,
    maxPeople: 0,
    rentType: {id: 0, name: ''},
    facilityType: {id: 1, name: ''},
    standardRoom: '',
    descriptionOtherConvenience: '',
    poolArea: 0,
    numberOfFloors: 0,
    facilityFree: ''
  };
  rentTypeList: RentType[] = [
    {
      id: 1,
      name: 'ngày'
    },
    {
      id: 2,
      name: 'tháng'
    },
    {
      id: 3,
      name: 'năm'
    },
    {
      id: 4,
      name: 'giờ'
    },
  ];
  facilityTypeList: FacilityType[] = [
    {
      id: 1,
      name: 'Villa'
    },
    {
      id: 2,
      name: 'House'
    },
    {
      id: 3,
      name: 'Room'
    }
  ];

  facilityList: Facility[] = [
    {
      id: 1,
      name: 'Villa Beach Front',
      area: 25000,
      cost: 1000000,
      maxPeople: 10,
      rentType: {id: 1, name: 'ngày'},
      facilityType: {id: 1, name: 'Villa'},
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 500,
      numberOfFloors: 4,
      facilityFree: null
    },
    {
      id: 2,
      name: 'House Princess 01',
      area: 14000,
      cost: 5000000,
      maxPeople: 7,
      rentType: {id: 1, name: 'giờ'},
      facilityType: {id: 1, name: 'House'},
      standardRoom: 'house',
      descriptionOtherConvenience: 'Có thêm bếp nướng',
      poolArea: null,
      numberOfFloors: 3,
      facilityFree: null
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  getFacilityEdit(item: Facility) {
    this.facility = item;
  }

  delete(id: number) {
    for (let i = 0; i < this.facilityList.length ; i++) {
      if (id === this.facilityList[i].id) {
        this.facilityList.splice(i, 1);
      }
    }
  }
}
