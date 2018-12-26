import initialState from './initialState';
import * as types from '../constants/actionTypes';

const arr = [];

const updateroi = (state, action) => {
    // console.log('im reducer')
    let newState = { ...state };
    // if (action.gtm !== 0 && action.gql !== 0 && action.gfx !== 0 && action.ghc1 !== 0 && this.state.ghc2 !== 0) {
    let roi = (((action.gtm + action.gql + action.ghc1 + action.ghc2 + action.gfx) - action.coi) / action.coi) * 100;

    arr.push(roi)
    // if (roi !== NaN)
    return roi ? (newState = Object.assign({}, state, { roi, calcValues: arr })) : { ...newState };
    // return { ...newState };
    // }
    // return state;
}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_ROI:
            return updateroi(state, action);
        default:
            return state;
    }
}