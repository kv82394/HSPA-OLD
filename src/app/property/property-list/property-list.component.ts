import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties : Array<any>=[
    {
    "Id": 1,
    "Name":"vivek house",
    "Type":"House",
    "Price":12000
  },
  {
    "Id": 2,
    "Name":"ram house",
    "Type":"House",
    "Price":12000
  },
  {
    "Id": 3,
    "Name":"laxman house",
    "Type":"House",
    "Price":12000
  },
  {
    "Id": 4,
    "Name":"krishna house",
    "Type":"House",
    "Price":12000
  },
  {
    "Id": 5,
    "Name":"buddha house",
    "Type":"House",
    "Price":12000
  },
  {
    "Id": 6,
    "Name":"vrah house",
    "Type":"House",
    "Price":12000
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
