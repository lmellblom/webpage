var moment: any;
var $: any;

class AddSound {
    private _songs = ['alexandra.mp3', 'birthday1.mp3'];
    private _started = false;
    constructor() {
    }

    public start() {
        if (!this._started) {
            this._started = true;
            const index = this._randomNumber();
            var song = new Audio(this._songs[index]);
            song.loop = true;
            document.body.appendChild(song);​
            song.play();
        }
    }

    private _randomNumber(): number {
        const maxNr = this._songs.length;
        return Math.floor(Math.random() * maxNr); // from 0 to max number
    }
}

class Count {
    date: Date;

    constructor(date: Date) {
        this.date = date;
        moment.locale('sv');
    }

    tick() {
        const to = moment(this.date);
        const duration = moment.duration(to.diff(moment()));

        // check if same date or not
        const isBefore = moment().isBefore(moment(this.date), 'day');

        if (isBefore) {
            const hours = duration.get('hours');
            const min = duration.get('minutes');
            const sec = duration.get('seconds');
            const days = duration.get('days');
    
            this.setDays(days);
            this.setHours(hours);
            this.setMinutes(min);
            this.setSeconds(sec);
        } else {
            const isSame = moment().isSame(moment(this.date), 'day');
            if (isSame) {
                this.setIfSameDay();
            }

            const isAfter = moment().isAfter(moment(this.date), 'day');
            if (isAfter) {
                this.setIfDayHasBeen();
            }
        }

        // do it again 
        setTimeout(() => {
            this.tick();
        }, 1000);
    }

    setIfSameDay() {
        this._setDocumentDisplay('count-down', 'none');
        this._setDocumentDisplay('the-day', 'block');
    }

    setIfDayHasBeen() {
        const daySince = moment().to(this.date);

        this._setDocumentDisplay('the-day-has-been', 'block');
        this._setDocumentDisplay('count-down', 'none');
        this._setDocumentDisplay('sound-surprise', 'none');

        this._setDocumentText('past-days', daySince);
    }

    setDays(input: number) {
        const value: string = `${input}`;
        const valueText = input !== 1 ? 'dagar' : 'dag';

        this._setDocumentText('count-down-days', value);
        this._setDocumentText('count-down-days-text', valueText);
    }

    setHours(input: number) {
        const value: string = `${input}`;
        const valueText = input !== 1 ? 'timmar' : 'timme';

        this._setDocumentText('count-down-hours', value);
        this._setDocumentText('count-down-hours-text', valueText);
    }

    setMinutes(input: number) {
        const value: string = `${input}`;
        const valueText = input !== 1 ? 'minuter' : 'minut';

        this._setDocumentText('count-down-min', value);
        this._setDocumentText('count-down-min-text', valueText);
    }

    setSeconds(input: number) {
        const value: string = `${input}`;
        const valueText = input !== 1 ? 'sekunder' : 'sekund';

        this._setDocumentText('count-down-sec', value);
        this._setDocumentText('count-down-sec-text', valueText);
    }

    private _setDocumentText(id: string, value: any) {
        if(document.getElementById(id)) {
            document.getElementById(id).innerHTML = value;
        }
    }

    private _setDocumentDisplay(id: string, value: any) {
        if(document.getElementById(id)) {
            document.getElementById(id).style.display = value;
        }
    }
}

var pressedButton = false;
function startConfetti() {
    if (detectmob()) {
        return;
    }

    if (!pressedButton){
        pressedButton = true;
        for (var i = 0; i < 250; i++) {
            create(i);
          }
    }
}


function detectmob() {
    if(window.innerWidth <= 800 && window.innerHeight <= 800) {
      return true;
    } else {
      return false;
    }
 }

  function create(i) {
    var width = Math.random() * 8;
    var height = width * 0.4;
    var colourIdx = Math.ceil(Math.random() * 3);
    var colour = "red";
    switch(colourIdx) {
      case 1:
        colour = "yellow";
        break;
      case 2:
        colour = "blue";
        break;
      default:
        colour = "red";
    }
    $('<div class="confetti-'+i+' '+colour+'"></div>').css({
      "width" : width+"px",
      "height" : height+"px",
      "top" : -Math.random()*20+"%",
      "left" : Math.random()*100+"%",
      "opacity" : Math.random()+0.5,
      "transform" : "rotate("+Math.random()*360+"deg)"
    }).appendTo('.wrapper');  
    
    drop(i);
  }
  
  function drop(x) {
    $('.confetti-'+x).animate({
      top: "100%",
      left: "+="+Math.random()*15+"%"
    }, Math.random()*3000 + 3000, function() {
      reset(x);
    });
  }
  
  function reset(x) {
    $('.confetti-'+x).animate({
      "top" : -Math.random()*20+"%",
      "left" : "-="+Math.random()*15+"%"
    }, 0, function() {
      drop(x);             
    });
  }