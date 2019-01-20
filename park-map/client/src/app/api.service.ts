import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {Signalisation} from "./signalisation";
@Injectable()
export class ApiService {

  private postsURL: string = "https://jsonplaceholder.typicode.com/posts";

  public constructor(private http: Http ) {}
  public getPosts(): Observable<Signalisation[]> {
    /*return this.http
      .get(this.postsURL)
      .map((response: Response) => {
        return <Signalisation[]>response.json();
      })
      .catch(this.handleError);*/
    return this.http.get(this.postsURL).pipe(
      map((response: Response) => {
        return response.json() as Signalisation[];
      }));
  }

  /*private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }*/

}
