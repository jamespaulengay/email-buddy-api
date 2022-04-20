const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
