import { Component, OnInit, Input, TemplateRef, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.scss']
})
export class ReorderComponent implements AfterViewInit {
  itemHeight = 50;
  originalOrder: Array<any> = [];
  containerRef: any;
  _items: any = [];

  @Input()
  set items(values) {
    this._items = values;
    this.init();
  };

  @Input()
  itemTpl: TemplateRef<any>;

  constructor(private elementRef: ElementRef) { }

  init() {
    // set original order
    this._items.forEach((item, idx) => {
      item.order = idx + 1;
    });

    // make a copy
    this.originalOrder = JSON.parse(JSON.stringify(this._items));
  }

  ngAfterViewInit() {
    // get the height of the item container
    setTimeout(() => {
      this.itemHeight = this.elementRef.nativeElement.querySelector('.reorder-item').offsetHeight;
    });

    this.containerRef = this.elementRef.nativeElement.querySelector('.reorder-items-container');
  }

  rearrange(newOrder, item) {
    const itemOriginalOrder = item.order;
    const goToOrder = newOrder.order;

    if (goToOrder > 0 && goToOrder <= this._items.length) {
      // move up
      if (itemOriginalOrder > goToOrder) {
        this._items.forEach((_item, idx) => {
          if (_item.order <  itemOriginalOrder && _item.order >= goToOrder) {
            _item.order++;
            this.originalOrder[idx].order = _item.order;
          }
        });
      } else {
        this._items.forEach((_item, idx) => {
          if (_item.order >  itemOriginalOrder && _item.order <= goToOrder) {
            _item.order--;
            this.originalOrder[idx].order = _item.order;
          }
        });
      }

      item.order = newOrder.order * 1;
      this.checkScrolling(goToOrder);
    }
  }

  // check if the new order is within the container view
  // get how far the new order from the top
  checkScrolling(goToOrder) {
    const currentScrollTop = this.containerRef.scrollTop;
    const newOrderTop = goToOrder * this.itemHeight;
    const totalScrollHeight = this.containerRef.scrollHeight;
    const containerHeight = this.containerRef.offsetHeight;

    // if it going off the screen
    if (newOrderTop > containerHeight + this.containerRef.scrollTop) {
      // how far the new order from the view box
      const distance = newOrderTop - containerHeight - this.containerRef.scrollTop;
      window.requestAnimationFrame(() => {
        this.scrollDown((distance));
      });
    } else {
      this.scrollUp((this.containerRef.scrollTop - newOrderTop + this.itemHeight));
    }
  }

  scrollDown(position, incremental?) {
    if (position > 0) {
      window.requestAnimationFrame(() => {
        incremental = incremental || Math.ceil(position / 40);
        this.containerRef.scrollTop = this.containerRef.scrollTop + incremental;
        this.scrollDown((position - incremental), incremental);
      });
    }
  }

  scrollUp(position, incremental?) {
    if (position > 0) {
      window.requestAnimationFrame(() => {
        incremental = incremental || Math.ceil(position / 40);
        this.containerRef.scrollTop = this.containerRef.scrollTop - incremental;
        this.scrollUp((position - incremental), incremental);
      });
    }
  }

}
