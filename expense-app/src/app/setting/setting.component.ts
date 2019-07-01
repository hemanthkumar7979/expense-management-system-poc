import { Component, OnInit } from '@angular/core';
import { ExpensesserviceService } from '../expensesservice.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  providers: [ExpensesserviceService]
})
export class SettingComponent implements OnInit {

  itemsList = [];
  budgetValue;
  error: number;
  constructor(private item: ExpensesserviceService) { }

  ngOnInit() {
    this.item.getItemList().subscribe(itemdata => this.itemsList = itemdata ,
      (eror) => {
        this.error = eror.status;
      });
    this.budgetValue =  '';
  }
  budgetUpdate(data) {
    console.log(data.value);
    this.item.setBudget(data.value);
    this.budgetValue =  '';
  }

}
