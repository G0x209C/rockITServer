/**
 * GenerateCodeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = {

  friendlyName: 'genCode',

  description: 'Generate game code',


  fn: async function(){
    result = [];
    for(i=0; i<6; i++){
      result[i] = chars[Math.floor(Math.random()*chars.length)];
    }
    return result.join('');
  }

};

