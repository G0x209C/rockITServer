#!/usr/bin/env node

// load any custom code, configure the env, as needed
import {api,log} from 'actionhero';

async function main() {
  // create a new actionhero process
  const { Process } = await import("actionhero");
  const app = new Process();

  const mongoose = require('mongoose');
  const mongouri ="mongodb://127.0.0.1:27017/uitdaging?directConnection=true&serverSelectionTimeoutMS=2000";
  mongoose.connect(mongouri,{useUnifiedTopology:true})
      .then(result=>{
        log("Database connected", 'info')
        console.log('connected to db');
      }).catch(err=>{
        log(`Couldn't connect to database: ${err}`, 'error');
        console.log(`Couldn't connect to database: ${err}`);
  });

  // handle unix signals and uncaught exceptions & rejections
  app.registerProcessSignals((exitCode) => {
    process.exit(exitCode);
  });

  // start the app!
  // you can pass custom configuration to the process as needed
  await app.start();
}

main();
