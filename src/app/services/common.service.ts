import { Injectable, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _snackBar: MatSnackBar) { }
  showFiller = false;
  drawer(drawer:any) {
    drawer.toggle()
  }
  setLocal(name:String,data:any) {
    localStorage.setItem(name.toString(), JSON.stringify(data));
  }
  getLocal(name:String) {
    if (localStorage.getItem(name.toString()) == null) {
      return null
    } else {
      let local = localStorage.getItem(name.toString());
      return local
    }
  }
  snackBar(message:string) {
    this._snackBar.open(message, 'OK');
  }
  // setContents(data:any, router:any) {
  //   if (data && data.url) {
  //     let url = data.url.split('/');
  //       (this.checkRoute(router) && url[1]) ?
  //         this.config.page = url[1]
  //           : this.config.page = (url[1] == '') ? '' : 'Error';

  //       this.config.title = (this.config.page) ? `${this.config.title} - ${this.config.page}` : this.config.title;
  //     }
  //   }
    // checkRoute(route:any) {
    //   let routeExists = route.config.filter((data:any)=>"/"+data.path == route.url);
    //   let va = (routeExists.length > 0) ? true : false;
    //   return va
    // }
  }
  
