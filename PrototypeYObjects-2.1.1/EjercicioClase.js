class User {
    username;
    password;
    hobbies;
    friends;
    communities;

    constructor(username, password, hobbies){
        this.username = username;
        this.password = password;
        this.hobbies = hobbies;
        this.friends = [];
        this.communities = [];
    }

    addFriend(newFriend){
        this.friends = [...this.friends, newFriend];
    }

    joinCommunity(newCommunity){
        this.communities = [...this.communities, newCommunity];
    }
}

const user1 = new User("Diego75", "123", ["Gym", "Videojuegos", "Guitarra"]);

user1.addFriend("Ana");

console.log(user1);

user1.addFriend("Carlos");

user1.joinCommunity("Guitar lessons");
