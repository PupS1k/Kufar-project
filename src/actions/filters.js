export const CHANGE_FILTERS = 'CHANGE_FILTERS';
export const RESET_FILTERS = 'RESET_FILTERS';

export const changeFilters = value => ({
  type: CHANGE_FILTERS,
  payload: value
});
export const resetFilters = () => ({
  type: RESET_FILTERS
});
