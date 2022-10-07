import { Component, Input, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataService } from "./data.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  passengerDataLengthPar = 0;
  passengerDataPar: any[];
  currentCounterPar = 1;
  disableNextPar = false;
  disablePrevPar = true;
  currentCounter:number;

  currentCounterEvent(event){
    console.log("Event--->",event)
    this.currentCounter=event;
    this.callApi(event,10);
  }
  constructor(protected dataGetter: DataService){

  }
  ngOnInit() {
    this.callApi(this.currentCounterPar, 10);
    if (this.currentCounterPar == 1) {
      this.disableNextPar = false;
      this.disablePrevPar = true;
    }
}

callApi(currentPage: number, recordSize: 10) {
  this.dataGetter.getData(currentPage, recordSize).subscribe((data) => {
    this.passengerDataPar = data["data"];
    this.passengerDataLengthPar = this.passengerDataPar.length;
  });
}
}
