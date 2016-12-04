function stringify(obj){
     let res=''; 
     if(typeof(obj)!=typeof([1,2,3])) {
     if(typeof(obj)!='string') res+=obj;
            else                      res+='"'+obj+'"';
     }
     else
      {
       if(obj == null) res = 'null'; else 
       if("length" in obj){
        res='['
        for(let i = 0;i<obj.length;i++) res+=stringify(obj[i])+',';
        res=res.substring(0,res.length-1)+']';
       }
       else{  
        res='{';
        for(let key in obj){
          res+='"'+key+'":';
          res+=stringify(obj[key])+',';
          }
        res=res.substring(0,res.length-1)+'}';
       }
     } 
     return res;
   }