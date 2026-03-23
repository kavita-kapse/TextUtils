import React from 'react'

function Alert({alert}) {
    const capitalize = (word) =>
    {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    <div style={{height: '50px'}}>
    {alert && (
      <div class={`alert alert-${alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(alert.typ)}</strong> : {alert.msg}
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    )}
    </div>
  )
}

export default Alert
