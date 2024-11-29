export const TOGGLE_COLLAPSE = "TOGGLE_COLLAPSE";
export const TOGGLE_DROPDOWN = "TOGGLE_DROPDOWN";

export const toggleCollapse = (id) => {
  return {
    type: TOGGLE_COLLAPSE,
    payload: id,
  };
};
