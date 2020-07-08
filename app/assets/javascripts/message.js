$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="message">
          <div class="upper-message">
            <div class="chat-main__message__name">
              ${message.user_name}
            </div>
            <div class="chat-main__message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message-list">
            <div class="lower-message-list__content">
              ${message.content}
            </div>
            <div class="lower-message-list">
              <img class="lower-message-list__image" src=${message.image}>
            </div>
          </div>
        </div>`
      return html;
    } else {
      var html =
        `<div class="message">
          <div class="upper-message">
            <div class="chat-main__message__name">
              ${message.user_name}
            </div>
            <div class="chat-main__message__date">
              ${message.created_at}
            </div>
          </div>
          <div class="lower-message-list">
            <div class="lower-message-list__content">
              ${message.content}
            </div>
          </div>
        </div>`
      return html;
    };
  }
$('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
 
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message').append(html);
      $('.chat-main__message').animate({ scrollTop: $('.chat-main__message')[0].scrollHeight});
     
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      
    })
    .always(function(){
      $('form')[0].reset();
      $(".send-btn").prop('disabled', false);
    })
})
});