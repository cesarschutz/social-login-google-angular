import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }

  showNotificationSuccess(message: string) {
    $.notify({
      title: 'Sucesso',
      message: message
    }, {
      type: 'success',
      timer: 500,
      placement: {
        from: 'top',
        align: 'right'
      }
    });
  }
}