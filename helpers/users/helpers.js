import { getUserFromAllUsers } from "./users";

export const getUniqueUser = async(userCollection, userIds, usersCount, profession) => {
  let randomNum = Math.floor(Math.random() * usersCount);
  let user = await getUserFromAllUsers(randomNum);

  while (userIds.includes(user.id) || user.profession !== profession) {
    randomNum = Math.floor(Math.random() * usersCount);
    user = await getUserFromAllUsers(randomNum);
  }

  userCollection.push(user);
  userIds.push(user.id);
};
