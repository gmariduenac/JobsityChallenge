import { Component, Host, HostBinding, OnInit } from '@angular/core';

import { FarmsService } from '../../services/farms.service'

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {

  @HostBinding('class') classes='row'

  farms: any = [];

  constructor(private farmsService: FarmsService) { }

  ngOnInit(): void {
    this.getFarms();
  }

  getFarms(){
    this.farmsService.getListFarms().subscribe(
      res => {
      this.farms = res;
      },
      err => console.error(err)
    )
  }

  deleteFarm(id: String){
    this.farmsService.deleteFarm(id).subscribe(
      res=> {
        console.log(res);
        this.getFarms();
      },
      err => console.log(err)
    )
  }

  /*editFarm(id: String){
    console.log(id); 
  }*/

}
