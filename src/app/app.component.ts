import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';

  constructor(private modalService: NgbModal) {}

  open(content) {
    console.log(content);
    this.modalService.open(content, { centered: true,  size: 'lg'});
  }

}
