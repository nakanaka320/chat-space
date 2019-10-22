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
    $('.rightcontent__messageslist').append(html);
    $('.rightcontent__messageslist').animate({scrollTop: $('.rightcontent__messageslist')[0].scrollHeight},0);
    $('send')[0].reset();
  })
  .fail(function(){
    alert('error');
  })
  return false;
  });

  var buildMessageHTML = function(message) {
    if (message.content && message.image.url) {
      var html = `<div class="message" data-id="${message.id}">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                      <img src="${message.image.url}" class="lower-message__image">
                    </div>
                  </div>`
    } else if (message.content) {
      var html = `<div class="message" data-id="${message.id}">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
    } else if (message.image.url) {
      var html = `<div class="message" data-id="${message.id}">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-message">
                      <img src="${message.image.url}" class="lower-message__image">
                    </div>
                  </div>`
    };

  var reloadMessages = function() {
    last_message_id = $(".rightcontent__message:last").data("message-id")
    $.ajax({
      url: './api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      //追加するHTMLの入れ物を作る
      var insertHTML = '';
      //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
      messages.forEach(function(){
      insertHTML = buildMessageHTML(message)
      //メッセージが入ったHTMLを取得
      $('.message-post__messages').append(insertHTML)    
    })
      //メッセージを追加
      $('.rightcontent__messageslist').animate({scrollTop: $('.rightcontent__messageslist').get(0).scrollHeight}, 'fast');
    })
    .fail(function() {
      console.log('error');

     setInterval(reloadMessages, 5000);
    });
  };
});
