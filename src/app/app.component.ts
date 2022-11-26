import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public inputValue!: string
public arr: string[] = []
    public addTimer(){
        this.arr.push(this.inputValue)
        console.log(this.inputValue)
    }

    // public removed(index: number): void {
    //   this.arr.splice(index, 1);
    // }
}

