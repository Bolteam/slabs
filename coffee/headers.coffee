# Hedaers
slabs.headers = slabs.headers or {}

# Hedaer 4
slabs.headers.header2 = ->
  $('.header-2').slick
    dots: true
    infinite: true
    autoplaySpeed: 8000
    speed: 500
    prevArrow: '<i class="slick_prev fa fa-angle-left"></i>'
    nextArrow: '<i class="slick_next fa fa-angle-right"></i>'
    autoplay: true
    fade: true

(($) ->
  $ ->
    ### implementing headers ###
    for header of slabs.headers
      `header = header`
      headerNumber = header.slice(6)
      if jQuery('.header-' + headerNumber).length != 0
        slabs.headers[header]()
      return
    return

) jQuery

# Transparent header before scroll
checkNavScroll = ->
  startY = $('.navbar-transparent').height() * 2
  #The point where the navbar changes in px
  if $(window).scrollTop() > startY
    $('.navbar-transparent').addClass 'scrolled'
  else
    $('.navbar-transparent').removeClass 'scrolled'
  return

$ ->
  if $('.navbar-transparent').length > 0
    console.log "Starting!!!"
    $(window).on 'scroll load resize', ->
      checkNavScroll()
      return
