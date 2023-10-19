import { Component, OnInit } from '@angular/core';
import { Movement } from '../model/movement.interface';
import { AccountService } from '../service/account.service';
import { FormControl } from '@angular/forms';
import { Account } from '../model/account.interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  movementsList: Movement[] = [];
  displayedColumns: string[] = ['balance', 'amount', 'date'];
  amountCtrl = new FormControl();
  currentBalance: number = 0;

  constructor(private accountService: AccountService) { }

  async ngOnInit(): Promise<void> {

    this.accountService.getAccount('c8a763cb-d2d5-4549-8092-967dff5c1c96').subscribe((account) => {
      this.movementsList = account.movements;
      this.currentBalance = this.movementsList[this.movementsList.length - 1].balance;
    })
  }

  addAmount() {
    this.accountService.addAmount('c8a763cb-d2d5-4549-8092-967dff5c1c96', this.amountCtrl.value).subscribe((account) => {
      this.onMovementsChange(account); //perceber melhor como funcionam estes subscribe
    });
  }

  removeAmount() {
    this.accountService.removeAmount('c8a763cb-d2d5-4549-8092-967dff5c1c96', -this.amountCtrl.value).subscribe((account) => {
      this.onMovementsChange(account);
    });
  }
  
  onMovementsChange(account: Account) {
    this.amountCtrl.reset();
    this.movementsList = account.movements;
  }

}
