import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular App';
  cusines = [1,2];
  viewMode='list';
  courses = [
    
    { id: 1,name:'course 1 '},
    { id: 2,name:'course 2 '},
    { id: 3,name:'course 3 '},
  ];
  onAdd() {
    this.courses.push({ id:4,name:'course4'});
  }
  onChange(course) {
    // let index=this.courses.indexOf(course);
    // this.courses.splice(index,1);
    course.name='UPDATED';
    
    
  }
}

