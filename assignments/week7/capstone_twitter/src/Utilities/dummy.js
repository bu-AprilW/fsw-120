import faker from 'faker';
import '@expo/vector-icons';
import moment from 'moment';

const dummyUserNum = 10;
const dummyTweetNum = 10;

const dummyUserCreate = () => {
    let dummyUsers = [];
    for (let i = 0; i < dummyUserNum; i++) {
        dummyUsers.push({
            id: faker.internet.userName(),
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatarImageUrl: faker.internet.avatar(),
            phrase: faker.hacker.phrase(),
            bannerImageUrl: 'https://picsum.photos/1280/1024/?image=' +
                Math.round(Math.random() * 1025),
            location: faker.address.city(),
            url: faker.internet.url(),
            friendsCount: Math.round(Math.random() * 10000),
            followersCount: Math.round(Math.random() * 10000),
        });
    }
    return dummyUsers;
};

export const dummyUsers = dummyUserCreate();

const createDummyCount = () => {
    if (Math.random() < 0.2) {
        return Math.floor(Math.random() * 1000);
    } else {
        return 0;
    }
};

export const dummyTweetsCreate = users => {
    let dummyTweets = [];

    for (let i = 0; i < dummyTweetNum; i++) {
        const postUser = users[Math.floor(Math.random() * users.length)];

        dummyTweets.push({
            sentences: faker.lorem.sentences(),
            userId: postUser.id,
            userName: postUser.name,
            userEmail: postUser.email,
            userAvatarImageUrl: postUser.avatarImageUrl,
            contributedTime: moment(faker.date.past()).format('MMM D'),
            retweetCount: createDummyCount(),
            favoriteCount: createDummyCount(),
            replyCount: createDummyCount(),
        });
    }
    console.trace();
    return dummyTweets;
};