class CountdownTimer {
    constructor(deadline, cbChange, cbComplete) {
        this._deadline = deadline;
        this._cbChange = cbChange;
        this._cbComplete = cbComplete;
        this._timerId = null;
        this._out = {
            days: '', hours: '', minutes: '', seconds: '',
            daysTitle: '', hoursTitle: '', minutesTitle: '', secondsTitle: ''
        };
        this._start();
    }
    static declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    _start() {
        this._calc();
        this._timerId = setInterval(this._calc.bind(this), 1000);
    }
    _calc() {
        const diff = this._deadline - new Date();
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        this._out.days = days < 10 ? '0' + days : days;
        this._out.hours = hours < 10 ? '0' + hours : hours;
        this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
        this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
        this._out.daysTitle = CountdownTimer.declensionNum(days, ['День', 'Дня', 'Дней']);
        this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['Час', 'Часа', 'Часов']);
        this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['Минута', 'Минуты', 'Минут']);
        this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['Секунда', 'Секунды', 'Секунд']);
        this._cbChange ? this._cbChange(this._out) : null;
        if (diff <= 0) {
            clearInterval(this._timerId);
            this._cbComplete ? this._cbComplete() : null;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const elDays1 = document.querySelector('.timer-1 .timer__days');
    const elHours1 = document.querySelector('.timer-1 .timer__hours');
    const elMinutes1 = document.querySelector('.timer-1 .timer__minutes');
    const elSeconds1 = document.querySelector('.timer-1 .timer__seconds');
    const deadline1 = new Date(Date.now() + (60 * 1000 + 999));
    new CountdownTimer(deadline1, (timer) => {
        elDays1.textContent = timer.days;
        elHours1.textContent = timer.hours;
        elMinutes1.textContent = timer.minutes;
        elSeconds1.textContent = timer.seconds;
        elDays1.dataset.title = timer.daysTitle;
        elHours1.dataset.title = timer.hoursTitle;
        elMinutes1.dataset.title = timer.minutesTitle;
        elSeconds1.dataset.title = timer.secondsTitle;
    }, () => {
        document.querySelector('.timer-1 .timer__result').textContent = 'Ебать ты лох! Проебал минуту жизни!';
    });})