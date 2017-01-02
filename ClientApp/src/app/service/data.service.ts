// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// import {AngularFire, FirebaseListObservable} from 'angularfire2';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  // items: FirebaseListObservable<any[]>;

  constructor(private http: Http) {
    // this.items = af.database.list('/stream_2');
    // this.items = af.database.list('/stream_2', { preserveSnapshot: true, query: {
    //   limitToLast: 10
    // }});
    // this.items
    //   .subscribe(snapshots => {
    //     snapshots.forEach(snapshot => {
    //       console.log(snapshot.key)
    //       console.log(snapshot.val())
    //     });
    //   })
  }

  getData(){
    return null;
    // return this.items;
  }


    
}
