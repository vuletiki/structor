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

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { componentModel } from './selectors.js';
import * as actions from './actions.js';

import { userAccountModel } from '../../app/AppContainer/selectors.js';

import { componentModel as deskPageModel } from '../DeskPage/selectors.js';
import { reloadPage, setEditModeOn, setLivePreviewModeOn } from '../DeskPage/actions.js';

class Container extends Component {

    constructor(props) {
        super(props);
    }

    render(){

        const {
            componentModel,
            userAccountModel,
            deskPageModel,
            toggleAvailableComponents,
            toggleComponentsHierarchy,
            toggleQuickOptions,
            setLivePreviewModeOn,
            setEditModeOn,
            reloadPage
            } = this.props;

        var leftSideStyle = {
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'bottom': 0
        };

        var leftSideStyleInner = {
            'position': 'relative',
            'minWidth': '4em',
            'width': '4em',
            'padding': '0 0.5em 0 0.5em'
        };

        var btnGroupStyle = {
            'width': '100%',
            'textAlign': 'center'
        };
        return (
            <div style={leftSideStyle}>
                <div style={leftSideStyleInner}>
                    <div className="btn-group" style={btnGroupStyle}>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <span className="fa fa-bars" style={{fontSize: 32}} />
                        </a>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#" onClick={ () => { this.props.saveProject(); } }>
                                <span className="fa fa-save fa-fw" />&nbsp;Save project</a>
                            </li>
                            <li className="divider" />
                            <li><a href="#" onClick={ () => { this.props.exportApplication(); } }>
                                <span className="fa fa-gift fa-fw" />&nbsp;Export project</a>
                            </li>
                            <li className="divider" />
                            <li><a href="#" onClick={() => { this.props.showModalProxySetup(); } }>
                                <span className="fa fa-gears fa-fw" />&nbsp;Proxy settings</a>
                            </li>
                            <li className="divider" />
                            <li><a href="/structor/docs.html" target="_blank">
                                <span className="fa fa-paperclip fa-flip-vertical fa-fw"></span>&nbsp;Project documentation</a>
                            </li>
                            <li className="divider" />
                            <li><a href="/structor/generators.html" target="_blank">
                                <span className="fa fa-list fa-fw"></span>&nbsp;Generators</a>
                            </li>
                            <li className="divider" />
                            { userAccountModel.email ?
                                <li><a href="#" onClick={() => {this.props.signOut()}}>
                                    <span className="fa fa-sign-out fa-fw" />&nbsp;{'Sign out ' + userAccountModel.email}</a>
                                </li>
                                :
                                <li><a href="#" onClick={() => { this.props.showModalSignIn(); }}>
                                    <span className="fa fa-sign-in fa-fw" />&nbsp;Sign in to Structor Market</a>
                                </li>
                            }
                        </ul>
                    </div>

                    <Button
                        bsStyle={componentModel.isAvailableComponentsButtonActive ? 'primary' : 'default'}
                        style={{marginTop: '1em', width: '100%'}}
                        disabled={!componentModel.isEditModeOn}
                        onClick={toggleAvailableComponents}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Show the list of available components">
                        <span className="fa fa-plus" />
                    </Button>

                    <Button
                        bsStyle={componentModel.isComponentsHierarchyButtonActive ? 'primary' : 'default'}
                        style={{marginTop: '0.25em', width: '100%'}}
                        disabled={!componentModel.isEditModeOn}
                        onClick={toggleComponentsHierarchy}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Show components' hierarchy on current page">
                        <span className="fa fa-code" />
                    </Button>

                    <Button
                        bsStyle={componentModel.isQuickOptionsButtonActive ? 'primary' : 'default'}
                        style={{marginTop: '0.25em', width: '100%'}}
                        disabled={!componentModel.isEditModeOn}
                        onClick={toggleQuickOptions}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Show component's quick options panel">
                        <span className="fa fa-paint-brush" />
                    </Button>

                    <Button
                        bsStyle={deskPageModel.isEditModeOn ? 'primary' : 'default'}
                        style={{marginTop: '1em', width: '100%'}}
                        onClick={setEditModeOn}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Switch to edit page mode">
                        <span className="fa fa-wrench" />
                    </Button>

                    <Button
                        bsStyle={deskPageModel.isLivePreviewModeOn ? 'primary' : 'default'}
                        style={{marginTop: '0.25em', width: '100%'}}
                        onClick={setLivePreviewModeOn}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Switch to view page mode">
                        <span className="fa fa-hand-pointer-o" />
                    </Button>

                    <Button
                        bsStyle="default"
                        style={{marginTop: '1em', width: '100%'}}
                        onClick={reloadPage}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Reload current page. State will be lost.">
                        <span className="fa fa-refresh" />
                    </Button>
                    {/*
                    <Button
                        bsStyle={this.props.isDocumentMode ? 'primary' : 'default'}
                        style={{marginTop: '0.25em', width: '100%'}}
                        onClick={this.props.startDocumentMode}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Open project's documentation">
                        <span className="fa fa-paperclip fa-flip-vertical" />
                    </Button>
                     */}
                    <div style={{marginTop: '0.25em', width: '100%', height: '2em'}} />
                </div>
            </div>
        )
    }

}

export default connect(
    createStructuredSelector({
        componentModel,
        userAccountModel,
        deskPageModel
    }),
        dispatch => bindActionCreators({
            ...actions,
            reloadPage,
            setEditModeOn,
            setLivePreviewModeOn
        }, dispatch)
)(Container)

