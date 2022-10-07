import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataService } from "src/app/data.service";
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class  PaginationComponent implements OnInit {
  passengerDataLength = 0;
  passengerData: any[];
  nextPassengerDataLength: number;
  prevCounter = 1;
  currentCounter = 1;
  nextCounter = 2;
  disableNext = false;
  disablePrev = true;
  constructor(protected dataGetter: DataService) {}

  ngOnInit() {
    this.callApi(this.currentCounter, 10);
    if (this.passengerDataLength == 10 && this.currentCounter == 1) {
      this.disableNext = true;
      this.disablePrev = true;
    }
  }

  callApi(currentPage: number, recordSize: 10) {
    this.dataGetter.getData(currentPage, recordSize).subscribe((data) => {
      this.passengerData = data["data"];
      this.passengerDataLength = this.passengerData.length;
    });
  }

  nextPage() {
    if (this.passengerDataLength < 9) {
      this.disableNext = true;
      this.disablePrev = false;
    } else {
      this.disablePrev = false;
      this.currentCounter += 1;
      this.callApi(this.currentCounter, 10);
    }
  }

  prevPage() {
    if (this.currentCounter > 1) {
      this.disableNext = false;
      this.currentCounter -= 1;
      this.callApi(this.currentCounter, 10);
    } else this.disablePrev = true;
  }
}
