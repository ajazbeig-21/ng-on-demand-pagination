
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DataService } from "../data.service";
@Component({
  selector: 'app-child-pagination',
  templateUrl: './child-pagination.component.html',
  styleUrls: ['./child-pagination.component.css']
})
export class ChildPaginationComponent implements OnInit {
  
  @Input() passengerDataLength = 0;
  @Input() passengerData: any[];
  @Output() currentCounter =new EventEmitter<number>();
  currentCounterChild=1;
  
  sendCounterData()
  {
this.currentCounter.emit(this.currentCounterChild);
  }

  @Input() disableNext = false;
  @Input() disablePrev = true;
  constructor(protected dataGetter: DataService) {}

  ngOnInit() {
    
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
      this.currentCounter.emit(this.currentCounterChild+=1);
      this.callApi(this.currentCounterChild, 10);
    }
  }

  prevPage() {
    if (this.currentCounterChild > 1) {
      this.disableNext = false;
      this.currentCounter.emit(this.currentCounterChild -= 1);
      this.callApi(this.currentCounterChild, 10);
    } else this.disablePrev = true;
  }
}

