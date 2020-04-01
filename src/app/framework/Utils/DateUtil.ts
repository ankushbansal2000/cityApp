import * as moment from 'moment';
import { Type } from 'class-transformer';
import { BsDatepickerConfig } from 'ngx-bootstrap';




export class DateUtil {

  orderDate = new Date();


  static getStandardTimeUTC(serverdatestr: string, serverformat: string, reqformat: string) {
    return moment(moment.utc(serverdatestr, serverformat).toDate()).format(reqformat);
  }


  static getStandardTime(serverdatestr: string, serverformat: string, reqformat: string) {
    return moment(moment(serverdatestr, serverformat).toDate()).format(reqformat);
  }


  static getStringDatefromJSON(json: any, reqformat: string) {

    return moment(moment(json).toISOString()).format(reqformat);

  }


  static getStringDatefromDate(date: Date, dateFormat: string) {

    return moment(moment(date)).format(dateFormat);

  }

  static getStringDatefromDateYesterday(date: Date, dateFormat: string) {

    return moment(moment(date).subtract(1, 'day')).format(dateFormat);

  }

  static getDatefromString(datestring: string, format: string) {
    return moment(datestring, format).toDate();
  }

  static getDatefromStringUTC(datestring: string, format: string) {
    return moment.utc(datestring, format).toDate();
  }

  static isValid(date: Date) {
    return moment(date).isValid();
  }


  static getDatefromMs(milliseconds: number, reqdateformat: string) {
    return moment(milliseconds).format(reqdateformat);
  }


  static getDateDiffInSeconds(startDate, endDate) {
    let start = moment(startDate);
    let end = moment(endDate);
    return end.diff(start, 'seconds');
  }

  static getDateDiffInMs(startDate, endDate) {
    return moment.duration(endDate.diff(startDate)).asMilliseconds;
  }

  static getRelativeTimeString(created: string){
    let date = DateUtil.getDatefromStringUTC(created, 'DD-MM-YYYY HH:mm:ss');
        let seconds = DateUtil.getDateDiffInSeconds(date, new Date());
        let timeString = DateUtil.getTimeString(seconds);
        return timeString;
  }


  static getTimeString(seconds: number) {
    let timeString = this.getValue(Math.floor((seconds / 3600))) + ':'
      +
      this.getValue(Math.floor(seconds % 3600 / 60)) + ':'
      + this.getValue(Math.floor(seconds % 3600 % 60));
      return timeString;
  }
  static getValue(value: number) {
    if (value < 10) {
      return "0" + value
    } else {
      return "" + value
    }
  }


  static getCurrentDate() {
    return DateUtil.getStringDatefromDate(new Date(), "DD-MM-YYYY");
  }

}

export class DateTimePickerConfig{
  static bsConfig:Partial<BsDatepickerConfig>;

  public static getDatePickerConfig(){
    let   colorTheme = 'theme-dark-blue';
    this.bsConfig = Object.assign(
      {},
      { containerClass: colorTheme },
      { showWeekNumbers: false },
      { dateInputFormat: 'DD-MM-YYYY' }
    );
    return this.bsConfig;
  }
}


