const mongoose = require('mongoose');

const agendaSchema = mongoose.Schema({});

const Agenda = mongoose.model('Agenda', agendaSchema);

module.exports = Agenda;
