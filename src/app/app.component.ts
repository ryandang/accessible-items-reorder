import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  testItems = []
  numberOfItems = 40;

  ngOnInit() {
    this.updateItemsList();
  }

  updateItemsList() {
    this.testItems = [];
    for (let x = 0; x < this.numberOfItems; x++) {
      this.testItems.push({
        name: 'Item number ' + (x + 1)
      });
    }
  }
}
