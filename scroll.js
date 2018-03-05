$(document).ready(function () {
  // code here
  $('#side-progress-bar').click(function () {
    $('#progress-bar-entity').css({display: 'block'})
    $('body').addClass('noScroll')
  })

  $(document).on('click', '.noScroll', function (evt) {
    console.log('->: ', evt.target)
    console.log(evt.target.className.indexOf('notClose'))
    console.log('onScroll')
    if (evt.target.className.indexOf('notClose') < 0) {
      $('#progress-bar-entity').css({display: 'none'})
      $('body').removeClass('noScroll')
    }
  })
})