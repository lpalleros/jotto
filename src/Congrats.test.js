import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import { findByTextAttr } from './testUtils';

import Congrats from './Congrats';

Enzyme.configure({adapter: new EnzymeAdapter()});
/**
 * 
 * @param {*} props 
 * @returns 
 */
const setup = (props={}) => {
    return shallow(<Congrats {...props} />);
};

describe('basic render', () => {
    test('renders without error', () => {
        const wrapper = setup({success: true});
        const component = findByTextAttr(wrapper ,'component-congrats');
        expect(component.exists()).toBe(true)
    });
});