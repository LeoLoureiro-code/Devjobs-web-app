import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  @Input() isOpen = false; 
  @Input() title = '';     
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
