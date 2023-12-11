import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../lib'
import TextArea from '../../addons/TextArea'
import FormField from './FormField'

/**
 * Sugar for <Form.Field control={TextArea} />.
 * @see Form
 * @see TextArea
 */
const FormTextArea = React.forwardRef(function (partialProps, ref) {
  const props = _.defaults(partialProps, getDefaultProps())
  const { control } = props
  const rest = getUnhandledProps(FormTextArea, props)
  const ElementType = getElementType(FormTextArea, props)

  return <ElementType {...rest} control={control} ref={ref} />
})

FormTextArea.displayName = 'FormTextArea'
FormTextArea.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control,
}

function getDefaultProps() {
  return {
    as: FormField,
    control: TextArea,
  }
}

export default FormTextArea
