import {location} from '../utils';

export const getFilters = state => state.filters;
export const getLocation = state => location(state.filters.region, state.filters.city);
