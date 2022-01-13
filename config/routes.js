/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  // 'GET /api/chatMessage': { action: ''},
  'POST /api/newplayer': { action:'game/newplayer' },
  'GET /test_2': { action:'usersconnected' },

  // TODO: bring order to API routes.

  /*  /============
     |  Game routes
     \=============
   */

  'GET /api/getplayers': { action:'game/getplayers' },

  /*  /============
     |  Chat routes
     \=============
   */

  'POST /test': { action:'chat/sockets/subscribetoroom' },
  'POST /chat/sendmessage': { action: 'chat/sendmessage'},

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
