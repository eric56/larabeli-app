import { ModalComponent } from './../modal/modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  listPathImgs: string[] = ["01","02","03","04","05","06"];

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalItemPortfolio(pathImg: String) {
    console.log(`imagem de id: ${pathImg}`);
    const initialState = { pathImg: pathImg };
    this.bsModalRef = this.modalService.show(
                              ModalComponent, 
                              Object.assign({}, { class: 'gray modal-lg', initialState }));
  }

  ngOnInit() {
  }

}
