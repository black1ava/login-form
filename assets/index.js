$(function(){
  $('form').on('submit', function(e){
    const name = $('form input[name = name]').val();
    const email = $('form input[name = email]').val();
    const scale = $('form input[name = scale]').val();
    const place = $('form select[name = place]').val();
    const time = $('form input[name = time]:checked').val();

    const feelings = []

    $('form input[name = feeling]:checked').each(function(){
      feelings.push(this.value);
    });

    const description = $('form textarea').val();

    const props = { name, email, scale, place, time, feelings, description };

    $.ajax({
      type: 'post',
      url: '/info',
      data: props,
      success: function(){
        // location.reload();
      }
    });
  });

  return false;
});