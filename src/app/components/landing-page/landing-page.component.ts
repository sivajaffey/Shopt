import { Component, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(public common:CommonService){}
  @Input() showFiller = false;

  // clickevent(drawer:any) {
  //   this.common.drawer(drawer)
  // }
}
