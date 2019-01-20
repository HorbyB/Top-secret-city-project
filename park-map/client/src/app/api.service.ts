import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {Signalisation} from "./signalisation";
import {ParkingData} from "./parking-data";

@Injectable()
export class ApiService {

  private postsURL: string = "http://donnees.ville.montreal.qc.ca/dataset/8ac6dd33-b0d3-4eab-a334-5a6283eb7940/resource/52cecff0-2644-4258-a2d1-0c4b3b116117/download/signalisation.json";

  public constructor(private http: Http ) {}
  public getPosts(): Observable<ParkingData> {
    return this.http.get(this.postsURL).pipe(
      map((response: Response) => {
        return response.json() as ParkingData;
      }));
  }

  public getDatas(): Observable<Signalisation[]> {
    return this.http.get(this.postsURL).pipe(
      map((response: Response) => {
        return response.json() as Signalisation[];
      }));
  }

}
