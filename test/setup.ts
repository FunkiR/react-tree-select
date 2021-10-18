import {applyPlugin} from "~/hooks/useTreeSelect";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {DefaultValues} from "~/hooks/useSelect/types";

Enzyme.configure({adapter: new Adapter()});

const mockUseSelect = <T extends DefaultValues>(values: T) => (...keys: string[]) => keys.map(key => values[key]);

const useSelect = (...keys: string[]) => {
	const {components, getters, setters, theme} = jest.requireActual('app.constants').DEFAULT_PROPS;

	return mockUseSelect({components, getters, setters, theme})(...keys);
};

const useAsyncSelect = (...keys: string[]) => {
	const {DEFAULT_PROPS} = jest.requireActual('app.constants');
	const {DEFAULT_PROPS: PLUGIN_DEFAULT_PROPS} = jest.requireActual('plugins/AsyncSelect/constants');
	const {components, getters, setters, theme: [theme]} = applyPlugin(DEFAULT_PROPS, PLUGIN_DEFAULT_PROPS);

	return mockUseSelect({components, getters, setters, theme})(...keys);
};

const useMultiSelect = (...keys: string[]) => {
	const {DEFAULT_PROPS} = jest.requireActual('app.constants');
	const {DEFAULT_PROPS: PLUGIN_DEFAULT_PROPS} = jest.requireActual('plugins/MultiSelect/constants');
	const {components, getters, setters, theme: [theme]} = applyPlugin(DEFAULT_PROPS, PLUGIN_DEFAULT_PROPS);

	return mockUseSelect({components, getters, setters, theme})(...keys);
};

jest.mock('@fortawesome/free-solid-svg-icons');
jest.mock('hooks/useSelect', () => jest.fn(useSelect));
jest.mock('plugins/AsyncSelect/hooks/useAsyncSelect', () => jest.fn(useAsyncSelect));
jest.mock('plugins/MultiSelect/hooks/useMultiSelect', () => jest.fn(useMultiSelect));
