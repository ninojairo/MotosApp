import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MotorcyclesService {

  URLMotorcycles : string ="https://motosapp-68512.firebaseio.com/Motorcycles.json";
  httpHeader:string= "Apppliaction/JSON";

  constructor(private _http: Http) { 


  }

  getMotorcycles(){
    return this._http.get(this.URLMotorcycles).map(res=>(res.json()));
  }


}
