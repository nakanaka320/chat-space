$(function() {
  function buildHTML(message) {
    var image = (message.image) ? `<img src=${message.image} class="post_image"></img>` : "";
    var html = `<div class="rightcontent__message" data-id=${message.id}>
                  <div class="rightcontent__message__name">
                    ${message.user_name}
                  </div>
                  <div class="rightcontent_time">
                    ${message.created_at}
                  </div>
                </div>
                <p class="rightcontent__message__a">
                  ${message.content}
                  ${image}
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
    $('.rightcontent__messageslist').append(html);
    $('.rightcontent__messageslist').animate({scrollTop: $('.rightcontent__messageslist')[0]},1000);
    $('form')[0].reset();
  })
  .fail(function(){
    alert('error');
  })
  return false;
  });

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){ 
    last_message_id = $(".rightcontent__message:last").data("id")
    $.ajax({
      url: 'api/messages',
      type: 'get',
      dataType: 'json',
      data: {last_message_id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message){
      insertHTML = buildHTML(message)
        $('.rightcontent__messageslist').append(insertHTML)
      });
      $('.rightcontent__messageslist').animate({scrollTop: $('.rightcontent__messageslist')[0].scrollHeight},1000);
    })
    .fail(function() {
      alert('error');
     });
    };
  }
    $(function() {
      setInterval(reloadMessages,  15000);
    });
  });
