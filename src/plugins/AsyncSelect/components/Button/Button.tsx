import React, {memo} from 'react';

import {ButtonComponent} from "./types";

export const Button: ButtonComponent = props => <button {...props} />;

export default memo(Button);