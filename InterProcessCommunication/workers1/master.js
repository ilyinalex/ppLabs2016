'use strict';

module.exports = function() {

  function stringify(obj){
    let res = '';
      if(typeof(obj)!=typeof([1,2,3])) res+=obj; else
        
    for(let i = 0;i<obj.length;i++) res+=stringify(obj[i])+' ';
      return res;
  }
  let cpuCount = api.os.cpus().length;

  let workers = [];
  for (let i = 0; i < cpuCount; i++) {
    let worker = api.cluster.fork();
    workers.push(worker);
  }

  let task = [1, 2];
  let persanalTask = [];
  let result = [];
  let i = 0;
  let k = task.length/cpuCount>>0;
  let h = task.length % cpuCount;
  let j = 0;
  workers.forEach(function(worker) {
    j = 0;
    while((i<task.length)&&(j < k)){
      persanalTask.push(task[i]);
      i++;
      j++;
    }
    if(h>0){
      h--;
      
      persanalTask.push(task[i]); 
      i++;
    }
   
    worker.send({ task: persanalTask });
    
    persanalTask = [];
    worker.on('exit', function (code) {
      console.log('exit ' + worker.process.pid + ' ' + code);
    });

    worker.on('message', function (message) {
      console.log(
        'message from worker ' + worker.process.pid + ': ' +
        JSON.stringify(message) 
        
      );
      
      result[message.id-1] = message.result;
      if (result.length === cpuCount) {
          console.log(stringify(result));
        process.exit(1);
      }

    });

  });

};
