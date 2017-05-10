app.controller("registrationCtrl", ["US", function (US) {
    var vm = this;
    vm.RegistrUser = function () {
        if (vm.Un !== vm.Ps) {
            var newUser = {};
            newUser.name = vm.Un;
            newUser.sname = vm.Ln;
            newUser.password = vm.Ps;
            newUser.chat = [];
            newUser.friends = [];
            newUser.photourl = "image/avatar.jpeg";
            US.getUsers().push(newUser);
            vm.z = "#myModal";
        }
    }
}])