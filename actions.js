const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }  
    });
});

const hiddenElements1 = document.querySelectorAll('.hidden1');
hiddenElements1.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer.observe(el));


const observe2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show2');
        }  
    });
});

const hiddenElements3 = document.querySelectorAll('.hidden3');
hiddenElements3.forEach((el) => observe2.observe(el));