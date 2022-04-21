import MeetupList from '../components/meetups/MeetupList';

const meetups = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address',
        description: 'This is the first meetup'
    }
];

const HomePage = () => {
    return <MeetupList meetups={meetups} />;
}

export default HomePage;