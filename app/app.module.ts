/// <reference path="../tools/typings/tsd.d.ts" />
/// <reference path="../tools/typings/app.d.ts" />

module app {
  'use strict';

  angular.module('app', [
    'app.home',
    'app.about',
    'ui.router'
  ]);
}