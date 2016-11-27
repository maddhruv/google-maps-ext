var x = document.getElementById('submit-btn').addEventListener('click',function(){
      var search = document.getElementById('search').value;
      window.location = "result.html?q="+search;
        });
