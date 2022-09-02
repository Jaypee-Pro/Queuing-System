document.addEventListener('DOMContentLoaded',function(){
        sectionHead()
        sectionBody()
       counter()
       //PopulateVoices()
})




//function for section head
function sectionHead(){
       const container = document.querySelector('.container')
       const ongoing = document.createElement('div')
       const active = document.createElement('div')
    
       for (i = 1; i <= 5; i++) {
               // alert(i)
               const div = document.createElement('div')
               const h1 = document.createElement('h1')
               const h1B = document.createElement('h1')
               const h1Count = document.createElement('h1')
               //card
               div.className = 'card Counter-'+i
               div.innerHTML = i
               container.appendChild(div)
                
       
               //p
               h1B.innerText = 0
               h1B.className = 'section-'+i
               div.appendChild(h1B)
              
               //h1
               h1.innerText = 'Counter'
               h1.className = 'counter'
               div.appendChild(h1)
       
       
       } 
       ongoing.className = 'section-6'
       ongoing.innerText = 'Ongoing...'
       container.appendChild(ongoing)
       
       active.className = 'active'
      // active.innerText = '1'
       ongoing.appendChild(active)
       let x = 1;
       for (x; x <= 5; x++) {
            const act = document.createElement('div');
            act.className = 'act'+x
            act.innerText = 0
            active.appendChild(act)
       }
}

//section body

function sectionBody(){
        const conBody = document.querySelector('.container-body')
        const userNumber = 100;
        for (var i = 1; i < 100; i++) {
                const userDiv = document.createElement('div')
                
                userDiv.className = 'userDiv'
                userDiv.innerText = i
                conBody.appendChild(userDiv)
        }
        

}

function counter(){
        
        const btn = document.querySelectorAll('button')
        const updateCounter = document.querySelectorAll('.card')
        let counterPos = ''
        let id = ''
        
        let c = 0;
        btn.forEach(function(button){
                
                button.onclick = function(){
                        c++;
                       // let id = ''
                        updateCounter.forEach(function(e) {
                                counterPos = e.className
   
                    if(button.dataset.name == counterPos){
                     
                    id = button.dataset.id
                      document.querySelector(`.section-${id}`).innerHTML = c
                      
                      document.querySelector(`.act${id}`).innerText = c
                      
                      
                    }
                    loop(c)
                        })
                
                //speak
                var voiceList = document.querySelector('#voiceList');
                var synth = window.speechSynthesis;
                var voices = [];
                
                PopulateVoices();
                if (speechSynthesis !== undefined) {
                        speechSynthesis.onvoiceschanged = PopulateVoices;
                }
                
                
                var toSpeak = new SpeechSynthesisUtterance(`Number${c} go to counter${id}`);
               var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
             
                voices.forEach((voice) => {
                        if (voice.name === selectedVoiceName) {
                                toSpeak.voice = voice;
                        }
                });
                synth.speak(toSpeak);
                //});
                
                function PopulateVoices() {
                        voices = synth.getVoices();
                        var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
                        voiceList.innerHTML = '';
                        voices.forEach((voice) => {
                                var listItem = document.createElement('option');
                                listItem.textContent = voice.name;
                                listItem.setAttribute('data-lang', voice.lang);
                                listItem.setAttribute('data-name', voice.name);
                                voiceList.appendChild(listItem);
                        });
                
                        voiceList.selectedIndex = selectedIndex;
                }
               
                }
                
        })
}


//loop for number and hide it 
function loop(c){
        let hideNum = 'display:none'
        let showNum = 'display:block'
        const waitingNum = document.querySelectorAll('.userDiv')
       //console.log(c)
waitingNum.forEach(function(value){
           if(c == value.innerText){
                   value.style = hideNum
           } 
               
       })
}

//speech funxtion
function speech(txtInput){
      //  var txtInput = document.querySelector('#txtInput');
        var voiceList = document.querySelector('#voiceList');
        var btnSpeak = document.querySelector('#btnSpeak');
        var synth = window.speechSynthesis;
        var voices = [];
        
        PopulateVoices();
        if (speechSynthesis !== undefined) {
                speechSynthesis.onvoiceschanged = PopulateVoices;
        }
        
       // btnSpeak.addEventListener('click', () => {
                var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
                var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
                voices.forEach((voice) => {
                        if (voice.name === selectedVoiceName) {
                                toSpeak.voice = voice;
                        }
                });
                synth.speak(toSpeak);
        //});
        
        function PopulateVoices() {
                voices = synth.getVoices();
                var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
                voiceList.innerHTML = '';
                voices.forEach((voice) => {
                        var listItem = document.createElement('option');
                        listItem.textContent = voice.name;
                        listItem.setAttribute('data-lang', voice.lang);
                        listItem.setAttribute('data-name', voice.name);
                        voiceList.appendChild(listItem);
                });
        
                voiceList.selectedIndex = selectedIndex;
        }
}
