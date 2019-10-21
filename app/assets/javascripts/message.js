$(function() {
  function buildHTML(message) {
    var html = `<div class="rightcontent__message">
                    <div class="rightcontent__message__name">
                      ${message.user_name}
                    </div>
                    <div class="rightcontent_time">
                      ${message.time}
                    </div>
                    <p class="rightcontent__message__a">
                      ${message.content}
                      ${message.image}
                    </p>`
    return html;
              };
           
$('#new_message').on('submit', function(e){
  e.preventDefault();

  var formData = new FormData(this);
  var url = $(this).attr('action');

  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })

  .done(function(data) {
    var html = buildHTML(data);
    // debugger;
    $('.rightcontent__messageslist').append(html);
    $('.rightcontent__messageslist').animate({scrollTop: $('.rightcontent__messageslist')[0].scrollHeight},
    0);
    $('send')[0].reset();
  })
  .fail(function(){
    alert('error');
  })
  return false;
  })
});
