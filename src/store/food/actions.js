import { _setSelectedFood } from ".";
import store from "..";

export const setSelectedFood = data => store.dispatch(_setSelectedFood(data))