
import { createSelector } from "reselect";



export const selectRole = createSelector(
  (state) => state.member.role, // 
  (role) => role
);
