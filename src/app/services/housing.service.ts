import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { IProperty } from '../property/property-list/Iproperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { 
  }
  getAllProperties(SellRent : number){
    return this.http.get('data/properties.json').pipe(
      map(data =>
        {
          const propertiesArray : Array<any> = Object.values(data);
          const propertiesArr : Array<IProperty> = [];
          for (var i in propertiesArray){
            if (propertiesArray[i].SellRent===SellRent)
              propertiesArr.push(propertiesArray[i]);
          }
          console.log(typeof(propertiesArr));
          return propertiesArr;
        })
    )
}
}