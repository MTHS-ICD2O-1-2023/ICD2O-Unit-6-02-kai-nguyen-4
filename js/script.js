// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-02-kai-nguyen-4/sw.js", {
    scope: "/ICS2O-Unit-6-02-kai-nguyen-4/",
  })
}

let cookieCount = 0

function updateCookieCount() {
  // save to local storage
  console.log(localStorage.cookieCount)
  if (localStorage.cookieCount) {
    cookieCount = Number(localStorage.cookieCount)
  } else {
    localStorage.cookieCount = cookieCount
  }
  document.getElementById("answer").innerHTML = "You have: " + cookieCount + " cookies"
}

function cookieClicked() {
  cookieCount += 1
  localStorage.cookieCount = cookieCount
  console.log(localStorage.cookieCount)
}

