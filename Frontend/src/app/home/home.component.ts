import { Component, OnInit,DoCheck ,OnChanges} from '@angular/core';
import {  HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError,map, filter } from 'rxjs/operators';
import {Http,Response} from '@angular/http'
import {FormControl, FormArray} from '@angular/forms';
import {startWith} from 'rxjs/operators';
import { Router } from '../../../node_modules/@angular/router';

export interface city{
  Id:number;
  cityName:String;
}
export interface areas{
  AreaId:number;
  Areaname:String;
}
export interface cityarea{
  AreaName:string;
  CityName:string;
}
/*export interface locate{
  Id:number;
  City:string;
  Area:string;
}*/



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  myControl=new FormControl();
  myControlArea=new FormControl();
  FilteredOptions:Observable<string[]>;
  FilteredAreas:Observable<string[]>;
  FilteredCityAreas:any;
  //private AreaFilter:locate[]=[]
  //private areas:locate[]=[];
  //public search:string=this.myControl.value;
  private cities:city[]=[];
  private area:areas[]=[];
  private cityareanames:cityarea[]=[];
  
  private selectedCity:string;
  private selectedArea:string;

 // private location='http://localhost:61765/api/Restaurant';
  private city="http://localhost:61764/api/City";
  private areaLink="http://localhost:61764/api/Area";
  private cityAreaLink ="http://localhost:61764/api/AreaCity";
  constructor(private http: HttpClient,private router:Router) { 
  }
  
  ngOnInit() {
   /*this.getAreasList().subscribe(
      data =>this.area =data
    )*/
    this.getCities().subscribe(data=>this.cities=data)
   // this.FilteredAreas=this.myControlArea.valueChanges.pipe(startWith(''),map(value => this._filterArea(value)));
   //this.FilteredOptions=this.myControl.valueChanges.pipe(startWith(''),map(value => this._filter(value)));
   
  }
  getCities():Observable<city[]>{
    return this.http.get<city[]>(this.city)
   }

  getAreasList():Observable<areas[]>{
    return this.http.get<areas[]>(this.areaLink)
  }
  
  
  /*getAreas(): Observable<locate[]> {
     
    return this.http.get<locate[]>(this.location).pipe(map(data =>data.filter(data=>data.City===this.myControl.value)))  
    }*/
    
 
 getCityAreas():Observable<cityarea[]>{
return  this.http.get<cityarea[]>(this.cityAreaLink)
}
getCityArea(selectedCity):Observable<cityarea[]>{
  return this.http.get<cityarea[]>(this.cityAreaLink).pipe(map(data=>data.filter(data=>data.CityName===selectedCity)))

}
 selectChangeCity(event:any){
  this.selectedCity=event.target.value;
  if(this.selectedCity=="null"){
    this.getCityAreas().subscribe(data=>this.cityareanames=data);
  }
  else{
  this.getCityArea(this.selectedCity).subscribe(data=>this.cityareanames=data);}
  
}
selectChangeArea(event:any){
  this.selectedArea=event.target.value;
}
getRes(){
  if(this.selectedCity !="null" && this.selectedArea!="null"){
    this.router.navigateByUrl('/rest/'+this.selectedArea+'');
  }
  else{this.router.navigateByUrl('/home')}
}

/*private _filter(value:string):any[]{
  const filterValue=value.toLocaleLowerCase();
   return  this.cities.filter(option =>option.cityName.toLowerCase().includes(filterValue));
 }
 private _filterArea(value:string):any[]{
  const filterValue=value.toLocaleLowerCase();
   return  this.area.filter(option =>option.Areaname.toLowerCase().includes(filterValue));
 }*/
 validate(){
   console.log(this.myControl.value)
  // this.getCityArea().subscribe(data=>this.cityareanames=data);
  console.log(this.cityareanames)
 }


}
