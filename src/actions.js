import fetch from 'isomorphic-fetch';

export const ACTION_TYPE = 'ACTION_TYPE';

export function callYourAction() {
    return {
        type: ACTION_TYPE,
    };
}
