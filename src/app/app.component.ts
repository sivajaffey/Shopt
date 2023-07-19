import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { Router, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = this.common.config;
  progressbar:Boolean = false;
  constructor(private common:CommonService, private router: Router) {
    this.router.events.subscribe(data=>{
      if (data instanceof NavigationStart) {
          this.progressbar = true;
          // this.common.setContents(data, this.router);
      }

      if (data instanceof NavigationEnd) {  
        this.progressbar = false;
        // this.common.setContents(data, this.router);
      }

      if (data instanceof NavigationError) {
          this.progressbar = false;
          // this.common.setContents(data, this.router);
      }
    });
  }
}
