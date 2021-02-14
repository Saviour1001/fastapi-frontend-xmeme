function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
const getBtn = document.getElementById("get-btn");

const getData = () => {
  fetch("https://fastapi-backend-xmeme.herokuapp.com/memes")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((responseData) => {
      const data = responseData.reverse();
      const html = data.map((user) => {
        return `
        <div class="post">
        <div class="inner" class="background1">
        <p> Name : ${user.name} </p>
        <p> ${user.caption}</p>
        <img src = "${user.img_meme}"  alt="Your meme" 
        width = "500">
        </div>
        </div>`;
      });
      document.querySelector("#pics").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
};
getData();
