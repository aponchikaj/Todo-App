import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  AreThereAnyTasks:boolean = true;
  Tasks:Array<string> = []
  TasksInput:string = ''

  Submit(){
    if(this.TasksInput != ''){
      this.Tasks.push(this.TasksInput)
      this.TasksInput = ''
      console.log(this.Tasks)
    }
  }

  Delete(Task:number){
    this.Tasks.splice(Task,1)
  }
}