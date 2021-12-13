/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const {
  addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,

  },
  {
      method: 'GET',
      path: '/books',
      handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
      method: 'PUT',
      path: '/books/{id}',
      handler: editBookByIdHandler,
  },
  {
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBookByIdHandler,
  },
  {
      method: '*',
      path: '/{any*}',
      handler: () => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;