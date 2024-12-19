//your JS code here. If required.

const textInput=document.getElementById('text')
const delayInput = document.getElementById('delay');
const outputDiv=document.getElementById('output')
const btn=document.getElementById('btn')

 function getData(text,delay){

        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(text)
                })
                
                
                
                },delay)
            }
        
        
    



async function fetchData(){
    event.preventDefault();
    try {
        const text = textInput.value; // Get the text from input

const delay=delayInput.value.value
        if (!text) {
            outputDiv.innerText = "Please enter some text.";
            return;
        }

        const data = await getData(text,delay); // Wait for the promise to resolve
        outputDiv.innerText = data; // Display the resolved value
    } catch (error) {
        console.error("Error:", error);
    }

   
}



btn.addEventListener("click",fetchData)