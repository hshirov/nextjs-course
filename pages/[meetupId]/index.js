import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return <MeetupDetail
        title={'First Meetup'}
        image={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'}
        address={'Some address'}
        description={'This is the first meetup'}
    />
};

export default MeetupDetails;