const events = [
    {
        'pamflet':'/assets/images/gdscEvent2.png',
        'date':'Jun 2, 2024',
        'title':'Maximize Your Content with Beautiful Assets',
        'eventType':'Speaker Session/Tech Talk',
    },
    {
        'pamflet':'/assets/images/gdscEvent3.png',
        'date':'May 16, 2024',
        'title':'Womenland Summer: Girls Who Code, Girls Who Inspire!',
        'eventType':'External Ticketing/External RSVP',
    },
    {
        'pamflet':'/assets/images/gdscEvent4.png',
        'date':'May 18, 2024',
        'title':'Essential Tools and Minsets For Success in any Market',
        'eventType':'External Ticketing/External RSVP',
    },
    {
        'pamflet':'/assets/images/gdscEvent4.png',
        'date':'Apr 21, 2024',
        'title':'InspireHER : Empowering Women in Professional 2024',
        'eventType':'Speaker Session/Tech Talk',
    },
]

const cards = document.getElementById('cards');

for(let event of events){
    const card = document.createElement("div");
    if(event.eventType == 'Speaker Session/Tech Talk'){
        card.innerHTML = `
        <div class="h-80 md:h-[350px] w-52 md:w-72 bg-white rounded-lg border-[0.5px] border-secondary-dark">
                <div class="h-40 md:h-52 w-full bg-slate-50 rounded-t-lg border-b-[0.5px] border-b-secondary-dark bg-cover bg-center" style="background-image: url(${event.pamflet});"></div>
                <div class="h-full flex flex-col px-6 py-3 gap-4">
                    <div class="flex items-center gap-2">
                        <img class="h-3" src="/assets/icons/IconDateGrey.png" alt="calender icon">
                        <span class="text-secondary-darker text-xs">${event.date}</span>
                    </div>
                    <h3 class="text-xs md:text-sm font-bold">${event.title}</h3>
                        <button class="text-xxs md:text-xs text-danger-lighter font-semibold px-6 py-0.5 border-danger-lighter border-[1.5px] rounded-[30px] w-fit">
                            ${event.eventType}
                        </button>
                </div>
            </div>
            `;
    }else{
        card.innerHTML = `
        <div class="h-80 md:h-[350px] w-52 md:w-72 bg-white rounded-lg border-[0.5px] border-secondary-dark">
                <div class="h-40 md:h-52 w-full bg-slate-50 rounded-t-lg border-b-[0.5px] border-b-secondary-dark bg-cover bg-center" style="background-image: url(${event.pamflet});"></div>
                <div class="flex flex-col px-6 py-3 gap-4">
                    <div class="flex items-center gap-2">
                        <img class="h-3" src="/assets/icons/IconDateGrey.png" alt="calender icon">
                        <span class="text-secondary-darker text-xs">${event.date}</span>
                    </div>
                    <h3 class="text-xs md:text-sm font-bold">${event.title}</h3>
                        <button class="text-xxs md:text-xs text-xs text-succes-lighter font-semibold px-6 py-0.5 border-succes-lighter border-[1.5px] rounded-[30px] w-fit">
                            ${event.eventType}
                        </button>
                </div>
            </div>
            `;
    }

    cards.appendChild(card);
}
