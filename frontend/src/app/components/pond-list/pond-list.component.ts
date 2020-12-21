import { Component, Host, HostBinding, OnInit } from '@angular/core';

import { PondsService } from '../../services/ponds.service'

@Component({
  selector: 'app-pond-list',
  templateUrl: './pond-list.component.html',
  styleUrls: ['./pond-list.component.css']
})
export class PondListComponent implements OnInit {

  @HostBinding('class') classes='row'

  ponds: any = [];

  constructor(private pondsService: PondsService) { }

  ngOnInit(): void {
    this.getPonds();
  }

  getPonds(){
    this.pondsService.getListPonds().subscribe(
      res => {
        this.ponds = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  deletePond(id: string){
    this.pondsService.deletePond(id).subscribe(
      res=> {
        console.log(res);
        this.getPonds();
      },
      err => console.log(err)
    )
  }

}
