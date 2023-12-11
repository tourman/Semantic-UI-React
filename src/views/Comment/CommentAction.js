import _ from 'lodash'
import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'

/**
 * A comment can contain an action.
 */
const CommentAction = React.forwardRef(function (partialProps, ref) {
  const props = _.defaults(partialProps, getDefaultProps())
  const { active, className, children, content } = props

  const classes = cx(useKeyOnly(active, 'active'), className)
  const rest = getUnhandledProps(CommentAction, props)
  const ElementType = getElementType(CommentAction, props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

function getDefaultProps() {
  return {
    as: 'a',
  }
}

CommentAction.displayName = 'CommentAction'
CommentAction.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Style as the currently active action. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default CommentAction
