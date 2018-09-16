import { Component, OnInit, Input, Output } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface Message {
  h: string;
}
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  @Output() hello: EventEmitter<any> = new EventEmitter();
  click(event): void {
    console.log(this.router);
    console.log(this);
    console.log(event);
    this.hello.emit(null);
    console.log(this.route);
    this.router.navigate(['./aa', { id: 1, foo: 'foohhh' }], { relativeTo: this.route });
  }
  constructor(public messageService: MessageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.messageService);
    console.log(this.message, 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
  }
}
