import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  showFiller = false;
  config = {
    title: 'ShopT',
    footer: 'Fake Shop Version 1.0.0',
    page: ''
  };
  drawer(drawer:any) {
    drawer.toggle()
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
    checkRoute(route:any) {
      let routeExists = route.config.filter((data:any)=>"/"+data.path == route.url);
      let va = (routeExists.length > 0) ? true : false;
      return va
    }
  }
  
