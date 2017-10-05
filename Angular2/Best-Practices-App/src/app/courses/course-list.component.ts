import { Component, OnInit } from '@angular/core';

import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { Course } from './ICourse';
import { FilterService } from '../blocks/filter-text';
import { store } from '../store';
import { CourseActions } from '../store/course.actions';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses')
  private filteredCourses: Observable<Array<Course>>;

  constructor(private courseActions: CourseActions) {
  }

  filterChanged(searchText: string): void {
    console.log('user searched: ', searchText);
    //this.filteredCourses = this._filterService.filter(searchText, ['id', 'name', 'topic'], this.courses);
    this.courseActions.filterCourses(searchText);
  }

  ngOnInit(): void {
    this.courseActions.getCourses();
    componentHandler.upgradeDom();
  }
}
