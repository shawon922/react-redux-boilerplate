import { FETCH_FEATURES, NEW_FEATURE } from "./types";
import API from '../axios';

export const fetchFeatures = () => dispatch => {
  API.get('/api/features/')
    .then(response => dispatch({
      type: FETCH_FEATURES,
      payload: response.data
    }))
    .catch(function (error) {
      console.log(error);
    });
};

export const createFeature = (postData) => dispatch => {
  API.post('/api/features/', postData)
    .then(response => dispatch({
      type: NEW_FEATURE,
      payload: response.data
    }))
    .catch(function (error) {
      console.log(error);
    });
};

