app.controller("mainpageCtrl", ["US", function (US) {
    var vm = this;
    
   document.getElementById("image").style.background="url("+US.getUsers()[US.getNumber].photourl+")";  
    
//    vm.PhotoChange = function () {
//       
//        vm.phurl = "" + US.getUsers()[US.getNumber].photourl + "";
//       console.log(vm.phurl)
//        
//    };
//    vm.PhotoChange();
    vm.user = {};
    vm.allUsers = [];
    vm.allUsers = US.getUsers();
    vm.user = US.getUsers()[US.getNumber];
    vm.myVar = "Hello  " + vm.user.name;
    vm.qty = [];
    vm.Send = function (qty) {
        vm.date = new Date();
        vm.mess = {};
        vm.mess.theme = vm.theme;
        vm.mess.date = vm.date;
        vm.mess.message = vm.message;
        US.getUsers()[US.getNumber].chat.unshift(vm.mess);
        vm.theme = "";
        vm.message = "";
    };
    vm.qty = US.getUsers()[US.getNumber].chat;
    vm.addFriend = function (x) {
        vm.friend = {}
        vm.friend.name = x.name;
        vm.friend.sname = x.sname;
        vm.user.friends.push(vm.friend);
    }
    vm.removeFriend = function (y) {
        for (i in vm.user.friends)
            if (vm.user.friends[i] == y) {
                vm.user.friends.splice(i, 1);
            }
    }
//    document.querySelector('#myfile').onchange = function () {
//        vm.url = "image/" + this.files[0].name;
//        
//        US.changePhoto(US.getNumber, vm.url);
//     //vm.PhotoChange();
//        console.log(vm.user.photourl)
//        
//    }
    
    
  document.querySelector('#myfile').onchange =  function() {
  
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
 
  US.getUsers()[US.getNumber].photourl= reader.result; console.log(US.getUsers()[US.getNumber].photourl);   
 document.getElementById("image").style.background="url("+US.getUsers()[US.getNumber].photourl+")";    
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  };

      
}
    
    
    

    
    
    
}])