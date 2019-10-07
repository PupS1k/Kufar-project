import {all} from 'redux-saga/effects';
import sagasProducts from './products';
import sagasUser from './user';

export default function* () {
  yield all([sagasProducts, sagasUser]);
}
