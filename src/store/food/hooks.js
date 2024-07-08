import { useSelector } from "react-redux";

export const useFoods = () => useSelector(state => state.food)