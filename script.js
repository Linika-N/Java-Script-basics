// Задание 1
//Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
function task1(){
    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
     };
     const check = 3;
     console.log("Task 1:")
     for (const a in numbers) {
        if (numbers[a] >= check) {
           console.log(numbers[a]);
        }
     };     
}
// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

function task2(){
    const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
           {
              userId: 10,
              userName: "Alex",
              text: "lorem ipsum",
              rating: {
                 likes: 10,
                 dislikes: 2, // вывести это число
              },
           },
           {
              userId: 5, // вывести это число
              userName: "Jane",
              text: "lorem ipsum 2", // вывести этот текст
              rating: {
                 likes: 3,
                 dislikes: 1,
              },
           },
        ],
     };
     console.log("Task 2:\n"+post.author+"\n"+post.comments[0].rating.dislikes+"\n"+post.comments[1].userId+"\n"+post.comments[1].text);     
}
// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
function task3(){
    const products = [
        {
           id: 3,
           price: 200,
        },
        {
           id: 4,
           price: 900,
        },
        {
           id: 1,
           price: 1000,
        },
     ];
     products.forEach(e => e.price *= 0.85);
     console.log("Task 3:")
     console.log(products);
}
// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, 
// заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
function task4(){
    const products_more = [
        {
           id: 3,
           price: 127,
           photos: [
              "1.jpg",
              "2.jpg",
           ],
        },
        {
           id: 5,
           price: 499,
           photos: [],
        },
        {
           id: 10,
           price: 26,
           photos: [
              "3.jpg",
           ],
        },
        {
           id: 8,
           price: 78,
        },
     ];

     let result = products_more.filter(x => x.photos?.length);
     console.log("Task 4:\n");
     console.log(result);
     
     products_more.sort((a, b) => a.price - b.price);
     console.log(products_more);
}
// Задание 5
// Дано 2 массива. Необходимо объединить 2 этих массива, чтобы значения первого массива были ключами,
// а значения второго массива — значениями.
function task5(){
    const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
    const union = {};
    console.log("Task 5:\n");
    for (let x = 0; x < en.length; x++) {
        union[en[x]] = ru[x];
    }
    console.log(union);     
}
task1();
task2();
task3();
task4();
task5();