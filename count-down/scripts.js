var moment;
var $;
var AddSound = /** @class */ (function () {
    function AddSound() {
        this._songs = ['alexandra.mp3', 'birthday1.mp3'];
        this._started = false;
    }
    AddSound.prototype.start = function () {
        if (!this._started) {
            this._started = true;
            var index = this._randomNumber();
            var song = new Audio(this._songs[index]);
            song.loop = true;
            document.body.appendChild(song);
            song.play();
        }
    };
    AddSound.prototype._randomNumber = function () {
        var maxNr = this._songs.length;
        return Math.floor(Math.random() * maxNr); // from 0 to max number
    };
    return AddSound;
}());
var Count = /** @class */ (function () {
    function Count(date) {
        this.date = date;
    }
    Count.prototype.tick = function () {
        var _this = this;
        var to = moment(this.date);
        var duration = moment.duration(to.diff(moment()));
        var hours = duration.get('hours');
        var min = duration.get('minutes');
        var sec = duration.get('seconds');
        var days = duration.get('days');
        this.setDays(days);
        this.setHours(hours);
        this.setMinutes(min);
        this.setSeconds(sec);
        // do it again 
        setTimeout(function () {
            _this.tick();
        }, 1000);
    };
    Count.prototype.setDays = function (input) {
        var value = "" + input;
        var valueText = input !== 1 ? 'dagar' : 'dag';
        this._setDocumentText('count-down-days', value);
        this._setDocumentText('count-down-days-text', valueText);
    };
    Count.prototype.setHours = function (input) {
        var value = "" + input;
        var valueText = input !== 1 ? 'timmar' : 'timme';
        this._setDocumentText('count-down-hours', value);
        this._setDocumentText('count-down-hours-text', valueText);
    };
    Count.prototype.setMinutes = function (input) {
        var value = "" + input;
        var valueText = input !== 1 ? 'minuter' : 'minut';
        this._setDocumentText('count-down-min', value);
        this._setDocumentText('count-down-min-text', valueText);
    };
    Count.prototype.setSeconds = function (input) {
        var value = "" + input;
        var valueText = input !== 1 ? 'sekunder' : 'sekund';
        this._setDocumentText('count-down-sec', value);
        this._setDocumentText('count-down-sec-text', valueText);
    };
    Count.prototype._setDocumentText = function (id, value) {
        if (document.getElementById(id)) {
            document.getElementById(id).innerHTML = value;
        }
    };
    return Count;
}());
var pressedButton = false;
function startConfetti() {
    if (detectmob()) {
        return;
    }
    if (!pressedButton) {
        pressedButton = true;
        for (var i = 0; i < 250; i++) {
            create(i);
        }
    }
}
function detectmob() {
    if (window.innerWidth <= 800 && window.innerHeight <= 800) {
        return true;
    }
    else {
        return false;
    }
}
function create(i) {
    var width = Math.random() * 8;
    var height = width * 0.4;
    var colourIdx = Math.ceil(Math.random() * 3);
    var colour = "red";
    switch (colourIdx) {
        case 1:
            colour = "yellow";
            break;
        case 2:
            colour = "blue";
            break;
        default:
            colour = "red";
    }
    $('<div class="confetti-' + i + ' ' + colour + '"></div>').css({
        "width": width + "px",
        "height": height + "px",
        "top": -Math.random() * 20 + "%",
        "left": Math.random() * 100 + "%",
        "opacity": Math.random() + 0.5,
        "transform": "rotate(" + Math.random() * 360 + "deg)"
    }).appendTo('.wrapper');
    drop(i);
}
function drop(x) {
    $('.confetti-' + x).animate({
        top: "100%",
        left: "+=" + Math.random() * 15 + "%"
    }, Math.random() * 3000 + 3000, function () {
        reset(x);
    });
}
function reset(x) {
    $('.confetti-' + x).animate({
        "top": -Math.random() * 20 + "%",
        "left": "-=" + Math.random() * 15 + "%"
    }, 0, function () {
        drop(x);
    });
}
