import { Course } from '../courses/ICourse';
import { IAppState } from './IAppState';
import { FILTER_COURSES } from './course.actions';
import { REQUEST_COURSES_SUCCESS } from './course.actions';

const courses: Course[] = [];

const initialState: IAppState = {
  courses: courses,
  filteredCourses: courses
};

export function reducer(state = initialState, action): IAppState {
  switch (action.type) {
    case FILTER_COURSES:
      return filterCourses(state, action);
    case REQUEST_COURSES_SUCCESS:
      return getCourses(state, action);
    default:
      return state;
  }
}

function filterCourses(state: IAppState, action): IAppState {
  return Object.assign({}, state, {
    filteredCourses: state.courses.filter(c => {
      return c.name.toLowerCase()
          .indexOf(action.searchText.toLowerCase()) > -1;
    })
  });
}

function getCourses(state, action): IAppState {
  return Object.assign({}, state, {
    courses: action.courses,
    filteredCourses: action.courses
  });
}


