// const events = [
//     {
//         'pamflet':'/assets/images/gdscEvent2.png',
//         'date':'Jun 2, 2024',
//         'title':'Maximize Your Content with Beautiful Assets',
//         'eventType':'Speaker Session/Tech Talk',
//     },
//     {
//         'pamflet':'/assets/images/gdscEvent3.png',
//         'date':'May 16, 2024',
//         'title':'Womenland Summer: Girls Who Code, Girls Who Inspire!',
//         'eventType':'External Ticketing/External RSVP',
//     },
//     {
//         'pamflet':'/assets/images/gdscEvent4.png',
//         'date':'May 18, 2024',
//         'title':'Essential Tools and Minsets For Success in any Market',
//         'eventType':'External Ticketing/External RSVP',
//     },
//     {
//         'pamflet':'/assets/images/gdscEvent4.png',
//         'date':'Apr 21, 2024',
//         'title':'InspireHER : Empowering Women in Professional 2024',
//         'eventType':'Speaker Session/Tech Talk',
//     },
// ]

const events = [];

function fetchEventData(){
    fetch('http://127.0.0.1:8080/events')
        .then(response => response.json())
        .then(data => {
            events.push(...data);
            renderCards();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function renderCards() {
    const cards = document.getElementById('cards');
    cards.innerHTML = ''; 

    for (let event of events) {
        const card = document.createElement("div");
        card.classList.add("h-80", "md:h-[350px]", "w-52", "md:w-72", "bg-white", "rounded-lg", "border-[0.5px]", "border-secondary-dark");

        card.innerHTML = `
            <div class="h-40 md:h-52 w-full bg-slate-50 rounded-t-lg border-b-[0.5px] border-b-secondary-dark bg-cover bg-center" style="background-image: url(${event.pamflet});"></div>
            <div class="h-full flex flex-col px-6 py-3 gap-4">
                <div class="flex items-center gap-2">
                    <img class="h-3" src="/assets/icons/IconDateGrey.png" alt="calendar icon">
                    <span class="text-secondary-darker text-xs">${new Date(event.date).toLocaleDateString()}</span>
                </div>
                <h3 class="text-xs md:text-sm font-bold">${event.title}</h3>
                <button class="text-xxs md:text-xs font-semibold px-6 py-0.5 border-[1.5px] rounded-[30px] w-fit ${
                            event.eventType === 'Speaker Session/Tech Talk' ? 'text-danger-lighter border-danger-lighter' : 'text-succes-lighter border-succes-lighter'
                        }">
                            ${event.eventType}
                </button>
            </div>
        `;    

        cards.appendChild(card);
    }
}

console.log('Fetching event data...');
fetchEventData();

window.onscroll = () => {
    addScrollBorder();
    };
      
function addScrollBorder() {
    var navbar = document.getElementById("navbar");
      
    if (window.scrollY > 0) {
        navbar.classList.add("shadow-lg");
    } else {
        navbar.classList.remove("shadow-lg");
    }
}
