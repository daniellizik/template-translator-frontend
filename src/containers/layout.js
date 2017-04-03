import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Radium, { StyleRoot } from 'radium'
import styles from '~/src/styles/'
import Navigator from '~/src/components/navigator'
import Builder from '~/src/components/builder'
import SourceSetter from '~/src/containers/sourceSetter/sourceSetter'
import HtmlMount from '~/src/containers/htmlMount'
import * as sourceSetterConstants from '~/src/containers/sourceSetter/constants'
import { constants as navigatorConstants } from '~/src/components/navigator'
import { colors } from '~/src/styles/constants'

export function reducer(state, action) {
  return state
}

const builderStyle = {
  backgroundColor: colors.lightBlack
}

const htmlMountStyle = {
  overflowX: 'scroll',
  backgroundColor: colors.darkBlack
}

class Layout extends Component {

  render() {
    const { deployer, sidebar } = styles.layout
    return (
      <div class="container-fluid p-0 m-0">
        <SourceSetter />
        <Navigator />
        <div class="row">
          <div class="col-6 m-0 pr-2" style={builderStyle}>
            <Builder />
          </div>
          <div class="col-6 m-0 pl-2" style={htmlMountStyle}>
            <HtmlMount />
          </div>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  push: (route) => push(route)
})

export default connect(s => s, mapDispatchToProps)(Layout)
