import _ from 'lodash';

export const loadingSelector = (state, actions) => {
    return _(actions).some((action) => _.get(state, `loading.${action}`, true));
};