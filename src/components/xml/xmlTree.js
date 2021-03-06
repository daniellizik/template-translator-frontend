import React, { Component, PropTypes } from 'react'
import XmlTag from './xmlTag'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { queryActions, mutateActions, clauseActions } from '~/src/components/clause/actions/index'

const mapStateToProps = (state) => ({
  ...state,
  xml: state.slave.xml
})

const XmlTree = ({xml, callbacks}) => (
  <div class="col-12 m-0 p-0">
    <table style={{width: '100%'}}>
      <tbody>
        {xml.map(({node, row, tokens}, i) => (
          <XmlTag
            key={i}
            index={i}
            node={node}
            row={row}
            tokens={tokens}
            callbacks={callbacks} />
        ))}
      </tbody>
    </table>
  </div>
)

export default connect(mapStateToProps)(XmlTree)