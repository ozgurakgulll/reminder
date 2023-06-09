import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent {
  @Output() modalClick = new EventEmitter();

  modalVisible = false;

  onClick(): void {
    this.modalClick.emit((this.modalVisible = true));
  }
}
