//                              ||                ||
//              ----------------||----------------||----------------                       
//             ||               ||                ||               ||
//             ||                                                  ||
//             ||                                                  ||
//             ||                                                  ||
//             ||                                                  ||
//             ||       ***************      *              *      ||
//             ||                     *      *              *      ||
//             ||                     *      *              *      ||
//             ||                     *      *              *      ||
//             ||                     *      *              *      ||
//             ||                     *      *              *      ||
//             ||                     *      *              *      ||
//             ||                     *      *              *      ||
//             ||       ***************      ****************      ||
//             ||       *                                   *      ||
//             ||       *                                   *      ||
//             ||       *                                   *      ||
//             ||       *                                   *      ||
//             ||       *                                   *      ||
//             ||       *                                   *      ||
//             ||       *                                   *      ||
//             ||       ***************                     *      ||
//             ||                                                  ||
//             ||                                                  ||
//             ||                                                  ||
//             ||                                                  ||
//              ----------------------------------------------------                             

////////////////////---------- Are You Ready? ----------////////////////////
////////////////////------------- Let's Go -------------////////////////////
////////////////////---- Read Comments And Enjoy It ----////////////////////

////////////////////------------- ATTENTION -------------////////////////////
//          In the first, I'm must say, in the all of the project,         //
//          g means Gregorian and j means Jalali                           //
/////////////////////////////////////////////////////////////////////////////
import { MONTHS, ORDINALNUMBERS, DAYS, TIMETYPE, REGEX } from './utils.js'

/**
 * A Date library for working with persian date
 * @class
 * @param {...Number|Date|Array|Null} date - the date that convert to persian date
 */
