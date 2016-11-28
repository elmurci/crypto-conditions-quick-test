/*jslint node: true*/
"use strict";

const sender = require('../util/sender'),
      receiver = require('../util/receiver'),
      validator = require('../util/validator')

function start(receiver_public_key, receiver_seed, message) {
  // Create condition - Sender
  const condition = sender.createWithSubcondition(receiver_public_key, message)

  // Fullfill condition - Receiver
  const fullfillment = receiver.fullfillWithSubcondition(receiver_public_key, receiver_seed, message)

  // Validator
  validator.validate(condition, fullfillment, message)
}

module.exports = {
  start
}
