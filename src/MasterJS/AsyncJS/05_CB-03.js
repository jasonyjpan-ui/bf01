// id -> remote get user's name -> remote get user's repos

console.log("before");

/*
const getUser = (id, cbFn) => {
  setTimeout(() => {
    //remote job: get user's name
    console.log("Get an user name of id ${id} from db");
    cbFn({ id: id, name: "David" });
  }, 2000);
};

const getRepos = (username, cbFn) => {
  setTimeout(() => {
    //remote job: get user's repos
    console.log(`Get repos of user ${username}from Github`);
    cbFn(["repo1", "repo2", "repo3"]);
  }, 3000);
};

//const cbFn2 = (repos) => {
//  console.log(`user's repos:`, repos);
//};

//const cbFn1 = (user) => {
//  console.log(`user data from remote: id: ${user.id}. name: ${user.name}`);
//  getRepos(user.name, cbFn2);
//};

getUser(1, cbFn1) => {
  console.log(`user data from remote: id: ${user.id}. name: ${user.name}`);
  getRepos(user.name, (repos) => {
    console.log(`user's repos:`, repos);
  });
} // async: 交辦
*/

console.log("after");

const getComments = (repo) => {
  return new Promise((resolve, reject) => {
    //remote job: get user's name
    console.log(`Get comments for repo`);
  });
};

const getRepos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //remote job: get user's repos by user name
      console.log(`Get repos of user ${username} from Github`);
      resolve(["repo1", "repo2", "repo3"]);
    }, 3000);
  });
};

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //remote job: get user's name
      console.log(`Get an user name of id ${id} from db`);
      resolve({ id: id, name: "David" });
    }, 2000);
  });
};

getUser(1)
  .then((user) => {
    console.log(user);
    getRepos(user.name);
    return getRepos(user.name);
  })
  .then((repos) => {
    console.log(`User's repos:`, repos);
    console.log("after");
    return getComments(repos[0]);
  })
  .then((comments) => {
    console.log(comments);
    console.log("after");
  })
  .catch((err) => {
    console.error(err);
  });
