function create_like(success_cb, error_cb) {
  var post_pk = $(this).siblings('.hidden-data').find('.post-pk').text();
  console.log(post_pk);

  $.ajax({
    type: "POST",
    url: '/like/',
    data: {
      post_pk: post_pk
    },
    success: function(data) { success_cb(data); },
    error: function(error) { error_cb(error); }
  });
}


function error_cb(error) {
  console.log(error);
}


function like_update_view(data) {
  console.log(data);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------