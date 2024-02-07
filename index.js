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