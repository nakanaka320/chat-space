$(function(){
  var user_list = $("#user-search-result");
  var group_list = $("#js-add-user");
  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    user_list.append(html);
  };
  function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ info }</p>
                </div>`


    user_list.append(html);
  }
  function appendBuild(name, id) {
    var html =`<div class="chat-group-user clearfix js-chat-member" id="${id}">
                  <input value="${id}" name="group[user_ids][]" type="hidden" id="group_user_ids">
                    <p class="chat-group-user__name">${name}</p>
                    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>
             `
    group_list.append(html);
  }

  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user)
        });
      }
      else {
        appendErrMsgToHTML("ユーザー検索に失敗しました");
      }
    })
    .fail(function(){
      alert('error');
    })
    return false;
  })
  $(document).on("click", '.user-search-add', function(){
    var id = $(this).attr("data-user-id");
    var name = $(this).attr("data-user-name");
    appendBuild(name,id);
    $(this).parent().remove();

  $(document).on("click", '.user-search-remove', function(){
    $(this).parent().remove();
    });
  });
});
