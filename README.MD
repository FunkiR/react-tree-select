# React-tree-select

Extensible and dynamically configurable component for selecting values from tree data. The component
allows to use a custom data format and modify any nested component.

## Usage

```jsx
import 'react-tree-select/build/index.css';
import React, {useState} from 'react';
import TreeSelect from 'react-tree-select';
import {tree} from './config';

const App = () => {
    const [value, setValue] = useState(null);
    
    const handleChange = event => setValue(event.value);
    
    return <TreeSelect onChange={handleChange} tree={tree} value={value} />;
}
```

## Props

### className

Type: `string`

_Additional selector for container._

DefaultValue: `""`

### components

Type: `object`

_All components that are used._

DefaultValue: 

```
{
    CaretIcon,
    ClearIcon,
    CollapsedIcon,
    ExpandedIcon,
    Icon,
    IndicatorsContainer,
    ValueLabel,
    Node,
    NodeChildrenContainer,
    NodeContainer,
    NodeExpandIconContainer,
    NodeLabel,
    NodeLabelContainer,
    Menu,
    MenuContainer,
    Select,
    SelectContainer,
    SearchInputContainer,
    SearchIcon,
    SearchInput,
    Tree,
    TreeContainer,
    Value,
    ValueContainer
}
```

### getters

Type: `object`

_An object of functions that are used to retrieve data from tree or a selected value. 
Getter should always return a uniform data format required for the component to work_

Default value: 

```ts
type ArrayNode = {
    children: Array<any>,
    label: string,
    value: string
}

type Value = {
    label: string,
    value: string
}

const defaultValue = {
    node: (node: object): ArrayNode => node,
    value: (value: object | null): Value => ({
        label: value?.label ?? '',
        value: value?.value ?? ''
    }),
    valueFromNode: ({label, value}: object): Value => ({label, value})
}
```

### isSelected

Type: `function`

_Сhecks if a node is selected._

```js
const defaultValue = (node, value) => node.value === value.value;
```

### onChange

Type: `function`

_The event that is triggered when value changes._

Event data: 

```
{
    name: string,
    value: object | null
}
```

### onExpand

Type: `function`

_The event that is triggered when the "extended" property of a node changes._

Event data:

```
{
    name: string,
    node: object,
    expanded: boolean
}
```

### onSelect

Type: `function`

_The event that is triggered when node is selected._

Event data:

```
{
    name: string,
    node: object
}
```

### name

Type: `string`

_Name of the component._

Default value: `""`;

###theme

Type: `object | array`

_Style theme of the component._

Default value:

```ts
type GetClassName = (currentClassName: string) => string;

type ClassName = string | GetClassName;

type Theme = {
    CaretIcon: ClassName,
    ClearIcon: ClassName,
    CollapsedIcon: ClassName,
    ExpandedIcon: ClassName,
    Icon: ClassName,
    IndicatorsContainer: ClassName,
    ValueLabel: ClassName,
    NodeChildrenContainer: ClassName,
    NodeContainer: ClassName,
    NodeExpandIconContainer: ClassName,
    NodeLabel: ClassName,
    NodeLabelContainer: ClassName,
    MenuContainer: ClassName,
    SelectContainer: ClassName,
    SearchInputContainer: ClassName,
    SearchIcon: ClassName,
    SearchInput: ClassName,
    TreeContainer: ClassName,
    ValueContainer: ClassName,
    NodeLabel_found: ClassName,
    NodeLabel_selected: ClassName
}

type Options = {
  mode: 'extend' | 'replace'
  prefix: string,
};

const theme: Theme = {...};

const options: Options = {mode: 'replace'}

const defaultValue = [theme, options];
```

### tree

Type: `array`

_Data for render tree._

Default value: `[]`;

### value

Type: `object`

_Selected value_

Default value: `null`

# Plugins

A plugin is a simple function that takes props, modifies them and returns new props,
adding some functionality. All plugins are applied only once before the first rendering of the component.

## 1. MultiSelect

This plugin allows selecting multiple tree value.

## Usage

