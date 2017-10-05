import { Course } from '../courses/ICourse';

export interface IAppState {
  courses: Course[];
  filteredCourses: Course[];
}
