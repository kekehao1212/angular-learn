import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './services/message/message.service';
import { HttpInterceptorsService } from './services/http-interceptors/http-interceptors.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  providers: [MessageService, {
    provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorsService, multi: true
  }]
})
export class CoreModule { }
