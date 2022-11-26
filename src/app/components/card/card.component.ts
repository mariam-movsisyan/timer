import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{
    @Input() public time!: string;
    
    // @Output('removed')
    // public onClickRemoveEvent: EventEmitter<void> = new EventEmitter<void>();
    
    public timer!: number;

    public result: string = ""

    public setTime(num: number){
      let hour1;
      let minute1;
      let second1;
        let hour = Math.floor((num / 3600));
        let minute = 0
        if(num > 3600){
            minute = Math.floor((num - 3600) / 60);
        }else{
            minute = Math.floor(num / 60);
        }
        const second = Math.floor(num -(hour * 3600) - (minute * 60));


        if(hour < 10){
          hour1 = '0'+ hour
        }else{
          hour1 = hour
        }
        if(minute < 10){
          minute1 = '0'+ minute
        }else{
          minute1 = minute
        }
        if(second < 10){
          second1 = '0'+ second
        }else{
          second1 = second
        }
        this.result = `${hour1} : ${minute1}: ${second1}`;

        return this.result 
    }
      ngOnInit() { 
        this.timer = Number(this.time);
        this.setTime(this.timer);
        setInterval(() => {
              if(this.timer > 0) {
                this.timer--;
                this.result = this.setTime(this.timer)
                console.log(this.timer)
              }
        },1000)
      }
}