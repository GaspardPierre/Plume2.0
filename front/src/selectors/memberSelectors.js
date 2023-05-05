
import { createSelector } from "reselect";
import memberReducer from "../reducers/member";




export const selectRole = createSelector(
  (state) => state.member.role, // 
  (role) => role
);
