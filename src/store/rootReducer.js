import authSlice from 'components/Auth/authSlice';
import actionsSlice from 'slices/actionsSlice';
import catalogueSlice from 'views/Catalogue/catalogueSlice';
import favoritesSlice from 'views/Catalogue/favoritesSlice';
import notificationSlice from 'views/Notifier/notificationSlice';
import QuizLoaderSlice from 'views/QuizLoader/QuizLoaderSlice';
// import SubjectLoaderSlice from 'views/School/SubjectLoader/SubjectLoaderSlice';
import UserProfileSlice from 'views/UserProfile/UserProfileSlice';
import SchoolSlice from 'views/School/SchoolSlice';
import ContactSlice from 'views/Home/ContactSlice';

// import UserRegisterSlice from 'views/Register/registerSlice';

const rootReducer = {
  notifications: notificationSlice.reducer,
  favorites: favoritesSlice.reducer,
  actions: actionsSlice.reducer,
  auth: authSlice.reducer,
  catalogue: catalogueSlice.reducer,
  QuizLoader: QuizLoaderSlice.reducer,
  // SubjectLoader: SubjectLoaderSlice.reducer,
  Profile: UserProfileSlice.reducer,
  School: SchoolSlice.reducer,
  contact: ContactSlice.reducer,
};

export default rootReducer;

export const ACTIONS = {
  favorites: { ...favoritesSlice.actions },
  notifications: { ...notificationSlice.actions },
  actions: { ...actionsSlice.actions },
  auth: { ...authSlice.actions },
  catalogue: { ...catalogueSlice.actions },
};
