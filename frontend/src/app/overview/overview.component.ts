import { Component, OnInit } from '@angular/core';
import { Movement } from '../model/movement.interface';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  movementsList: Movement[] = [];

  displayedColumns: string[] = ['balance', 'ammount', 'date'];

  constructor(private accountService : AccountService) {}

  async ngOnInit(): Promise<void> {

    this.accountService.getAccount('c8a763cb-d2d5-4549-8092-967dff5c1c96').subscribe((account) => {
      this.movementsList = account.movements;
    })
  }
}
