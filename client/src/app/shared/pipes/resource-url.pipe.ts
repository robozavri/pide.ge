import { Inject, Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

const RESOURCE_URL = environment.resourceNameSpace;

@Pipe({ name: 'resourceUrl' })
export class ResourceUrlPipe implements PipeTransform {


   transform(value: any): any {
      if (!value || value.startsWith('http://') || value.startsWith('https://')) return value;
      return RESOURCE_URL + '/' + this.getByPlatform(value);
   }

   getByPlatform(value) {
      const ua = navigator.userAgent;
      const splited = value.split('.');

      if (splited[1] === 'jpg' || splited[1] === 'png') {
        return value;
      }

      if (window.innerWidth <= 600) {
        return `${splited[0]}-mobile.${splited[1]}`;
      }

      if (window.innerWidth > 600 && window.innerWidth < 1980) {
        return `${splited[0]}-desktop.${splited[1]}`;
      }

      return value;

      // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      //     return `${splited[0]}-mobile.${splited[1]}`;
      // } else if(/Chrome/i.test(ua)) {
      //     if (window.innerWidth > 991 && window.innerWidth < 1980) {
      //       return `${splited[0]}-desktop.${splited[1]}`;
      //     }
      //     if (window.innerWidth < 991) {
      //       return `${splited[0]}-mobile.${splited[1]}`;
      //     }
      //     return value;
      // }  else {
      //    return `${splited[0]}-desktop.${splited[1]}`;
      // }
    }
}
