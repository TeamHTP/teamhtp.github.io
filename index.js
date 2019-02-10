var htpApp = new Vue({
  el: '#app',
  data: {
    ghUsers: []
  }
});

var teamLogins = [
  'cata85',
  'dominictassio',
  'marshingjay',
  'tma02'
];

function getUser(login, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.github.com/users/${login}`, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      callback(xhr.status, xhr.responseText);
    }
  }
  xhr.send();
}

teamLogins.forEach((login) => {
  getUser(login, (status, responseText) => {
    if (status == 200) {
      htpApp.ghUsers.push(JSON.parse(responseText));
    }
  });
});
