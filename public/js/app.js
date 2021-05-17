console.log('Client side javascript file is loaded!')

fetch("/weather?address=agra").then((resp) => {
  console.log(resp)  
  resp.json().then((data)=>{
    console.log(data)
  })
});

