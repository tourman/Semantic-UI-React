import { defaults } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { getUnhandledProps } from '../../lib'
import TableHeader from './TableHeader'

/**
 * A table can have a footer.
 */
const TableFooter = React.forwardRef(function (partialProps, ref) {
  const props = defaults(partialProps, getDefaultProps())
  const { as } = props
  const rest = getUnhandledProps(TableFooter, props)

  return <TableHeader {...rest} as={as} ref={ref} />
})

TableFooter.displayName = 'TableFooter'
TableFooter.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,
}

function getDefaultProps() {
  return {
    as: 'tfoot',
  }
}

export default TableFooter
