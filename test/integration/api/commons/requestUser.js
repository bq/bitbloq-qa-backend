'use strict';
var argv = require('yargs').argv,
    Request = require('./request.js'),
    request = new Request();

var RequestUser = function() {

    this.config = require('../../../config/config.json');

    //HEAD /user/username/:username
    this.checkUsername = function(username) {
        return request.head(this.config.env[argv.env].backend+'/user/username/'+username).then(function(response) {
            return response;
        });
    };

    //HEAD /user/:id/ban
    this.banUser = function(id,authorizationToken) {
        return request.head(this.config.env[argv.env].backend+'/user/'+id+'/ban',{headers:{'Authorization':'Bearer '+authorizationToken}}).then(function(response) {
            return response;
        });
    };

    //HEAD /user/:id/unban
    this.unbanUser = function(id,authorizationToken) {
        return request.head(this.config.env[argv.env].backend+'/user/'+id+'/unban',{headers:{'Authorization':'Bearer '+authorizationToken}}).then(function(response) {
            return response;
        });
    };

    //GET /user/banned
    this.getUserBanned = function() {
        return request.get(this.config.env[argv.env].backend+'/user/banned').then(function(response) {
            return response;
        });
    };

    //GET /user (admin)
    this.getListOfUser = function(authorizationToken) {
        return request.get(this.config.env[argv.env].backend+'/user/',{headers:{'Authorization':'Bearer '+authorizationToken}}).then(function(response) {
            return response;
        });
    };

    //POST /user
    this.createUser = function(user) {
        return request.post(this.config.env[argv.env].backend+'/user/',user).then(function(response) {
            return response;
        });
    };

    //GET /user/email/:email
    this.getUserByEmail = function(email) {
        return request.get(this.config.env[argv.env].backend+'/user/email/'+email).then(function(response) {
            return response;
        });
    };

    //POST /auth/local
    this.login = function(user) {
        return request.post(this.config.env[argv.env].backend+'/auth/local/',user).then(function(response) {
            return response;
        });
    };

    //GET /user/me
    this.getUserInfo = function(token) {
        return request.get(this.config.env[argv.env].backend+'/user/me/',{headers:{'Authorization':'Bearer '+token}}).then(function(response) {
            return response;
        });
    };

    //GET /user/:id
    this.getUserProfile = function(id) {
        return request.get(this.config.env[argv.env].backend+'/user/'+id).then(function(response) {
            return response;
        });
    };

    //PUT /user/me
    this.updateUser = function(user,token) {
        return request.put(this.config.env[argv.env].backend+'/user/me',user,{headers:{'Authorization':'Bearer '+token}}).then(function(response) {
            return response;
        });
    };

    //PUT /user/me/password
    this.updatePassword = function(password,token) {
        return request.put(this.config.env[argv.env].backend+'/user/me/password',password,{headers:{'Authorization':'Bearer '+token}}).then(function(response) {
            return response;
        });
    };

    //POST /user/forgot
    this.forgotPass = function(email) {
        return request.post(this.config.env[argv.env].backend+'/user/forgot',email).then(function(response) {
            return response;
        });
    };

};
module.exports = RequestUser;