// function delayedMassage(massage, delay) {
//     setTimeout(() => {
//         console.log(massage);}, delay);

// }

// delayedMassage("Cообщение 1",1000);
// delayedMassage("Cообщение 2",3000);
// delayedMassage("Cообщение 3",2000);



// Функция getUserData
// ● Описание:
// 1. Функция принимает идентификатор пользователя (ID) в качестве
// аргумента и использует fetch для получения данных с удаленного
// сервера.
// 2. Функция возвращает промис, который разрешается с объектом данных о
// пользователе, если запрос был успешным.
// 3. Если пользователь с указанным ID не найден, промис должен быть
// отклонен с соответствующим сообщением об ошибке.
// ● Последовательность действий:
// 1. Вызовите fetch, передав URL с нужным ID пользователя.
// 2. Если ответ успешен (код 200), извлеките данные с помощью
// response.json().
// 3. Верните объект с данными о пользователе.
// 4. Если ответ не успешен, отклоните промис с сообщением об ошибке.

// function getUserData(ID) {
//     return fetch(`https://api.example.com/users/${ID}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Kod 200');
//             }
//             return response.json();
//         })
//         .then(data => { return data; })
//         .catch(error => { return Promise.reject(error.message); });
// }

// async function getUserData(userId) 
// { try
//      { const response = await fetch(`https://api.example.com/users/${userId}`);
//       if (!response.ok) 
//         { throw new Error('User not found'); }
//             const userData = await response.json();
//                 return userData;
//      } 
//      catch 
//         (error) 
//             { return Promise.reject(error.message); }
// }

// getUserData(1) .then(userData => 
//     { console.log(userData);}) 
//      .catch(error => { console.error(error);});




//////////////////////////////////////////////////////////////////////////////


// Задание 2: "Отправка данных на сервер"
// Реализуйте функцию для отправки данных о пользователе на сервер:
// Функция saveUserData
// ● Описание:
// ○ Функция принимает объект с данными о пользователе и использует
// fetch для отправки данных на удаленный сервер.
// ○ Функция возвращает промис, который разрешается, если данные
// успешно отправлены.
// ○ Если запрос неуспешен, промис должен быть отклонен с
// соответствующим сообщением об ошибке.
// ● Подсказка:
// ○ Используйте метод POST и задайте заголовок Content-Type как
// application/json.
// ○ Объект с данными о пользователе необходимо сериализовать в
// JSON-строку с помощью JSON.stringify().


// function saveUserData(user) {
//     return new Promise((resolve, reject) => 
//         { fetch('https://example.com/api/user', 
//             { method: 'POST',
                
//                 headers: { 'Content-Type': 'application/json' },
//                  body: JSON.stringify(user) 
//                 }) 
//                     .then(response => { if (!response.ok) { 
//                         throw new Error('Network response was not ok'); 
//                     } 
//                     return response.json(); }) 
//                     .then(data => { resolve(data); }) 
//                     .catch((error) => { reject(`Failed to send user data: ${error.message}`); }); });

//                 }
// async function saveUserData(user) 
// { 
//     try { const response = await fetch('https://api.example.com/users',
//          { method: 'POST',
//              headers: { 'Content-Type': 'application/json', },
//               body: JSON.stringify(user),
//              }); 
//              if (!response.ok) { throw new Error('Failed to save user data'); } 
//              const data = await response.json(); // Получаем данные ответа 
//              return data; // Возвращаем данные в случае успеха
//               } 
//                 catch (error) { return Promise.reject(error.message); } }



// const user = {
//     name: 'John Smith',
//     age: 30,
//     email: 'john@example.com'
//     };
//     saveUserData(user)
//         .then(() => {
//             console.log('User data saved successfully');
//         })
//         .catch(error => {
//             console.error(error);
//         });



function changeStyleDelayed(id, delay) {
    setTimeout(() => {
        const element = document.getElementById(id);
            if (element) { element.style.color = 'red';}
                },
        delay);
        
}





changeStyleDelayed('myElement', 2000);
