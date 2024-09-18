const reviews = [
    {
        id: 1,
        name: 'John Smith',
        job: 'Frontend Developer',
        image: 'assets/media/person-1.webp',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium minima harum earum. Culpa fugit sed laborum nesciunt? Obcaecati, sapiente voluptatibus libero accusamus dolore, laborum maiores exercitationem iure eius voluptas mollitia quo dicta fugit iste vitae voluptatum odit ipsa. Sed error consequatur provident facilis velit ipsum non obcaecati.'
    },
    {
        id: 2,
        name: 'Emily Davis',
        job: 'UI/UX Designer',
        image: 'assets/media/person-2.webp',
        content: 'Emily is a creative UI/UX Designer with a passion for creating intuitive and user-friendly digital experiences. With a keen eye for detail and a deep understanding of user behavior, she excels at turning complex ideas into sleek and effective designs. Emily’s portfolio includes successful projects ranging from mobile apps to web interfaces, all focused on enhancing user satisfaction.'
    },
    {
        id: 3,
        name: 'Michael Brown',
        job: 'Backend Developer',
        image: 'assets/media/person-3.webp',
        content: 'Michael is a highly skilled Backend Developer with expertise in server-side technologies and database management. Known for his problem-solving abilities, he plays a key role in ensuring seamless integration and robust performance of applications. He has experience working with Node.js, Python, and SQL, making him adept at building efficient and scalable backend systems.'
    },
    {
        id: 4,
        name: 'Sophia Wilson',
        job: 'Full-Stack Developer',
        image: 'assets/media/person-4.webp',
        content: 'Sophia is a versatile Full-Stack Developer who brings a balanced approach to both frontend and backend development. She enjoys creating responsive and engaging user interfaces while ensuring backend functionality is optimized for performance. With expertise in JavaScript, React, and MongoDB, Sophia consistently delivers high-quality, full-featured web applications that meet client needs.'
    },
    {
        id: 5,
        name: 'David Johnson',
        job: 'Digital Marketer',
        image: 'assets/media/person-5.webp',
        content: 'David is a results-driven Digital Marketer with a strong background in SEO, content marketing, and social media strategy. He has helped numerous brands enhance their online presence through data-driven campaigns that boost engagement and conversions. David’s innovative approach to digital marketing has earned him a reputation for being both creative and analytical, making him a valuable asset to any team.'
    },
];

const content = document.getElementById('content');
const image = document.getElementById('image');
const name = document.getElementById('name');
const job = document.getElementById('job');

const next = document.getElementById('right-button');
const prev = document.getElementById('left-button');
const random = document.getElementById('random')

let current = 0;

window.addEventListener('DOMContentLoaded',()=>{
    showPerson(current);
});

function showPerson(person) {
    const item = reviews[person];

    image.src = item.image;
    content.textContent = item.content;
    name.textContent = item.name;
    job.textContent = item.job;
}

next.addEventListener('click',()=>{
    current++;
    if(current > reviews.length -1){
        current = 0;
    }
    showPerson(current);
});

prev.addEventListener('click',()=>{
    current--;
    if(current < 0){
        current = reviews.length -1;
    }
    showPerson(current);
})

random.addEventListener('click',()=>{
    current = Math.floor(Math.random() * reviews.length);
    showPerson(current);
    console.log(current);
    
})

