const express = require('express');
//import in express library
const passport = require('passport');
//library that includes passport module
const GoogleStrategy = require('passort-google-oauth20').Strategy;
//import needed oauth strategy, only use one property: .Strategy

const app = express();

passport.use(new GoogleStrategy());
//give passport library awareness of specific oauth strategy;

const PORT = process.env.PORT || 5000;
//set port to either Heroku provided, or 5000
app.listen(PORT);
