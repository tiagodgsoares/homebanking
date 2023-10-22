import { Component, OnInit } from '@angular/core';
import { Movement } from '../../model/movement.interface';
import { AccountService } from '../../service/account.service';
import { FormControl } from '@angular/forms';
import { Account } from '../../model/account.interface';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';

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
  accountId = '';

  constructor(private accountService: AccountService, private route: ActivatedRoute, private notificationService: NotificationService) { }

  async ngOnInit(): Promise<void> {

    this.route.params.subscribe((params) => {

      if (params['id']) {
        this.accountId = params['id'];
        this.accountService.getAccount(this.accountId).subscribe((account) => {
          this.movementsList = account.movements;
          this.currentBalance = account.balance;
        })
      }
    })

  }

  addAmount() {
    this.accountService.addAmount(this.accountId, this.amountCtrl.value).subscribe((account) => {
      this.onMovementsChange(account);

    });
  }

  removeAmount() {
    this.accountService.removeAmount(this.accountId, -this.amountCtrl.value).subscribe({
      next: (account) => {
        this.onMovementsChange(account);
      },
      error: (error) => {
        if (error.status === 400) {
          this.notificationService.notify(
            {
              duration: 3000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
            },
            error.error.message,
            'success',
          );
        }
      }
    });
  }

  onMovementsChange(account: Account) {
    this.amountCtrl.reset();
    this.movementsList = account.movements;
    this.currentBalance = account.balance;
  }

}
