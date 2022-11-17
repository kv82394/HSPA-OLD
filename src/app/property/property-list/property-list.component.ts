
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from './Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent =1;
  properties : Array<IProperty>=[] ;
  constructor(private housingservice : HousingService,private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingservice.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties = data;
        console.log(this.route.snapshot.url.toString());
      },error=>{
        console.log(error)
      }
    );
  }

}