const PersianDate = function () {
    'use strict'

    /**
     * keeps the date and time
     * @param {Number} year - the year of date
     * @param {Number} month - the month of date
     * @param {Number} date - the day of month of date
     * @param {Number} hour - the hour of time
     * @param {Number} minute - the minute of time
     * @param {Number} second - the second of time
     * @param {Number} millisecond - the millisecond of time
     */
    this.d = {};

    /**
     * Gregorian to Jalali
     * @param {Null|Date|Number|String} [year=new Date()] - Gregorian year
     * @param {Null|Number|String} [month=1] - Gregorian month
     * @param {Null|Number|String} [day=1] - Gregorian day
     * @param {Null|Number|String} [hour=0] - Gregorian hour
     * @param {Null|Number|String} [minute=0] - Gregorian minute
     * @param {Null|Number|String} [second=0] - Gregorian second
     * @param {Null|Number|String} [millisecond=0] - Gregorian millisecond
     * @returns {Array} Jalali date
     */
    const gtj = (year, month, day, hour, minute, second, millisecond) => {
        let date;
        if (!year)
            date = new Date();
        else if (Object.prototype.toString.call(year) === '[object Date]') // if the year was an instance of Date
            date = year;
        else
            date = new Date(year, month || 1, day || 1, hour || 0, minute || 0, second || 0, millisecond || 0);
        day = date.getDate();
        month = date.getMonth() + 1; // Because the output of getMonth() start from zero, add one
        year = date.getFullYear();
        hour = date.getHours();
        minute = date.getMinutes();
        second = date.getSeconds();
        millisecond = date.getMilliseconds();
        let jYear, jMonth, jDay;
        let pastDaysInMonth = [
            0,
            31,
            59,
            90,
            120,
            151,
            181,
            212,
            243,
            273,
            304,
            334,
        ]; //Past days from the start of the year in each month
        if (year > 1600) {
            jYear = 979;
            year -= 1600;
        } else {
            jYear = 0;
            year -= 621;
        }
        let newYear =
            month > 2 ? year + 1 : year;
        let days =
            365 * year +
            parseInt((newYear + 3) / 4) -
            parseInt((newYear + 99) / 100) +
            parseInt((newYear + 399) / 400) -
            80 +
            day +
            pastDaysInMonth[month - 1];
        jYear += 33 * parseInt(days / 12053);
        days %= 12053;
        jYear += 4 * parseInt(days / 1461);
        days %= 1461;
        if (days > 365) {
            jYear += parseInt((days - 1) / 365);
            days = (days - 1) % 365;
        }
        jMonth =
            days < 186
                ? 1 + parseInt(days / 31)
                : 7 + parseInt((days - 186) / 30);
        jDay = 1 + (days < 186 ? days % 31 : (days - 186) % 30);
        return [
            jYear,
            jMonth,
            jDay,
            hour,
            minute,
            second,
            millisecond,
        ];
    }

    /**
     * Jalali to Gregorian
     * @param {Null|Number|String} year - Jalali year
     * @param {Null|Number|String} [month=1] -  Jalali month
     * @param {Null|Number|String} [day=1] -  Jalali day
     * @param {Null|Number|String} [hour=0] -  Jalali hour
     * @param {Null|Number|String} [minute=0] -  Jalali minute
     * @param {Null|Number|String} [second=0] -  Jalali second
     * @param {Null|Number|String} [millisecond=0] -  Jalali millisecond
     * @returns {Date} Gregorian date
     */
    const jtg = (year, month, day, hour, minute, second, millisecond) => {
        if (!year)
            [year, month, day, hour, minute, second, millisecond] = [this.d.year, this.d.month, this.d.date, this.d.hour, this.d.minute, this.d.second, this.d.millisecond];
        else {
            //plus sign before a variable, convert variable to int
            year = +year;
            month = +month || 1;
            day = +day || 1;
            hour = +hour || 0;
            minute = +minute || 0;
            second = +second || 0;
            millisecond = +millisecond || 0;
        }
        let gYear, gMonth, gDay;
        if (year > 979) {
            gYear = 1600;
            year -= 979;
        } else {
            gYear = 621;
        }
        let days =
            365 * year +
            parseInt(year / 33) * 8 +
            parseInt(((year % 33) + 3) / 4) +
            78 +
            day +
            (month < 7
                ? (month - 1) * 31
                : (month - 7) * 30 + 186);
        gYear += 400 * parseInt(days / 146097);
        days %= 146097;
        if (days > 36524) {
            gYear += 100 * parseInt(--days / 36524);
            days %= 36524;
            if (days >= 365) days++;
        }
        gYear += 4 * parseInt(days / 1461);
        days %= 1461;
        if (days > 365) {
            gYear += parseInt((days - 1) / 365);
            days = (days - 1) % 365;
        }
        gDay = days + 1;
        let daysOfMonths = [
            0,
            31,
            (gYear % 4 == 0 && gYear % 100 != 0) ||
                gYear % 400 == 0
                ? 29
                : 28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31,
        ];
        for (gMonth = 0; gMonth < 13; gMonth++) {
            let v = daysOfMonths[gMonth];
            if (gDay <= v) break;
            gDay -= v;
        }

        // let date = new Date();
        // date.setFullYear(gYear);
        // date.setMonth(gMonth - 1);
        // date.setDate(gDay);
        // date.setHours(hour);
        // date.setMinutes(minute);
        // date.setSeconds(second);
        // date.setMilliseconds(millisecond);
        // return date;
        return new Date(
            gYear,
            gMonth - 1,
            gDay,
            hour,
            minute,
            second,
            millisecond
        );
    }

    /**
     * get label of day
     * @param {Date} date - the date that received day
     * @param {'fa'|'en'} locale - locale of day label
     * @returns {String|Error} if date was Valid date, returns day label, else returns an error
     * @example Saturday | شنبه
     */
    const getDayLabel = (date = new Date(), locale = 'fa') => {
        if (Object.prototype.toString.call(date) === '[object Date]') // if the year was an instance of Date
            return DAYS['label'][locale][date.getDay()];
        return showError('تاریخ نامعتبر');
    }

    /**
     * get the day of the week
     * @param {Date} date - the date that received day of week
     * @param {'fa', 'en'} locale - locale of day
     * @param {'standard','array'} mode - standard mode start from 1 and array mode start from 0
     */
    const getDayOfWeek = (date = new Date(), locale = 'fa', mode = 'standard') => {
        if (Object.prototype.toString.call(date) === '[object Date]') { // if the year was an instance of Date
            return DAYS[locale][date.getDay()] + (mode != 'standard' ? 0 : 1);
        }
        return showError('تاریخ نامعتبر');
    }

    /**
     * get the day of the Jalali year
     * @param {Null|Number|String} month - the month of date that gives the day of the year
     * @param {Null|Number|String} day - the day of date that gives the day of the year
     * @returns {Number} the day of the Jalali year
     */
    const getDayOfJYear = (month, day) => {
        if (!month)
            [month, day] = [this.d.month, this.d.date];
        //plus sign before a variable, convert variable to int
        month = +month;
        day = +day;
        while (--month != 0) {
            day += this.getDaysInMonth(0, month);
        }
        return day;
    }

    /**
     * get the day of the Gregorian year
     * @param {Null|Date|Number|String} [year=Date.getFullYear()] - the year of date that gives the day of the year
     * @param {Null|Number|String} [month=Date.getMonth()] - the month of date that gives the day of the year
     * @param {Null|Number|String} [day=Date.getDate()] - the day of date that gives the day of the year
     * @returns {Number} the day of the Gregorian year
     */
    const getDayOfGYear = (year, month, day) => {
        if (!year) {
            let gDate = jtg();
            [year, month, day] = [gDate.getFullYear(), gDate.getMonth(), gDate.getDate()];
        }
        if (Object.prototype.toString.call(year) === '[object Date]') // if the year was an instance of Date
            [year, month, day] = [year.getFullYear(), year.getMonth(), year.getDate()];
        let date = new Date(year, month, day);
        let startOfYear = new Date(year, 0, 0);
        let diff = (date - startOfYear) + ((startOfYear.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    /**
     * get the week of the Jalali year
     * @param {Null|Number|String} year - the year of date that gives the week of the year
     * @param {Null|Number|String} month - the month of date that gives the week of the year
     * @param {Null|Number|String} day - the day of date that gives the week of the year
     * @returns {Number} the week of the Jalali year
     */
    const getWeekOfJYear = (year, month, day) => {
        let dayOfYear = getDayOfJYear(month, day);
        let gDate = jtg(year || this.d.year);
        dayOfYear += getDayOfWeek(gDate, 'fa', 'array');
        return Math.ceil(dayOfYear / 7);
    }

    /**
     * get the week of the Gregorian year
     * @param {Null|Number|String} [year=Date.getFullYear()] - the year of date that gives the week of the year
     * @param {Null|Number|String} [month=Date.getMonth() + 1] - the month of date that gives the week of the year
     * @param {Null|Number|String} [day=Date.getDate()] - the day of date that gives the week of the year
     * @returns {Number} the week of the Gregorian year
     */
    const getWeekOfGYear = (year, month, day) => {
        let dayOfYear = getDayOfGYear(year, month, day);
        year = year || jtg(this.d.year).getFullYear();
        let gDate = new Date(year, 0, 1);
        dayOfYear += getDayOfWeek(gDate, 'en', 'array');
        return Math.ceil(dayOfYear / 7);
    }

    /**
     * returns the ordinal number of that number sent to it
     * @param {Number} number - the number that gives ordinal number --> from 1 to 366
     * @param {'fa','en'} locale - locale of ordinal number
     * @param {?Number} mode  - 'fa' locale have two mode of ordinal number
     * @returns {String} ordinal number
     * @example 1st | اول | اولین
     */
    const ordinalNumber = (number, locale = "fa", mode = 1) => {
        if (locale != 'fa') mode = ''
        return ORDINALNUMBERS[locale + mode][number];
    }

    /**
     * add a prefix to the text in the number of characters that the text has less
     * @param {String|Number} text a text need prefix
     * @param {Number} length length of text
     * @param {String} [prefix=0] - string for add before of text
     * @returns {String} text with or wihtout prefix
     */
    const addPrefix = (text, length, prefix = '0') => {
        return prefix.repeat(length - String(text).length) + text;
    }

    /**
     * make error and delete this.d
     * @param {String} errorText - Error Text
     * @returns {PersianDate} make error and return class
     */
    const showError = (errorText) => {
        delete this.d;
        this.error = errorText;
        return this;
    }

    /**
     * make current date in persian calendar
     * @returns {PersianDate} make current date and return class
     */
    PersianDate.prototype.now = function () {
        if (this.error) {
            delete this.error;
            this.d = {};
        }
        [this.d.year, this.d.month, this.d.date, this.d.hour, this.d.minute, this.d.second, this.d.millisecond] = gtj();
        return this;
    }

    /**
     * set persian date from Gregorian date
     * @param {...Number|Date|Array|Null} date - the date that convert to persian date
     * @returns {PersianDate|Error} if date valid, return class with persian date
     */
    PersianDate.prototype.setDate = function (...date) {
        if (this.error) {
            delete this.error;
            this.d = {};
        }
        date = new Date(...date);
        if (date == 'Invalid Date')
            return showError('تاریخ نامعتبر');
        [this.d.year, this.d.month, this.d.date, this.d.hour, this.d.minute, this.d.second, this.d.millisecond] = gtj(date);
        return this;
    }

    /**
     * convert a string of date or array of date or object of date to PersianDate
     * @param {String|Array|Object|Number} year - this param must be string of date or array of date or Object from date or year
     * @param {String|Number} year.y - year of date
     * @param {Null|String|Number} year.year - year of date
     * @param {Null|String|Number} year.years - year of date
     * @param {Null|String|Number} year.M - month of date
     * @param {Null|String|Number} year.month - month of date
     * @param {Null|String|Number} year.months - month of date
     * @param {Null|String|Number} year.d - day of date
     * @param {Null|String|Number} year.day - day of date
     * @param {Null|String|Number} year.days - day of date
     * @param {Null|String|Number} year.date - day of date
     * @param {Null|String|Number} year.h - hour of date
     * @param {Null|String|Number} year.hour - hour of date
     * @param {Null|String|Number} year.hours - hour of date
     * @param {Null|String|Number} year.m - minute of date
     * @param {Null|String|Number} year.minute - minute of date
     * @param {Null|String|Number} year.minutes - minute of date
     * @param {Null|String|Number} year.s - second of date
     * @param {Null|String|Number} year.second - second of date
     * @param {Null|String|Number} year.seconds - second of date
     * @param {Null|String|Number} year.ms - millisecond of date
     * @param {Null|String|Number} year.millisecond - millisecond of date
     * @param {Null|String|Number} year.milliseconds - millisecond of date
     * @param {Null|Number|String} month month of date
     * @param {Null|Number|String} day day of date
     * @param {Null|Number|String} hour hour of date
     * @param {Null|Number|String} minute minute of date
     * @param {Null|Number|String} second second of date
     * @param {Null|Number|String} millisecond millisecond of date
     * @returns {PersianDate|Error} if date valid, return class with persian date
     */
    PersianDate.prototype.parse = function (year, month, day, hour, minute, second, millisecond) {
        if (this.error) {
            delete this.error;
            this.d = {};
        }
        if (typeof year == 'string' && year.search('\\/| |-|\\.|,|:') != -1)
            [year, month, day, hour, minute, second, millisecond] = year.split(/[/ -.,:\\]/);
        if (Object.prototype.toString.call(year) === '[object Array]') // if type of year is Array
            [year, month, day, hour, minute, second, millisecond] = year;
        if (Object.prototype.toString.call(year) === '[object Object]')  // if type of year is Object
            [
                year,
                month,
                day,
                hour,
                minute,
                second,
                millisecond
            ] = [
                    year.y || year.year || year.years,
                    year.M || year.month || year.months || 1,
                    year.d || year.day || year.days || year.date || 1,
                    year.h || year.hour || year.hours || 1,
                    year.m || year.minute || year.minutes || 0,
                    year.s || year.second || year.seconds || 0,
                    year.ms || year.millisecond || year.milliseconds || 0,
                ];
        //plus sign before a variable, convert variable to int
        this.d.year = +year;
        this.d.month = +month || 1;
        this.d.date = +day || 1;
        this.d.hour = +hour || 0;
        this.d.minute = +minute || 0;
        this.d.second = +second || 0;
        this.d.millisecond = +millisecond || 0;

        if (!this.isValid())
            return showError('تاریخ نامعتبر');
        return this;
    }

    /**
     * receives year and determined that is leap year or not
     * @param {?Number} year - the year to be determined is a leap or not
     * @returns {Boolean} if is leap year, returns true
     */
    PersianDate.prototype.isLeapYear = function (year = this.d.year) {
        if (this.error)
            return this;
        let array = year > 1342 ? [1, 5, 9, 13, 17, 22, 26, 30] : [1, 5, 9, 13, 17, 21, 26, 30];
        let remainder = year % 33;
        return array.includes(remainder);
    }

    /**
     * checks the persian date and time
     * @param {?Number} year - year of date that will be checked
     * @param {?Number} month - month of date that will be checked
     * @param {?Number} day - day of date that will be checked
     * @param {?Number} hour - hour of date that will be checked
     * @param {?Number} minute - minute of date that will be checked
     * @param {?Number} second - second of date that will be checked
     * @param {?Number} millisecond - millisecond of date that will be checked
     * @returns {Boolean} if is valid, returns true
     */
    PersianDate.prototype.isValid =
        function (year, month, day, hour, minute, second, millisecond) {
            if (this.error)
                return false;
            let result = this.isValidDate(year, month, day);
            if (result)
                return this.isValidTime(hour, minute, second, millisecond);
            return false;
        }

    /**
     * checks the persian date
     * @param {?Number} year - year of date that will be checked
     * @param {?Number} month - month of date that will be checked
     * @param {?Number} day - day of date that will be checked
     * @returns {Boolean} if is valid date, returns true
     */
    PersianDate.prototype.isValidDate =
        function (year = this.d.year, month = this.d.month, day = this.d.date) {
            if (this.error)
                return false;
            if ([year, month, day].some(e => String(e).search(/null|undifind|NaN/) != -1))
                return false;
            if (year < 0 || month > 12 || month < 1 || day > 31 || day < 1)
                return false;
            if (month >= 7 && month <= 11 && day == 31)
                return false;
            if (month == 12 && day == 31)
                return false;
            if (month == 12 && day == 30 && !this.isLeapYear(year))
                return false;
            return true;
        }

    /**
     * checks the time
     * @param {?Number} hour - hour of date that will be checked
     * @param {?Number} minute - minute of date that will be checked
     * @param {?Number} second - second of date that will be checked
     * @param {?Number} millisecond - millisecond of date that will be checked
     * @returns {Boolean} if is valid time, returns true
     */
    PersianDate.prototype.isValidTime =
        function (hour = this.d.hour, minute = this.d.minute, second = this.d.second, millisecond = this.d.millisecond) {
            if (this.error)
                return false;
            if ([hour, minute, second, millisecond].some(e => String(e).search(/null|undifind|NaN/) != -1))
                return false;
            if (hour < 0 || hour > 23)
                return false;
            if (minute < 0 || minute > 59)
                return false;
            if (second < 0 || second > 59)
                return false;
            if (millisecond < 0 || millisecond > 999)
                return false;
            return true;
        }

    /**
     * returns number of days in month
     * @param {?Number} year - year of date that returns number of days in month
     * @param {?Number} month - month of date that returns number of days in month
     * @returns {Number} number of days in month
     */
    PersianDate.prototype.getDaysInMonth =
        function (year = this.d.year, month = this.d.month) {
            if (this.error)
                return this;
            if (month >= 1 && month <= 6)
                return 31;
            if (month > 6 && month <= 11 || this.isLeapYear(year)) {
                return 30;
            }
            return 29;
        }

    /**
     * add to year
     * @param {?Number|String} [year=1] - a number for add with year
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.addYear = function (year = 1, checkDate = true) {
        if (!year || this.error)
            return this;
        if (year < 0) // if the number was negative, send to subtractYear method
            return this.subtractYear(Math.abs(year));
        this.d.year += +year; //plus sign before a variable, convert variable to int
        while (checkDate && !this.isValidDate())
            this.subtractDay(1, false);
        return this;
    }

    /**
     * add to month
     * @param {?Number|String} [month=1] - a number for add with month
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.addMonth = function (month = 1, checkDate = true) {
        if (!month || this.error)
            return this;
        if (month < 0) // if the number was negative, send to subtractMonth method
            return this.subtractMonth(Math.abs(month));
        month = +month; //plus sign before a variable, convert variable to int

        let monthToStartNewYear = 12 - this.d.month + 1; //monthToStartNewYear -> Number of month to start of new year
        if (monthToStartNewYear > month) {
            this.d.month += month;
        } else {
            this.addYear(1, false);
            this.d.month = 1;
            month -= monthToStartNewYear;
            while (month >= 12) {
                month -= 12;
                this.addYear(1, false);
            }
            if (month != 0) {
                this.d.month += month;
            }
        }

        while (checkDate && !this.isValidDate())
            this.subtractDay(1, false);
        return this;
    }

    /**
     * add to day
     * @param {?Number|String} [day=1] - a number for add with day
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.addDay = function (day = 1, checkDate = true) {
        if (!day || this.error)
            return this;
        if (day < 0) // if the number was negative, send to subtractDay method
            return this.subtractDay(Math.abs(day));
        day = +day; //plus sign before a variable, convert variable to int

        let dayToStartNextMonth = this.getDaysInMonth() - this.d.date + 1; // dayToStartNextMonth -> Number of day to start of next month
        if (dayToStartNextMonth > day) {
            this.d.date += day;
        } else {
            this.addMonth(1, false);
            this.d.date = 1;
            day -= dayToStartNextMonth;
            while (day >= this.getDaysInMonth()) {
                day -= this.getDaysInMonth();
                this.addMonth(1, false);
            }
            if (day != 0) {
                this.d.date += day;
            }
        }

        while (checkDate && !this.isValidDate())
            this.subtractDay(1, false);
        return this;
    }

    /**
     * add to quarter
     * @param {?Number|String} [quarter=1] - a number for add with quarter
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.addQuarter = function (quarter = 1, checkDate = true) {
        if (!quarter || this.error)
            return this;
        if (quarter < 0) // if the number was negative, send to subtractQuarter method
            return this.subtractQuarter(Math.abs(quarter));
        quarter = +quarter; //plus sign before a variable, convert variable to int
        return this.addMonth(quarter * 3, checkDate);
    }

    /**
     * add to week
     * @param {?Number|String} [week=1] - a number for add with week
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.addWeek = function (week = 1, checkDate = true) {
        if (!week || this.error)
            return this;
        if (week < 0) // if the number was negative, send to subtractWeek method
            return this.subtractWeek(Math.abs(week));
        week = +week; //plus sign before a variable, convert variable to int
        return this.addDay(week * 7, checkDate);
    }

    /**
     * add to hour
     * @param {?Number|String} [hour=1] - a number for add with hour
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.addHour = function (hour = 1, checkDate = true) {
        if (!hour || this.error)
            return this;
        if (hour < 0) // if the number was negative, send to subtractHour method
            return this.subtractHour(Math.abs(hour));
        hour = +hour; //plus sign before a variable, convert variable to int
        while (hour >= 24) {
            hour -= 24;
            this.addDay(1, false);
        }
        let hourToNextDay = 24 - this.d.hour; // hourToNextDay -> Number of hour to start of next day
        if (hour >= hourToNextDay) {
            this.addDay(1, false);
            hour -= hourToNextDay;
            this.d.hour = hour;
        } else
            this.d.hour += hour;

        while (checkDate && !this.isValidTime())
            this.subtractMillisecond(1, false);
        return this;
    }

    /**
     * add to minute
     * @param {?Number|String} [minute=1] - a number for add with minute
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.addMinute = function (minute = 1, checkDate = true) {
        if (!minute || this.error)
            return this;
        if (minute < 0) // if the number was negative, send to subtractMinute method
            return this.subtractMinute(Math.abs(minute));
        minute = +minute; //plus sign before a variable, convert variable to int
        while (minute >= 60) {
            this.addHour(1, false);
            minute -= 60;
        }
        let minuteToNextHour = 60 - this.d.minute; // minuteToNextHour -> Number of minute to start of next hour
        if (minute >= minuteToNextHour) {
            this.addHour(1, false);
            minute -= minuteToNextHour;
            this.d.minute = minute;
        } else
            this.d.minute += minute;

        while (checkDate && !this.isValidTime())
            this.subtractMillisecond(1, false);
        return this;
    }

    /**
     * add to second
     * @param {?Number|String} [second=1] - a number for add with second
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.addSecond = function (second = 1, checkDate = true) {
        if (!second || this.error)
            return this;
        if (second < 0) // if the number was negative, send to subtractSecond method
            return this.subtractSecond(Math.abs(second));
        second = +second; //plus sign before a variable, convert variable to int
        while (second >= 60) {
            this.addMinute(1, false);
            second -= 60;
        }
        let secondToNextMinute = 60 - this.d.second; // secondToNextMinute -> Number of second to start of next Minute
        if (second >= secondToNextMinute) {
            this.addMinute(1, false);
            second -= secondToNextMinute;
            this.d.second = second;
        } else
            this.d.second += second;

        while (checkDate && !this.isValidTime())
            this.subtractMillisecond(1, false);
        return this;
    }

    /**
     * add to millisecond
     * @param {?Number|String} [millisecond=1] - a number for add with millisecond
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.addMillisecond = function (millisecond = 1, checkDate = true) {
        if (!millisecond || this.error)
            return this;
        if (millisecond < 0) // if the number was negative, send to subtractMillisecond method
            return this.subtractMillisecond(Math.abs(millisecond));
        millisecond = +millisecond; //plus sign before a variable, convert variable to int
        while (millisecond >= 1000) {
            this.addSecond(1, false);
            millisecond -= 1000;
        }
        let millisecondToNextSecond = 1000 - this.d.millisecond; // millisecondToNextSecond -> Number of milllisecond to start of next second
        if (millisecond >= millisecondToNextSecond) {
            this.addSecond(1, false);
            millisecond -= millisecondToNextSecond;
            this.d.millisecond = millisecond;
        } else
            this.d.millisecond += millisecond;

        while (checkDate && !this.isValidTime())
            this.subtractMillisecond(1, false);
        return this;
    }

    /**
     * subtract from year
     * @param {?Number|String} [year=1] - a number for subtract from year
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.subtractYear = function (year = 1, checkDate = true) {
        if (!year || this.error)
            return this;
        this.d.year -= Math.abs(year); //plus sign before a variable, convert variable to int
        while (checkDate && !this.isValidDate())
            this.subtractDay(1, false);
        return this;
    }

    /**
     * subtract from month
     * @param {?Number|String} [month=1] - a number for subtract from month
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.subtractMonth = function (month = 1, checkDate = true) {
        if (!month || this.error)
            return this;
        month = Math.abs(month); //plus sign before a variable, convert variable to int
        let pastMonth = this.d.month; //pastMonth -> Number of month that is past
        if (pastMonth > month) {
            this.d.month -= month;
        } else {
            this.subtractYear(1, false);
            this.d.month = 12;
            month -= pastMonth;
            while (month >= 12) {
                this.subtractYear(1, false);
                month -= 12;
            }
            if (month != 0) {
                this.d.month -= month;
            }
        }

        while (checkDate && !this.isValidDate())
            this.subtractDay(1, false);
        return this;
    }

    /**
     * subtract from day
     * @param {?Number|String} [day=1] - a number for subtract from day
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.subtractDay = function (day = 1, checkDate = true) {
        if (!day || this.error)
            return this;
        day = Math.abs(day);
        let pastDays = this.d.date; // pastDays -> Number of days that is past
        if (pastDays > day) {
            this.d.date -= day;
        } else {
            this.subtractMonth(1, false);
            this.d.date = this.getDaysInMonth();
            day -= pastDays;
            while (day >= this.getDaysInMonth()) {
                day -= this.getDaysInMonth();
                this.subtractMonth(1, false);

            }
            this.d.date = this.getDaysInMonth() - day;
        }

        while (checkDate && !this.isValidDate())
            this.subtractDay(1, false);
        return this;
    }

    /**
     * subtract from quarter
     * @param {?Number|String} [quarter=1] - a number for subtract from quarter
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.subtractQuarter = function (quarter = 1, checkDate = true) {
        if (!quarter || this.error)
            return this;
        quarter = Math.abs(quarter);
        return this.subtractMonth(quarter * 3, checkDate);
    }

    /**
     * subtract from week
     * @param {?Number|String} [week=1] - a number for subtract from week
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.subtractWeek = function (week = 1, checkDate = true) {
        if (!week || this.error)
            return this;
        week = Math.abs(week);
        return this.subtractDay(week * 7, checkDate);
    }

    /**
     * subtract from hour
     * @param {?Number|String} [hour=1] - a number for subtract from hour
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.subtractHour = function (hour = 1, checkDate = true) {
        if (!hour || this.error)
            return this;
        hour = Math.abs(hour);
        while (hour >= 24) {
            hour -= 24;
            this.subtractDay(1, false);
        }
        let pastHours = this.d.hour; // pastHours -> Number of hours that is past
        if (hour > pastHours) {
            this.subtractDay(1, false);
            hour -= pastHours;
            this.d.hour = 24 - hour;
        } else
            this.d.hour -= hour;

        while (checkDate && !this.isValidTime())
            this.subtractMillisecond(1, false);
        return this;
    }

    /**
     * subtract from minute
     * @param {?Number|String} [minute=1] - a number for subtract from minute
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.subtractMinute = function (minute = 1, checkDate = true) {
        if (!minute || this.error)
            return this;
        minute = Math.abs(minute);
        while (minute >= 60) {
            minute -= 60;
            this.subtractHour(1, false);
        }
        let pastMinute = this.d.minute; // pastMinutes -> Number of minutes that is past
        if (minute > pastMinute) {
            this.subtractHour(1, false);
            minute -= pastMinute;
            this.d.minute = 60 - minute;
        } else
            this.d.minute -= minute;

        while (checkDate && !this.isValidTime())
            this.subtractMillisecond(1, false);
        return this;
    }

    /**
     * subtract from second
     * @param {?Number|String} [second=1] - a number for subtract from second
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.subtractSecond = function (second = 1, checkDate = true) {
        if (!second || this.error)
            return this;
        second = Math.abs(second);
        while (second >= 60) {
            second -= 60;
            this.subtractMinute(1, false);
        }
        let pastSeconds = this.d.second; // pastSeconds -> Number of seconds that is past
        if (second > pastSeconds) {
            this.subtractMinute(1, false);
            second -= pastSeconds;
            this.d.second = 60 - second;
        } else
            this.d.second -= second;

        while (checkDate && !this.isValidTime())
            this.subtractMillisecond(1, false);
        return this;
    }

    /**
     * subtract from millisecond
     * @param {?Number|String} [millisecond=1] - a number for subtract from millisecond
     * @param {?Boolean} checkDate checks the result that the date is valid,
     * If not valid, it will be deducted from the day to be valid
     * @returns {PersianDate} return class with new date
     */
    PersianDate.prototype.subtractMillisecond = function (millisecond = 1, checkDate = true) {
        if (!millisecond || this.error)
            return this;
        millisecond = Math.abs(millisecond);
        while (millisecond >= 1000) {
            millisecond -= 1000;
            this.subtractSecond(1, false);
        }
        let pastMilliseconds = this.d.millisecond; // pastMilliseconds -> Number of milliseconds that is past
        if (millisecond > pastMilliseconds) {
            this.subtractSecond(1, false);
            millisecond -= pastMilliseconds;
            this.d.millisecond = 1000 - millisecond;
        } else
            this.d.millisecond -= millisecond;

        while (checkDate && !this.isValidTime())
            this.subtractMillisecond(1, false);
        return this;
    }

    /**
     * returns date as string with specify format
     * @param {?String} [format=date] - formatting date to string
     * @returns {String} date string
     */
    PersianDate.prototype.toString = function (format = 'date') {
        if (this.error)
            return this;
        format = format.replace(/datetime/ig, 'jYYYY/jMM/jDD HH:mm')
            .replace(/date/ig, 'jYYYY/jMM/jDD')
            .replace(/time/ig, 'HH:mm');
        let matchedFormat = format.match(REGEX['format'])
        let dateString = '';
        for (const i of matchedFormat) {
            dateString += format.substring(0, format.indexOf(i))
            if (i.search(/Y|y/) != -1)
                dateString += this.year(i);
            else if (i.search(/Q/) != -1)
                dateString += this.quarter(i);
            else if (i.search(/M/) != -1)
                dateString += this.month(i);
            else if (i.search(/Q/) != -1)
                dateString += this.quarter(i);
            else if (i.search(/D|d/) != -1)
                dateString += this.date(i);
            else if (i.search(/W|w/) != -1)
                dateString += this.week(i);
            else if (i.search(/H|h|k/) != -1)
                dateString += this.hour(i);
            else if (i.search(/m/) != -1)
                dateString += this.minute(i);
            else if (i.search(/s/) != -1)
                dateString += this.second(i);
            else if (i.search(/c|C/) != -1)
                dateString += this.millisecond(i);
            else if (i.search(/t/) != -1)
                dateString += this.timestamp();
            else if (i.search(/a|A/) != -1)
                dateString += TIMETYPE(this.d.hour, i);
            format = format.substr(format.indexOf(i) + i.length);
        }
        return String(dateString);
    }

    /**
     * get or set year
     * @param {Null|Number|String} [format=jYYYY] - a number for set the year or a format for formatting
     * @returns {PersianDate|String|Number} if set the year, returns class,
     * else returns a number or string from year
     */
    PersianDate.prototype.year = function (format = 'jYYYY') {
        if (this.error)
            return this;
        format = String(format).trim();
        if (REGEX['isNumeric'].test(format)) {
            this.d.year = +format;
            if (!this.isValidDate()) {
                return showError('تاریخ نامعتبر');
            }
            return this;
        } else {
            if (format == 'jYYYY' || format == 'jy')
                return this.d.year;
            if (format == 'jYY')
                return String(this.d.year).slice(-2);
            let gDateYear = jtg().getFullYear();
            if (format == 'YYYY' || format == 'y')
                return gDateYear;
            if (format == 'YY')
                return String(gDateYear).slice(-2);
            return this.d.year;
        }

    }

    /**
     * get or set month
     * @param {Null|Number|String} [format=jM] - a number for set the month or a format for formatting
     * @returns {PersianDate|String|Number} if set the month, returns class,
     * else returns a number or string from month
     */
    PersianDate.prototype.month = function (format = 'jM') {
        if (this.error)
            return this;
        format = String(format).trim();
        if (REGEX['isNumeric'].test(format)) {
            if (format < 1 || format > 12)
                return showError('تاریخ نامعتبر');
            this.d.month = +format;
            while (!this.isValidDate()) {
                this.subtractDay(1, false);
            }
            return this;
        } else {
            if (format == 'jMM')
                return addPrefix(this.d.month, 2)
            if (format == 'jM')
                return this.d.month;
            if (format == 'jMMMM' || format == 'jMMM')
                return MONTHS['fa'][this.d.month];
            if (format == 'jMo')
                return ordinalNumber(this.d.month);
            if (format == 'jMO')
                return ordinalNumber(this.d.month, 'fa', 2);
            let gDateMonth = jtg().getMonth() + 1;
            if (format == 'M')
                return gDateMonth;
            if (format == 'MM')
                return addPrefix(gDateMonth, 2);
            if (format == 'MMMM')
                return MONTHS['en'][gDateMonth];
            if (format == 'Mo' || format == 'MO')
                return ordinalNumber(gDateMonth, 'en');
            if (format == 'MMM')
                return MONTHS['en'][gDateMonth].slice(0, 3);
            return this.d.month;
        }

    }

    /**
     * get or set day in month
     * @param {Null|Number|String} [format=jD] - a number for set the day in month or a format for formatting
     * @returns {PersianDate|String|Number} if set the day, returns class,
     * else returns a number or string from day
     */
    PersianDate.prototype.date = function (format = 'jD') {
        if (this.error)
            return this;
        format = String(format).trim();
        if (REGEX['isNumeric'].test(format)) {
            if (format < 1 || format > 31)
                return showError('تاریخ نامعتبر');
            this.d.date = +format;
            while (!this.isValidDate()) {
                this.subtractDay(1, false);
            }
            return this;
        } else {
            //---------- Day of Month ----------//
            if (format == 'jDD')
                return addPrefix(this.d.date, 2);
            if (format == 'jD')
                return this.d.date;
            if (format == 'jDo')
                return ordinalNumber(this.d.date);
            if (format == 'jDO')
                return ordinalNumber(this.d.date, 'fa', 2);
            //---------- Day of Week ----------//
            let gDate = jtg();
            if (format == 'jdddd' || format == 'jddd')
                return getDayLabel(gDate);
            if (format == 'jdd')
                return getDayLabel(gDate).slice(0, 1);
            let dayOfWeek = getDayOfWeek(gDate);
            if (format == 'jdo')
                return ordinalNumber(dayOfWeek);
            if (format == 'jdO')
                return ordinalNumber(dayOfWeek, 'fa', 2);
            if (format == 'jd')
                return getDayOfWeek(gDate, 'fa', 'array');
            if (format == 'jde')
                return dayOfWeek;
            //---------- Day of Year ----------//
            let dayOfYear = getDayOfJYear();
            if (format == 'jDDDD')
                return addPrefix(dayOfYear, 3);
            if (format == 'jDDD')
                return dayOfYear;
            if (format == 'jDDDo')
                return ordinalNumber(dayOfYear);
            if (format == 'jDDDO')
                return ordinalNumber(dayOfYear, 'fa', 2);
            //---------- Day of Month ----------//
            if (format == 'DD')
                return addPrefix(gDate.getDate(), 2);
            if (format == 'D')
                return gDate.getDate();
            if (format == 'Do' || format == 'DO')
                return ordinalNumber(gDate.getDate(), 'en');
            //---------- Day of Week ----------//
            if (format == 'dddd')
                return getDayLabel(gDate, 'en');
            if (format == 'ddd')
                return getDayLabel(gDate, 'en').slice(0, 3);
            if (format == 'dd')
                return getDayLabel(gDate, 'en').slice(0, 2);
            dayOfWeek = getDayOfWeek(gDate, 'en');
            if (format == 'do' || format == 'dO')
                return ordinalNumber(dayOfWeek, 'en');
            if (format == 'd')
                return getDayOfWeek(gDate, 'en', 'array');
            if (format == 'de')
                return dayOfWeek;
            dayOfYear = getDayOfGYear(gDate);
            //---------- Day of Year ----------//
            if (format == 'DDDD')
                return addPrefix(dayOfYear, 3);
            if (format == 'DDD')
                return dayOfYear;
            if (format == 'DDDo' || format == 'DDDO')
                return ordinalNumber(dayOfYear, 'en');
            return this.d.date;
        }

    }

    /**
     * get or set quarter
     * @param {Null|Number|String} [format=jQ] - a number for set the quarter or a format for formatting
     * @returns {PersianDate|String|Number} if set the quarter, returns class,
     * else returns a number or string from quarter
     */
    PersianDate.prototype.quarter = function (format = 'jQ') {
        if (this.error)
            return this;
        format = String(format).trim();
        if (REGEX['isNumeric'].test(format)) {
            if (format < 1 || format > 4)
                return showError('تاریخ نامعتبر');
            this.d.month = +format * 3 - 2;
            while (!this.isValidDate()) {
                this.subtractDay(1, false);
            }
            return this;
        } else {
            let quarter = Math.ceil(this.d.month / 3);
            if (format == 'jQ')
                return quarter;
            if (format == 'jQo')
                return ordinalNumber(quarter);
            if (format == 'jQO')
                return ordinalNumber(quarter, 'fa', 2);
            quarter = Math.ceil((jtg().getMonth() + 1) / 3);
            if (format == 'Q')
                return quarter;
            if (format == 'Qo' || format == 'QO')
                return ordinalNumber(quarter, 'en');
            return quarter;
        }
    }

    /**
     * get or set week
     * @param {Null|Number|String} [format=jw] - a number for set the week or a format for formatting
     * @returns {PersianDate|String|Number} if set the week, returns class,
     * else returns a number or string from week
     */
    PersianDate.prototype.week = function (format = 'jw') {
        if (this.error)
            return this;
        format = String(format).trim();
        if (REGEX['isNumeric'].test(format)) {
            if (format < 1 || format > 53)
                return showError('تاریخ نامعتبر');
            let gDateFirstOfYear = jtg(this.d.year);
            let firstOfYear = getDayOfWeek(gDateFirstOfYear, 'fa', 'array');// day of first date of year --> 2020-1-1 -> Saturday -> 6
            let dayOfYear = +format * 7 - firstOfYear; // number of day that past from this week
            let month = 1;
            while (this.getDaysInMonth(this.d.year, month) <= dayOfYear) {
                dayOfYear -= this.getDaysInMonth(this.d.year, month);
                month++;
            }
            this.d.month = dayOfYear == 0 ? --month : month;
            if (dayOfYear <= 6 && month == 1)
                this.d.date = 1;
            else {
                let gDate = jtg();
                this.d.date = dayOfYear || this.getDaysInMonth(this.d.year, month);
                dayOfYear = 6 - getDayOfWeek(gDate, 'fa', 'array');
                this.subtractDay(dayOfYear, false);
            }
            ;
            while (!this.isValidDate()) {
                this.subtractDay(1, false);
            }
            return this;
        } else {
            let weekOfYear = getWeekOfJYear();
            if (format == 'jw' || format == 'jW')
                return weekOfYear;
            if (format == 'jww' || format == 'jWW')
                return addPrefix(weekOfYear, 2);
            if (format == 'jwo' || format == 'jWo')
                return ordinalNumber(weekOfYear);
            if (format == 'jwO' || format == 'jWO')
                return ordinalNumber(weekOfYear, 'fa', 2);
            weekOfYear = getWeekOfGYear();
            if (format == 'w' || format == 'W')
                return weekOfYear;
            if (format == 'ww' || format == 'WW')
                return addPrefix(weekOfYear, 2);
            if (format == 'wo' || format == 'Wo' || format == 'wO' || format == 'WO')
                return ordinalNumber(weekOfYear, 'en');
            return weekOfYear;
        }
    }

    /**
     * get or set hour
     * @param {Null|Number|String} [format=H] - a number for set the hour or a format for formatting
     * @returns {PersianDate|String|Number} if set the hour, returns class,
     * else returns a number or string from hour
     */
    PersianDate.prototype.hour = function (format = 'H') {
        if (this.error)
            return this;
        format = String(format).trim();
        if (REGEX['isNumeric'].test(format)) {
            if (format < 0 || format > 23)
                return showError('تاریخ نامعتبر');
            this.d.hour = +format;
            while (!this.isValidTime())
                this.subtractMillisecond(1, false);
            return this;
        } else {
            let hour = this.d.hour;
            if (format == 'H')
                return hour;
            if (format == 'HH')
                return addPrefix(hour, 2);
            if (format == 'k')
                return hour || 24;
            if (format == 'kk')
                return addPrefix(hour || 24, 2);
            hour = hour > 12 ? hour - 12 : hour;
            if (format == 'h')
                return hour;
            if (format == 'hh')
                return addPrefix(hour, 2);
            return hour;
        }
    }

    /**
     * get or set minute
     * @param {Null|Number|String} [format=m] - a number for set the minute or a format for formatting
     * @returns {PersianDate|String|Number} if set the minute, returns class,
     * else returns a number or string from minute
     */
    PersianDate.prototype.minute = function (format = 'm') {
        if (this.error)
            return this;
        format = String(format).trim();
        if (REGEX['isNumeric'].test(format)) {
            if (format < 0 || format > 59)
                return showError('تاریخ نامعتبر');
            this.d.minute = +format;
            while (!this.isValidTime())
                this.subtractMillisecond(1, false);
            return this;
        } else {
            if (format == 'm')
                return this.d.minute;
            if (format == 'mm')
                return addPrefix(this.d.minute, 2);
            return this.d.minute;
        }
    }

    /**
     * get or set second
     * @param {Null|Number|String} [format=s] - a number for set the second or a format for formatting
     * @returns {PersianDate|String|Number} if set the second, returns class,
     * else returns a number or string from second
     */
    PersianDate.prototype.second = function (format = 's') {
        if (this.error)
            return this;
        format = String(format).trim();
        if (REGEX['isNumeric'].test(format)) {
            if (format < 0 || format > 59)
                return showError('تاریخ نامعتبر');
            this.d.second = +format;
            while (!this.isValidTime())
                this.subtractMillisecond(1, false);
            return this;
        } else {
            if (format == 's')
                return this.d.second;
            if (format == 'ss')
                return addPrefix(this.d.second, 2);
            return this.d.second;
        }
    }

    /**
     * get or set millisecond
     * @param {Null|Number|String} [format=c] - a number for set the millisecond or a format for formatting
     * @returns {PersianDate|String|Number} if set the millisecond, returns class,
     * else returns a number or string from millisecond
     */
    PersianDate.prototype.millisecond = function (format = 'c') {
        if (this.error)
            return this;
        format = String(format).trim();
        if (REGEX['isNumeric'].test(format)) {
            if (format < 0 || format > 999)
                return showError('تاریخ نامعتبر');
            this.d.millisecond = +format;
            while (!this.isValidTime())
                this.subtractMillisecond(1, false);
            return this;
        } else {
            if (format == 'CCC' || format == 'c')
                return this.d.millisecond;
            if (format == 'CCCC')
                return addPrefix(this.d.millisecond, 3);
            return this.d.millisecond;
        }
    }

    /**
     * get timestamp or set date from timestamp
     * @param {Null|Number|String} value - a number for set the millisecond
     * @returns {PersianDate|Number} if set the timestamp, returns class,
     * else returns timestamp (number)
     */
    PersianDate.prototype.timestamp = function (value) {
        if (this.error)
            return this;
        if (value) {
            return this.setDate(+String(value).trim());
        } else {
            return jtg().getTime();
        }
    }

    if (arguments.length)
        this.setDate(...arguments);
    else
        this.now();

}

export default PersianDate

////////////////////--- Thank You For Your Attention ---////////////////////
////////////////////------ I'm Will Be Very Happy ------////////////////////
////////////////////---- To Get To Know You Better! ----////////////////////
////////////////////- Email: Alibeikialireza@gmail.com -////////////////////
////////////////////--------- Have A Good Day  ---------////////////////////