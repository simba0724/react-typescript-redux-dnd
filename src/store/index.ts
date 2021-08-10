import { compose, createStore } from "redux";
import reducers from "./reducers/index";

declare global {
    interface Window {
        devToolsExtension?: Function;
    }
}

export default compose(window.devToolsExtension && window.devToolsExtension())(createStore)(reducers)