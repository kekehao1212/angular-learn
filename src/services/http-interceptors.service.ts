import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { MessageService } from './message.service';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorsService implements HttpInterceptor {

  constructor(private messageService: MessageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;
    return next.handle(req)
      .pipe(
        tap(
          event => ok = event instanceof HttpResponse ? 'succeed' : '',
          error => ok = 'failed'
        ),
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
            ${ok} in ${elapsed} ms`;
          this.messageService.add(msg);
        })
      );
  }
}
