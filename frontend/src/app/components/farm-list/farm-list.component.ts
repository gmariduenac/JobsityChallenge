import { Component, Host, HostBinding, OnInit } from '@angular/core';

import { FarmsService } from '../../services/farms.service'
import { PondsService } from '../../services/ponds.service'

@Component({
  selector: 'app-farm-list',
  templateUrl: './farm-list.component.html',
  styleUrls: ['./farm-list.component.css']
})
export class FarmListComponent implements OnInit {

  @HostBinding('class') classes='row'

  farms: any = [];

  constructor(private farmsService: FarmsService, private pondsService: PondsService) { 
    this.farms.size=0
  
  }

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

  /*async deleteFarm(id: string){
    if (await this.hasFarmAPond(id)==true){
        this.farmsService.deleteFarm(id).subscribe(
          res=> {
            this.getFarms();
          },
          err => console.log(err)
        )
      }
      else {alert("Farm has ponds assigned. First remove all ponds and then remove the farm")}
  }*/

  deleteFarm(id:string): void{
 
    let result = this.pondsService.getFarmsRelated(id).subscribe(
      res=> { 
          if(Number(res)==0){
              this.farmsService.deleteFarm(id).subscribe(
                res=> {
                        this.getFarms();
                      },
                err => console.log(err)
              )
          }else{ alert("Farm has ponds assigned. First remove all ponds and then remove the farm")}
      },
      err => {
        console.log(err)
      }
    )
  }

}
