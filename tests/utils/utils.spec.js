/* eslint-disable no-unused-vars */

function eventFire (el, etype) {
  if (angular.isFunction(el.trigger)) {
    el.trigger(etype)
  } else if (angular.isFunction(el.fireEvent)) {
    el.fireEvent('on' + etype)
  } else {
    const evObj = document.createEvent('Events')
    evObj.initEvent(etype, true, false)
    el.dispatchEvent(evObj)
  }
}

function findIn (element, selector) {
  return angular.element(element[0].querySelector(selector))
}
