const curvedTextOne = document.querySelector('#curved-text-1 p');
const curvedTextTwo = document.querySelector('#curved-text-2 p');
const curvedTextThree = document.querySelector('#curved-text-3 p');

curvedTextOne.innerHTML = curvedTextOne.innerText.split('').map(
    (char, i) =>   `
        <span style="transform:rotate(${i * 7.2}deg)">${char}</span>
    `
).join('');

curvedTextTwo.innerHTML = curvedTextTwo.innerText.split('').map(
    (char, i) =>   `
        <span style="transform:rotate(${i * 10.3}deg)">${char}</span>
    `
).join('');

curvedTextThree.innerHTML = curvedTextThree.innerText.split('').map(
    (char, i) =>   `
        <span style="transform:rotate(${i * 16}deg)">${char}</span>
    `
).join('');

const chapters = [
    {
        title: "Today's Watuka",
        content: "Nestled in the picturesque landscapes of Nyeri County, Kenya, lies the quaint village of Watuka. Originally a humble settlement, Watuka has grown into a bustling small shopping center, attracting migrants from far and wide seeking opportunities amidst the verdant fields of agricultural abundance."
    },

    {
        title: "Agriculturally Charged",
        content: "At the core of Watuka's economy pulses the rhythm of agricultural life. Fields of potatoes, carrots, and cabbage stretch as far as the eye can see, cultivated by the diligent hands of its inhabitants. Daily farming and poultry rearing add layers of diversity to the agricultural tapestry, sustaining the livelihoods of the community."
    },

    {
        title: "Nurturing Minds, building Futures",
        content: "Education stands tall in Watuka, with four primary schools, two secondary schools, and a vocational training center laying the foundation for future generations. Here, knowledge blooms like the wildflowers in the fields, empowering young minds to reach for the stars."
    },

    {
        title: "Community Healthcare",
        content: "Healthcare is not far from reach in Watuka, with a dispensary and private mini-dispensaries catering to the wellness needs of the residents. The community's well-being is safeguarded by the presence of these healthcare facilities, ensuring that no ailment goes unnoticed or untreated."
    },

    {
        title: "Guardians of Order",
        content: "A watchful eye oversees the tranquility of Watuka, with a police post standing sentinel against the shadows of unrest. Safety and security are paramount in this tight-knit community, fostering a sense of peace and harmony among its inhabitants."
    },

    {
        title: "Road web",
        content: "All-weather roads crisscross the landscape, weaving Watuka into the fabric of neighboring localities. Transportation flows smoothly along these arteries, with motorcycles ferrying passengers to and fro, connecting Watuka to the wider world beyond its borders."
    }, 

    {
        title: "Warm Hearts, Strong Hands",
        content: "The true essence of Watuka lies in its people—warm, welcoming, and industrious. Rooted in tradition yet embracing change, the locals exemplify resilience in the face of adversity, standing as beacons of hope in a world of uncertainty."
    }, 

    {
        title: "Language of Unity",
        content: "In the bustling marketplace of Watuka, the air is alive with the melodic cadence of Kikuyu, the language of the land. Yet, amidst the chatter, echoes of Kiswahili and English can be heard, bridging gaps and fostering understanding among the diverse tapestry of tongues."
    },

    {
        title: "Embracing Nature's Whims",
        content: "Weather wields its brush with a deft hand in Watuka, painting the skies with hues of cool and hot, cold and chilly. Yet, through it all, the spirit of resilience burns bright, as Watuka's inhabitants weather the storms with unwavering resolve."
    },

    {
        title: "Tapestry of Memories",
        content: "As the sun sets over the rolling Aberdare Ranges, the memories of Watuka linger like the whispers of a gentle breeze. In the heart of this small shopping center, where fields meet civilization, the story of Watuka continues to unfold—a testament to the resilience of the human spirit and the enduring bonds of community."
    }
];

let currentChapterIndex = 0;

const chapterTitleElem = document.getElementById("chapter-title");
const chapterContentElem = document.getElementById("chapter-content");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const nextImg = document.getElementById("next-img");
const prevImg = document.getElementById("prev-img");
const paginationContainer = document.getElementById("pagination");

function renderPagination() {
    paginationContainer.innerHTML = ''; // Clear existing pagination
    const start = Math.max(0, currentChapterIndex - 1);
    const end = Math.min(chapters.length);
    for (let i = start; i < end; i++) {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        dot.dataset.index = i; // Assign index to dataset for easy retrieval
        if (i === currentChapterIndex) {
            dot.classList.add('active');
        }
        paginationContainer.appendChild(dot);
    }
}

function updateActiveDot() {
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
        if (index === currentChapterIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function renderChapter(index) {
    const chapter = chapters[index];
    chapterTitleElem.textContent = chapter.title;
    chapterContentElem.textContent = chapter.content;
    updateActiveDot();
}

function handlePaginationDotClick() {
    currentChapterIndex = parseInt(this.dataset.index);
    renderChapter(currentChapterIndex);
}

function goToPrevChapter() {
    currentChapterIndex = (currentChapterIndex - 1 + chapters.length) % chapters.length;
    renderChapter(currentChapterIndex);
}

function goToNextChapter() {
    currentChapterIndex = (currentChapterIndex + 1) % chapters.length;
    renderChapter(currentChapterIndex);
}

function displayNextImg() {
    nextImg.classList.remove('hidden');
}

function displayPrevtImg() {
    prevImg.classList.remove('hidden');
}

function hideNextImg() {
    nextImg.classList.add('hidden');
}

function hidePrevtImg() {
    prevImg.classList.add('hidden');
}

prevBtn.addEventListener("click", goToPrevChapter);
nextBtn.addEventListener("click", goToNextChapter);
nextBtn.addEventListener('mouseover', displayNextImg);
prevBtn.addEventListener('mouseover', displayPrevtImg);
nextBtn.addEventListener('mouseleave', hideNextImg);
prevBtn.addEventListener('mouseleave', hidePrevtImg);

// Add event listeners for pagination dots
const paginationDots = document.querySelectorAll('.pagination-dot');
paginationDots.forEach(dot => {
    dot.addEventListener('click', handlePaginationDotClick);
});

// Initial render
renderChapter(currentChapterIndex);
renderPagination();



const currentYearElem = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearElem.textContent = currentYear;




const guideCard = document.querySelector('.card__inner');


guideCard.addEventListener('click',function(){
    guideCard.classList.toggle('is-flipped');
});