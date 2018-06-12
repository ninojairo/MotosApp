import { Component, OnInit } from '@angular/core';
import { MotorcyclesService } from '../../services/motorcycles.service';


@Component({
  selector: 'app-motorcycles',
  templateUrl: './motorcycles.component.html',
  styleUrls: ['./motorcycles.component.css']
})
export class MotorcyclesComponent implements OnInit {

  motorcycles: any[] =[];

  constructor(private _motorciclesService: MotorcyclesService) { 
    
    this._motorciclesService.getMotorcycles().subscribe(res=>{
      console.log(res);
      this.motorcycles = res;
      console.log(this.motorcycles);
    });


  }

  ngOnInit() {
  }

}
