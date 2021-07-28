import { put, all, call, takeEvery } from "redux-saga/effects";

export const getLandingCourses = async() => {
  const res = await fetch('https://api.ringleplus.com/api/v4/student/landing/course?locale=en');
  const data = res.json();
  return data;
}

function* fetchLandingCourses() {
  try{
    const data = yield call(getLandingCourses, {});
    console.log(data.landing_courses);
    yield put({type: "SET_LANDING_COURSES", payload: data.landing_courses});
  } catch (e) {
    console.log(e)
  }
}

function* mySaga() {
  yield takeEvery("FETCH_LANDING_COURSES", fetchLandingCourses);
}

function *rootSaga() {
  yield all([
    mySaga(),
  ])
}

export default rootSaga;