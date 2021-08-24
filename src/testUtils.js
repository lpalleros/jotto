import { checkPropTypes } from 'prop-types';

export const findByTextAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
// lesson 43
export const checkProps = (component, confromingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        confromingProps,
        'props',
        component.name,
    );
    expect(propError).toBeUndefined();
};


