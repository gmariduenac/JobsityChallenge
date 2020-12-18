import { Component, HostBinding, OnInit } from '@angular/core';
import { Farm } from 'src/app/models/farm';
import { FarmsService } from '../../services/farms.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.css']
})
export class FarmFormComponent implements OnInit {

  @HostBinding('class') classes='row';

  farm: Farm = {
    id: 0,
    name: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor( private farmsService: FarmsService, private router: Router, private activatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.farmsService.getFarm(params.id)
      .subscribe(
        res=>{
          console.log(res)
          this.farm=res
          this.edit=true;
        },
        err=>console.log(err)
      )
    }
    console.log(params);
  }

  saveNewFarm(){
    //console.log(this.farm);
    delete this.farm.id;
    delete this.farm.created_at;
    this.farmsService.saveFarm(this.farm)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/farms']);
        },
        err => console.error(err) 
      )
  }

  updateFarm(){
    delete this.farm.created_at;
    //console.log(this.farm)
    this.farmsService.updateFarm(this.farm.id, this.farm)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/farms']);
      },
      err => console.error(err) 
    )
  }

}
