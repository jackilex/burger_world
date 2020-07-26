$("#submit").on("click",function(event){
    event.preventDefault();
    
   let burgerName= $("textarea[name=bname]").val().trim()
    


    // alert(burgerName)
    $.ajax("/api/burgers", {
        type: "POST",
        data: {
     burger_name: burgerName
    }
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      )
      .catch(err);
})

$(".eat").on('click',function(event){
  event.preventDefault()
  let id= $(this).attr("data-planid");
  let condition=$(this).attr("data-condition");
  let value= (condition=== "0")? true :false

  $.ajax({
    url:`/api/burgers/${id}/${value}`,
    type:'PUT'
  })
  .then(
    function() {
      // Reload the page to get the updated list
      location.reload();
    }
  )
  .catch()
})

$("#update").on("click",function(event){
  event.preventDefault();
  let value=$("textarea[name=upburger]").val().trim()
  let id=$("#selected").val()
  
  $.ajax({
    url:`/api/name/${id}`,
    type:'PUT',
    data:{
      update_name:value
    }
  })
  .then(
    function() {
      // Reload the page to get the updated list
      location.reload();
    }
  )
  .catch(console.log('stopped here'))

})

$(".delete").on("click",function(event){
  event.preventDefault();

  let id=$(this).attr('data-deleteid')
  
  $.ajax({
    url:`/api/delete/${id}`,
    type:'DELETE',
   
  })
  .then(
    function() {
      // Reload the page to get the updated list
      location.reload();
    }
  )
  .catch(console.log('stopped here'))

})