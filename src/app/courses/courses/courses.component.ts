import { Component, OnInit, VERSION, Version } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { Courses } from '../models/courses';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    courses: Courses[] = [
        {_id: "1", name: "Angular", category: "Front-end"},
        {_id: "2", name: "React", category: "Front-end"},
        {_id: "3", name: "Java Spring", category: "Back-end"},
        {_id: "4", name: ".NET Core MVC", category: "Back-end"},
    ];
    displayedColumns = ['name', 'category'];

    constructor() {
        // this.courses = [];
    }

    ngOnInit(): void {}
}
