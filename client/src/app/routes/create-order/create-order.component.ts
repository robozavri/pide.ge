import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  form: FormGroup;

  public weekDays: any = [
    {
      title: {
        en: 'Monday',
        ge: 'ორშაბათი',
        ru: 'Понедельник'
      },
      miniTitle: {
        en: 'Mon',
        ge: 'ორშ',
        ru: 'Пон'
      },
    },
    {
      title: {
        en: 'Tuesday',
        ge: 'სამშაბათი',
        ru: 'Вторник'
      },
      miniTitle: {
        en: 'Tue',
        ge: 'სამშ',
        ru: 'Втор'
      },
    },
    {
      title: {
        en: 'Wednesday',
        ge: 'ოთხშაბათ',
        ru: 'Среда'
      },
      miniTitle: {
        en: 'Wed',
        ge: 'ოთხ',
        ru: 'Сре'
      },
    },
    {
      title: {
        en: 'Thursday',
        ge: 'ხუთშაბათი',
        ru: 'Четверг'
      },
      miniTitle: {
        en: 'Thu',
        ge: 'ხუთ',
        ru: 'Чет'
      },
    },
    {
      title: {
        en: 'Friday',
        ge: 'პარასკევი',
        ru: 'Пятница'
      },
      miniTitle: {
        en: 'Fri',
        ge: 'პარ',
        ru: 'Пят'
      },
    },
    {
      title: {
        en: 'Saturday',
        ge: 'შაბათი',
        ru: 'Суббота'
      },
      miniTitle: {
        en: 'Sat',
        ge: 'შაბ',
        ru: 'Суб'
      },
    },
    {
      title: {
        en: 'Sunday',
        ge: 'კვირა',
        ru: 'Воскресенье'
      },
      miniTitle: {
        en: 'Sun',
        ge: 'კვი',
        ru: 'Вос'
      },
    },
  ];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      pet: ['', Validators.required],
      address: ['', Validators.required],
      secondPhone: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      walkTime:['', Validators.required],
      walkType:['', Validators.required],
    });
  }


}