import * as types from '../constants/actionTypes';

export const updateroi = (gtm, gfx, ghc1, ghc2, gql, coi) => ({
    type: types.UPDATE_ROI,
    gtm,
    gfx,
    ghc1,
    ghc2,
    gql,
    coi
})
