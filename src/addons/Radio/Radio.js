import _ from 'lodash'
import React from 'react'

import { getUnhandledProps } from '../../lib'
import Checkbox from '../../modules/Checkbox'

/**
 * A Radio is sugar for <Checkbox radio />.
 * Useful for exclusive groups of sliders or toggles.
 * @see Checkbox
 * @see Form
 */
const Radio = React.forwardRef(function (partialProps, ref) {
  const props = _.defaults(partialProps, getDefaultProps())
  const { slider, toggle, type } = props

  const rest = getUnhandledProps(Radio, props)
  // const ElementType = getElementType(Radio, props)
  // radio, slider, toggle are exclusive
  // use an undefined radio if slider or toggle are present
  const radio = !(slider || toggle) || undefined

  return <Checkbox {...rest} type={type} radio={radio} slider={slider} toggle={toggle} ref={ref} />
})

Radio.displayName = 'Radio'
Radio.propTypes = {
  /** Format to emphasize the current selection state. */
  slider: Checkbox.propTypes.slider,

  /** Format to show an on or off choice. */
  toggle: Checkbox.propTypes.toggle,

  /** HTML input type, either checkbox or radio. */
  type: Checkbox.propTypes.type,
}

function getDefaultProps() {
  return {
    type: 'radio',
  }
}

export default Radio
