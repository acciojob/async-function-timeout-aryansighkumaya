        
        

const btn=document.getElementById('btn')

 function getData(text,delay){

        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(text)
                })
                
                
                
                },delay)
            }
        
        
    



async function fetchData(){
const textInput=document.getElementById('text')
const delayInput = document.getElementById('delay');
const outputDiv=document.getElementById('output')

  outputDiv.textContent = "";
	
    event.preventDefault();
    try {
const text = textInput.value; // Get the text from input
const delay=delayInput.value
        if (text && delay) {
          const data = await getData(text,delay); // Wait for the promise to resolve
        outputDiv.textContent = data; // Display the resolved value
        }

        
    } catch (error) {
        console.error("Error:", error);
    }

   
}



btn.addEventListener("click",fetchData)
