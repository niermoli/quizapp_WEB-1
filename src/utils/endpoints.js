// export const BASE_ENDPOINT = 'https://apiquizzes.herokuapp.com';

export const BASE_ENDPOINT = 'http://localhost:3000';

export const AUTH_ENDPOINT = BASE_ENDPOINT + '/auth';

export const ME_ENDPOINT = AUTH_ENDPOINT + '/me';

export const RESTORE_ENDPOINT = AUTH_ENDPOINT + '/restore';

export const LOGIN_ENDPOINT = AUTH_ENDPOINT + '/login';

export const LOGIN_ORG_ENDPOINT = AUTH_ENDPOINT + '/login/org';

export const SCHOOL_REGISTER_ENDPOINT = BASE_ENDPOINT + '/org';

export const USER_REGISTER_ENDPOINT = AUTH_ENDPOINT + '/register';

export const SCHOOL_ENDPOINT = BASE_ENDPOINT + '/org/';

export const QUIZ_ENDPOINT = BASE_ENDPOINT + '/quiz';

export const SUBJECT_ENDPOINT = BASE_ENDPOINT + '/subject';

export const USER_PROFILE_ENDPOINT = BASE_ENDPOINT + '/auth/me/';

export const QUIZ_INFO_ENDPOINT = QUIZ_ENDPOINT + '/info';

export const QUESTIONS_ENDPOINT =  BASE_ENDPOINT + '/questions';

export const FINAL_REGISTER_SCHOOL_ENDPOINT = AUTH_ENDPOINT + '/org/register';

export const GET_USER_EMAIL_ENDPOINT = BASE_ENDPOINT + '/users/email/';

export const TEACHER_ENDPOINT = BASE_ENDPOINT + '/teachers/';