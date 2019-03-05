while (q.length > 0) {
  let size = q.length;
  
  for (let w = 0; w < size; w++) {
      let word = q.shift();
      for (let i = 0; i < words.length; i++) {
          if (word === words[i]) {
              return true;
          }
      }
      
      if (!visited.hasOwnProperty(words[i])) {
          if (oneEdit(word, words[i])) {
              q.push(words[i]) 
              visited[words[i]] = true;
          }    
      }  
    }
  }      
}