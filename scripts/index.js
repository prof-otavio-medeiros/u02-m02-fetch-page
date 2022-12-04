let resource;
let fetchOptions;
let response;
let data;
const url = "https://jsonplaceholder.typicode.com";

document.getElementById("main-legend").innerText = `REST API (${url})`;

///////////////////////////////////////////////////////////////////////////////

//
// GET (READ) - ALL 'USERS'
//
async function getAllUsers() {
  let getAllElements;
  let dataList;

  resource = `${url}/users`;

  fetchOptions = {
    method: "GET",
  };

  response = await fetch(resource, fetchOptions);

  data = await response.json();

  getAllElements = JSON.stringify(data, null, 2);

  document.getElementById("get-all-users-result").value = getAllElements;

  dataList = data.map((dataElement) => {
    return `<li>${dataElement.name}<br>${dataElement.email.toLowerCase()}</li>`;
  });

  dataList.forEach((dataListElement) => {
    document.getElementById("get-all-users-ul").innerHTML += dataListElement;
  });
}

function getAllUsersClear() {
  document.getElementById("get-all-users-result").value = "";
  document.getElementById("get-all-users-ul").innerHTML = "";
}

///////////////////////////////////////////////////////////////////////////////

//
// GET (READ) - ONE 'USER'
//
async function getOneUser() {
  let getOneElement;
  let userId = document.getElementById("get-selected-user-id").value;

  resource = `${url}/users/${userId}`;

  fetchOptions = {
    method: "GET",
  };

  response = await fetch(resource, fetchOptions);

  data = await response.json();

  getOneElement = JSON.stringify(data, null, 2);

  document.getElementById("get-one-user-resource").value = resource;

  document.getElementById("get-one-user-result").value = getOneElement;
}

function getOneUserClear() {
  document.getElementById(
    "get-one-user-resource"
  ).value = `${url}/users/{userId}`;
  document.getElementById("get-one-user-result").value = "";
  document.getElementById("get-selected-user-id").value = 1;
}

///////////////////////////////////////////////////////////////////////////////

//
// GET (READ) - ALL 'TODOS'
//
async function getAllTodos() {
  let getAllElements;
  let dataList;

  resource = `${url}/todos`;

  fetchOptions = {
    method: "GET",
  };

  response = await fetch(resource, fetchOptions);

  data = await response.json();

  getAllElements = JSON.stringify(data, null, 2);

  document.getElementById("get-all-todos-result").value = getAllElements;
}

function getAllTodosClear() {
  document.getElementById("get-all-todos-result").value = "";
}

///////////////////////////////////////////////////////////////////////////////

//
// PUT (UPDATE) - ONE
//
async function getOneTodo() {
  let todoId = document.getElementById("put-selected-todo-id").value;

  resource = `${url}/todos/${todoId}`;

  document.getElementById("put-one-todo-resource").value = resource;

  fetchOptions = {
    method: "GET",
  };

  response = await fetch(resource, fetchOptions);

  data = await response.json();

  document.getElementById("put-one-todo-id").value = data.id;
  document.getElementById("put-one-todo-user-id").value = data.userId;
  document.getElementById("put-one-todo-title").value = data.title;
  document.getElementById("put-one-todo-completed").checked = data.completed;
}

function putOneTodoClear() {
  document.getElementById(
    "put-one-todo-resource"
  ).value = `${url}/todos/{todoId}`;
  document.getElementById("put-one-todo-id").value = "";
  document.getElementById("put-one-todo-user-id").value = "";
  document.getElementById("put-one-todo-title").value = "";
  document.getElementById("put-one-todo-completed").checked = false;
  document.getElementById("put-one-todo-id-after").value = "";
  document.getElementById("put-one-todo-user-id-after").value = "";
  document.getElementById("put-one-todo-title-after").value = "";
  document.getElementById("put-one-todo-completed-after").checked = false;
}

async function putOneTodo() {

  fetchOptions = {
    method: "PUT",
    body: JSON.stringify({
      userId: document.getElementById("put-one-todo-user-id").value,
      title: document.getElementById("put-one-todo-title").value,
      completed: document.getElementById("put-one-todo-completed").checked,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  let todoId = document.getElementById("put-selected-todo-id").value;

  resource = `${url}/todos/${todoId}`;

  response = await fetch(resource, fetchOptions);

  data = await response.json();

  document.getElementById("put-one-todo-id-after").value = data.id;
  document.getElementById("put-one-todo-user-id-after").value = data.userId;
  document.getElementById("put-one-todo-title-after").value = data.title;
  document.getElementById("put-one-todo-completed-after").checked = data.completed;
}

///////////////////////////////////////////////////////////////////////////////
