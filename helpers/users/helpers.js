import { getUserFromAllUsers, getProjectFromAllProjects } from "./users";

export const getUniqueUser = async(userCollection, userIds, usersCount, profession = null) => {
  let randomNum = Math.floor(Math.random() * usersCount);
  let user = await getUserFromAllUsers(randomNum);

  while (userIds.includes(user.id) || user.profession !== profession && profession !== null) {
    randomNum = Math.floor(Math.random() * usersCount);
    user = await getUserFromAllUsers(randomNum);
  }

  user.profession = user.profession.split("\n")[0];
  userIds.push(user.id);
  userCollection.push(user);
};

export const getUniqueProject = async(projectsCollection, projectIds, projectsCount) => {
  let project = await retrieveProject(projectsCount);

  while(projectIds.includes(project.id)) {
    project = retrieveProject(projectsCount);
  }

  projectIds.push(project.id)
  projectsCollection.push(project);
}

export const getRandomNum = (max) => {
  const num = Math.floor(Math.random() * max);
  return num;
}

const retrieveProject = async(projectsCount) => {
  let randomNum = getRandomNum(projectsCount);
  let project = await getProjectFromAllProjects(randomNum);
  return project;
}