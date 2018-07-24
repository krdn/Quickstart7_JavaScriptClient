//import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../services/auth.service';
//import { ConfigurationService } from "../configuration/configuration.service";

//@Component({
//  selector: 'app-call-api',
//  templateUrl: './call-api.component.html',
//  styleUrls: ['./call-api.component.css']
//})
//export class CallApiComponent implements OnInit {
//  public temp: JSON;
//  constructor(authService: AuthService, configuration: ConfigurationService) {

//    authService.get('http://localhost:5001/identity')
//     //authService.get(configuration.apiAddress + 'identity')
//      .subscribe(result => {
//        this.temp = result;
//        //this.forecasts = result as WeatherForecast[];
//      }, error => console.error(error));
//  }

//  ngOnInit() {
//  }

//}


import { Component } from '@angular/core';


@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent {
  public forecasts: WeatherForecast[];

  constructor() {
    //authService.get(configuration.apiAddress + 'SampleData/WeatherForecasts')
    //  .subscribe(result => {
    //    this.forecasts = result as WeatherForecast[];
    //  }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
