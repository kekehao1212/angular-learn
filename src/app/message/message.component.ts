import { Component, OnInit, Input, Output } from '@angular/core';
import { MessageService } from '../message.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: object;
  @Output() hello: EventEmitter<any> = new EventEmitter();
  click(event): void {
    this.hello.emit(null);
  }
  constructor(public messageService: MessageService) { }

  ngOnInit() {
    console.log(this.messageService);
    console.log(this.message);
  }

}
