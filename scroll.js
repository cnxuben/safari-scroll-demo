$(document).ready(function () {
  // code here
  $('#side-progress-bar').click(function () {
    $('#progress-bar-entity').css({display: 'block'})
    $('body').addClass('noScroll')
  })

  $('#close-side-progress-bar').on('click', function () {
    $('#progress-bar-entity').css({display: 'none'})
    $('body').removeClass('noScroll')
  })
})