```tsx
import 'react-tree-select/build/index.css';
import React, {useState} from 'react';
import {MultiSelect, useTreeSelect} from 'react-tree-select';
import {tree} from './config';

const MultiTreeSelect = useTreeSelect(MultiSelect);

const App = () => {
    const [values, setValues] = useState([]);
    
    const handleChange = event => setValues(event.values);
    
    return <MultiTreeSelect onChange={handleChange} tree={tree} values={values} />;
}
```

## Props

### components

Type: `object`

_Additional plugin components_

```
{
    AllTagsContainer,
    Tag,
    TagContent,
    TagContainer,
    Tags,
    TagsContainer,
    ValueTag,
    ValueTagLabel,
    ValueTagRemoveIcon,
    ShowAllTagsTag,
    ShowAllTagsIcon
}
```

### isSelected

Type: `function`

_Сhecks if a node is selected._

```js
const defaultValue = (node, values) => !!values.find(value => node.value === value.value);
```

### onChange

Type: `function`

_The event that is triggered when values changes._

Event data:

```
{
    name: string,
    values: object[]
}
```

### theme

Type: `object | array`

Additional class names:

```
{
    AllTagsContainer,
    Tag,
    TagContent,
    TagContainer,
    TagsContainer,
    ValueTag,
    ValueTagLabel,
    ValueTagRemoveIcon,
    ShowAllTagsTag,
    ShowAllTagsIcon
}
```

### values

Type: `array`

_Selected values_

Default value: `[]`

## 1. AsyncSelect

This plugin allows to load the tree asynchronously

```tsx
import 'react-tree-select/build/index.css';
import React, {useState} from 'react';
import {AsyncSelect, useTreeSelect} from 'react-tree-select';
import {fetchTree} from './config';

const AsyncTreeSelect = useTreeSelect(AsyncSelect);

const App = () => {
    const [value, setValue] = useState(null);
    
    const handleChange = event => setValue(event.value);
    
    return <AsyncTreeSelect onFetch={fetchTree} value={value} />;
}
```

## Props

### components

Type: `object`

_Additional plugin components_

```
{
    AsyncList,
    Loader,
    ShowMoreButton
}
```

### getters

Type: `object`

_An object of functions that are used to retrieve data from tree or a selected value.
Getter should always return a uniform data format required for the component to work_

```ts
type AsyncNode = {
    data: object,
    children: Array<string>,
    error: boolean,
    id: string,
    label: string,
    loading: boolean,
    hasChildren: boolean,
    parent: string | null,
    uploaded: boolean,
    value: string
};

type ArrayNode = {
    children: Array<any>,
    hasChildren: boolean,
    label: string,
    value: string
}

type TreeState = {
    error: boolean,
    loading: boolean,
    fulfilled: boolean,
    uploaded: boolean,
    map: TreeMap
}

type Value = {
    label: string,
    value: string
}

const defaultValue = {
    arrayNode: (arrayNode: object): ArrayNode => arrayNode,
    node: (node: object): AsyncNode => node,
    tree: (tree: object): TreeState => tree,
    valueFromNode: ({label, value}: object): Value => ({label, value})
}
```

### external

Type: `boolean`

_Is for telling tree is external or not._

Default value: `false`

### onFetch

Type: `function`

_The event that is triggered when it is necessary to receive tree data_

#### external is true

```ts
type Event = {
    name: string,
    parent: object | null
};

const defaultValue = (event: Event): any => undefined;
```

#### external is false

```ts
type Event = {
    offset: number,
    name: string,
    parent: object | null
};

type ReturnType = {
    data: object | Array<object>,
    total: number
}

const defaultValue = async (event: Event): Promise<ReturnType> => await ({
    data: {},
    total: 0
});
```

### setters

Type: `object`

_An object of functions that are used to modify tree data within a component._

Default value:

```
{
    node: (node: object, key: string, value: any): AsyncNode => ({...node, [key]: value}),
    tree: (tree: object, key: string, value: any): TreeState => ({...tree, [key]: value})
}
```

### theme

Type: `object | array`

Additional class names:

```
{
    AsyncListLoader,
    ShowMoreButton
}
```

### tree

Type: `array | object`

_Data for render tree._

#### external is false

Default value: `[]`;

#### external is true

Default value:

```
{
    error: false,
    loading: false,
    fulfilled: false,
    uploaded: false,
    map: {}
}
```