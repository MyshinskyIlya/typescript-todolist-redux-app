import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../store/action-creators/index";

export const UseActions = () => {
    const dispatch = useDispatch();
    console.log(ActionCreators);

    return bindActionCreators(ActionCreators, dispatch);
};
