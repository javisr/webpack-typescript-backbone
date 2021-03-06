/// <reference path="../typings/tsd.d.ts" />

import $ = require("jquery");
import UserView = require("./view/UserView");
import UserModel = require("./model/UserModel");

$(() => {
    var body = $("body");
    body.html('');
    body.append(new UserView({ model: new UserModel() }).render().$el);
});