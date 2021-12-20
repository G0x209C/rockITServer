
module.exports = {


  friendlyName: 'genCode',


  description: 'Gencode for game.',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result=[];
    for(i=0; i<6; i++){
      result[i] = chars[Math.floor(Math.random()*chars.length)];
    }
    return exits.success(result.join(''));
  }


};

