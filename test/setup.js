"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useTreeSelect_1 = require("~/hooks/useTreeSelect");
const enzyme_1 = __importDefault(require("enzyme"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
const mockUseSelect = (values) => (...keys) => keys.map(key => values[key]);
const useSelect = (...keys) => {
    const { components, getters, setters, theme } = jest.requireActual('app.constants').DEFAULT_PROPS;
    return mockUseSelect({ components, getters, setters, theme })(...keys);
};
const useAsyncSelect = (...keys) => {
    const { DEFAULT_PROPS } = jest.requireActual('app.constants');
    const { DEFAULT_PROPS: PLUGIN_DEFAULT_PROPS } = jest.requireActual('plugins/AsyncSelect/constants');
    const { components, getters, setters, theme: [theme] } = (0, useTreeSelect_1.applyPlugin)(DEFAULT_PROPS, PLUGIN_DEFAULT_PROPS);
    return mockUseSelect({ components, getters, setters, theme })(...keys);
};
const useMultiSelect = (...keys) => {
    const { DEFAULT_PROPS } = jest.requireActual('app.constants');
    const { DEFAULT_PROPS: PLUGIN_DEFAULT_PROPS } = jest.requireActual('plugins/MultiSelect/constants');
    const { components, getters, setters, theme: [theme] } = (0, useTreeSelect_1.applyPlugin)(DEFAULT_PROPS, PLUGIN_DEFAULT_PROPS);
    return mockUseSelect({ components, getters, setters, theme })(...keys);
};
jest.mock('@fortawesome/free-solid-svg-icons');
jest.mock('hooks/useSelect', () => jest.fn(useSelect));
jest.mock('plugins/AsyncSelect/hooks/useAsyncSelect', () => jest.fn(useAsyncSelect));
jest.mock('plugins/MultiSelect/hooks/useMultiSelect', () => jest.fn(useMultiSelect));
//# sourceMappingURL=setup.js.map