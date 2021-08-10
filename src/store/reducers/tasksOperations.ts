import { storeType, action } from "../storeTypeDefinations"
import { defultStore } from "./data";

export default (store: storeType = defultStore, action: action) => {
    return store
}
