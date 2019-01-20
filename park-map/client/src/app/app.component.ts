import { Component, OnInit } from "@angular/core";
import { Message } from "../../../common/communication/message";
import { ApiService } from "./api.service";
import { BasicService } from "./basic.service";
import {ParkingData} from "./parking-data";
import { Signalisation } from "./signalisation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ApiService],
})
export class AppComponent implements OnInit {
    public _postsArray: ParkingData;

    public constructor(/*private basicService: BasicService,*/ private apiSerivce: ApiService) { }

    //public readonly title: string = "LOG2990";
    //public message: string;

    public getPosts(): void {
    this.apiSerivce.getPosts().
    subscribe(
      (resultArray) => this._postsArray =
        resultArray,
      );
  }

    public ngOnInit(): void {
        //this.basicService.basicGet().subscribe((message: Message) => this.message = message.title + message.body);
        this.getPosts();
    }
}
