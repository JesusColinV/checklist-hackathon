import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  listaTasks: task[]=[];
  nombreTask = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    // console.log(this.nombreTask)
    const task:task = {
      nombre : this.nombreTask,
      estado : false
    }

    this.listaTasks.push(task) // 32  min 2:26

    this.nombreTask = ''
  }

  deleteTask(index:number):void{
    //console.log(index)
    this.listaTasks.splice(index,1)
  }

  updateTask(index:number):void{
    //console.log(index)
    this.listaTasks[index].estado = !this.listaTasks[index].estado
    console.log(this.listaTasks[index].estado)
  }
}
