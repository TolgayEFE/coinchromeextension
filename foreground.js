document.querySelectorAll(".td-change24h span").forEach((item) => {
    let val = item.innerText;
  
    if (val.includes("0.0%")) {
      item.classList.add("neutral");
    }
  });
  
  
document.querySelectorAll("tr").forEach(element => {
    let a = element.querySelectorAll("td.td-change24h span")[0];
    if(a === undefined) {
       
      }else{
        a.classList.contains("text-green")?element.querySelectorAll("td")[1].classList.add("upArrow"):element.querySelectorAll("td")[1].classList.add("downArrow");
        if(a.classList.contains("neutral")){
            element.querySelectorAll("td")[1].classList.add("neutralArrow");
        }
      }
      
    });


