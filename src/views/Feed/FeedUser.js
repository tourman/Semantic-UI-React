import _ from 'lodash'
import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenUtils, customPropTypes, getElementType, getUnhandledProps } from '../../lib'

/**
 * A feed can contain a user element.
 */
const FeedUser = React.forwardRef(function (partialProps, ref) {
  const props = _.defaults(partialProps, getDefaultProps())
  const { children, className, content } = props
  const classes = cx('user', className)
  const rest = getUnhandledProps(FeedUser, props)
  const ElementType = getElementType(FeedUser, props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

FeedUser.displayName = 'FeedUser'
FeedUser.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

function getDefaultProps() {
  return {
    as: 'a',
  }
}

export default FeedUser
