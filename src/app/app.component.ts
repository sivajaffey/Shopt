import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { TextsService } from './services/texts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = this.text.config;
  progressbar:Boolean = false;
  constructor(private text:TextsService, private router: Router) {
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
