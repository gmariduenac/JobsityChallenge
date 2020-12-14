import { Component, OnInit } from '@angular/core';

import { FarmsService } from '../../services/farms.service'

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {

  farms: any = [];

  constructor(private farmsService: FarmsService) { }

  ngOnInit(): void {
    this.farmsService.getListFarms().subscribe(
      res => {
      this.farms = res;
      },
      err => console.error(err)
    )
  }

}
