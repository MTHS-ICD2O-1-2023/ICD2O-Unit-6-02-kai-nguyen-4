// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

function updateCookieCount() {
  if (localStorage.clicks) {
    localStorage.clicks = Number(localStorage.clicks)
  } else {
    localStorage.clicks = 1
  }
  document.getElementById("clicks").innerHTML = localStorage.clicks
}

function cookieClicked() {
  localStorage.clicks = Number(localStorage.clicks) + 1

  document.getElementById("clicks").innerHTML = localStorage.clicks
}
