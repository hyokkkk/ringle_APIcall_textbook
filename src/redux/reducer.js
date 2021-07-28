export const SET_LANDING_COURSES = 'SET_LANDING_COURSES'

const initialState = {
  landingCourses: []
}

const courses = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANDING_COURSES: {
      return {
        ...state,
        landingCourses: action.payload
      }
    }
    default:
      return state;
  }
};

export default courses