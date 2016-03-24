/*
 * Copyright 2015 Alexander Pustovalov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {combineReducers} from 'redux';

import { reducer as appContainerReducer } from '../controllers/app/AppContainer/index.js';
import { reducer as appSpinnerReducer } from '../controllers/app/AppSpinner/index.js';
import { reducer as appMessageReducer } from '../controllers/app/AppMessage/index.js';
import { reducer as deskReducer } from '../controllers/workspace/Desk/index.js';
import { reducer as deskPageReducer } from '../controllers/workspace/DeskPage/index.js';
import { reducer as toolbarLeftReducer } from '../controllers/workspace/ToolbarLeft/index.js';
import { reducer as toolbarTopReducer } from '../controllers/workspace/ToolbarTop/index.js';
import { reducer as pageControlsReducer } from '../controllers/workspace/PageControls/index.js';

const reducer = combineReducers({
    appContainer: appContainerReducer,
    appSpinner: appSpinnerReducer,
    appMessage: appMessageReducer,
    desk: deskReducer,
    deskPage: deskPageReducer,
    toolbarLeft: toolbarLeftReducer,
    toolbarTop: toolbarTopReducer,
    pageControls: pageControlsReducer
});

export default reducer;
