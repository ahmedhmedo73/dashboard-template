import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IPermitDeliverDatesList } from 'src/app/core/models/permits-appointments.model';
import { getNextDay } from 'src/app/core/utilities/date';

@Component({
  selector: 'app-reserve-appointment-modal',
  templateUrl: './reserve-appointment-modal.component.html',
  styleUrls: ['./reserve-appointment-modal.component.scss'],
})
export class ReserveAppointmentModalComponent {
  @Input() permitDeliverDatesList: IPermitDeliverDatesList[] = [];
  @Input() bookingIsLoading: Boolean = false;

  @Output('booking') bookingEmitter: EventEmitter<any> =
    new EventEmitter<any>();
  selectedDate: any;
  selectedSchedule: any;
  minDate: Date = getNextDay(new Date());
  maxDate: Date = new Date();
  disabledDates: Date[] = [];
  duarationList: any[] = [];
  form!: FormGroup;

  constructor(protected fb: FormBuilder) {}
  ngOnInit(): void {
    this.createForm();
    this.handleDateChange();
  }

  createForm(): void {
    this.form = this.fb.group({
      selectedDate: [''],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['permitDeliverDatesList']?.currentValue &&
      changes['permitDeliverDatesList']?.currentValue.length > 0
    ) {
      this.handleDates();
    }
  }

  get f(): any {
    return this.form ? this.form.controls : false;
  }

  handleDates(): void {
    this.minDate = new Date(this.permitDeliverDatesList[0].date);
    this.maxDate = new Date(
      this.permitDeliverDatesList[this.permitDeliverDatesList.length - 1].date
    );
    this.disabledDates = this.getDisabledDates();
  }

  getDisabledDates(): Date[] {
    let index = 1;
    let date = getNextDay(this.minDate);
    let disabledDates = [];
    while (index < this.permitDeliverDatesList.length) {
      if (
        this.checkDatesEquality(
          new Date(this.permitDeliverDatesList[index].date),
          date
        )
      ) {
        index++;
      } else {
        disabledDates.push(date);
      }
      date = getNextDay(date);
    }
    return disabledDates;
  }

  checkDatesEquality(date1: Date, date2: Date): boolean {
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);
    return date1.getTime() === date2.getTime();
  }

  handleDateChange(): void {
    this.form.controls['selectedDate']?.valueChanges.subscribe({
      next: (date) => {
        this.selectedDate = date;
        this.permitDeliverDatesList.some((value) => {
          if (this.checkDatesEquality(new Date(date), new Date(value.date))) {
            this.duarationList = value.durations;
            return true;
          }
          return false;
        });
      },
    });
  }

  booking(): void {
    this.bookingEmitter.emit({
      schedule: this.selectedSchedule,
      date: this.selectedDate,
    });
  }
}
