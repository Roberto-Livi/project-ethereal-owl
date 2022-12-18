import { getUserFromAllUsers } from "./users";

export const getUniqueUser = async(userCollection, userIds, usersCount, profession = null) => {
  let randomNum = Math.floor(Math.random() * usersCount);
  let user = await getUserFromAllUsers(randomNum);

  while (userIds.includes(user.id) || user.profession !== profession && profession !== null) {
    randomNum = Math.floor(Math.random() * usersCount);
    user = await getUserFromAllUsers(randomNum);
  }

  user.profession = user.profession.split("\n")[0];
  userCollection.push(user);
  userIds.push(user.id);
};

export const getRandomNum = (max) => {
  const num = Math.floor(Math.random() * max);
  return num;
}