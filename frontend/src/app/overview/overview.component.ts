import { Component, OnInit } from '@angular/core';
import { Movement } from '../model/movement.interface';
import { AccountService } from '../service/account.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  movementsList: Movement[] = [];

  displayedColumns: string[] = ['balance', 'amount', 'date'];

  constructor(private accountService: AccountService) { }

  async ngOnInit(): Promise<void> {

    this.accountService.getAccount('c8a763cb-d2d5-4549-8092-967dff5c1c96').subscribe((account) => {
      this.movementsList = account.movements;
    })
  }

  amountCtrl = new FormControl();
  
  addAmount() {
    this.accountService.addAmount('c8a763cb-d2d5-4549-8092-967dff5c1c96', this.amountCtrl.value).subscribe(() => {
      this.clearForm();
    });
  }

  removeAmount() { //para fazer o subscribe, tinha de retornar algo e o delete nao retorna nada
    this.accountService.removeAmount('c8a763cb-d2d5-4549-8092-967dff5c1c96', this.amountCtrl.value).subscribe(() => {
      this.clearForm();
    });
  }

  clearForm() {
    this.amountCtrl.reset();
    window.location.reload();
  }

}
