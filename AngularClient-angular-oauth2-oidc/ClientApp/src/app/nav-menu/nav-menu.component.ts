import { Component, OnInit, OnDestroy  } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent  {

  isExpanded = false;

  constructor() {}
  
}
