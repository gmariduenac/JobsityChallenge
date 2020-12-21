import { Component, HostBinding, OnInit } from '@angular/core';
import { Pond } from 'src/app/models/pond';
import { Farm } from 'src/app/models/farm';
import { PondsService } from '../../services/ponds.service';
import { FarmsService } from '../../services/farms.service';
import { ActivatedRoute, Router } from '@angular/router';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-pond-form',
  templateUrl: './pond-form.component.html',
  styleUrls: ['./pond-form.component.css']
})
export class PondFormComponent implements OnInit {

  @HostBinding('class') classes='row';

  pond: Pond = {
    id: 0,
    name: '',
    size: 0,
    created_at: new Date(),
    id_farm_fk: 0
    
  };

  /*farms: Farm = {
    id: 0,
    name: '',
    description: '',
    image: '',
    created_at: new Date()
  };*/

  farms: any = [];

  edit: boolean = false;

  public currencyMask = createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator: false,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2,
    integerLimit: null,
    requireDecimal: false,
    allowNegative: false,
    allowLeadingZeroes: false
  });

  constructor( private pondsService: PondsService, private router: Router, private activatedRoute: ActivatedRoute, private farmsService: FarmsService) {

    this.getFarms()

   }
 
  ngOnInit() {
    this.getFarms()
    const params = this.activatedRoute.snapshot.params;
    if (params.id){
      this.pondsService.getPond(params.id)
      .subscribe(
        res=>{
          console.log(res)
          this.pond=res
          this.edit=true;
        },
        err=>{
          console.log(err)
        }
      )
    }
    console.log(params);
  }

  saveNewPond(){
    //console.log(this.pond);
    delete this.pond.id;
    delete this.pond.created_at;
    this.pondsService.savePond(this.pond)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/ponds']);
        },
        err => console.error(err) 
      )
  }

  updatePond(){
    delete this.pond.created_at;
    //console.log(this.farm)
    this.pondsService.updatePond(this.pond.id!, this.pond)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/ponds']);
      },
      err => console.error(err) 
    )
  }

  getFarms() : void {
    this.farmsService.getListFarms()
    .subscribe(
      res=>{
        //console.log(res)
        this.farms=res
      },
      err=>console.log(err)
    )
  }

  onChange(selection: string) {
    console.log(selection)
    this.pond.id_farm_fk=Number(selection)
  }
}
