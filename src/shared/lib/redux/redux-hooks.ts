import type { AppDispatch, RootState } from "./redux-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
