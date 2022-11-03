import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://d3p2634vqbf9ci.cloudfront.net/8_iai%20pets_78.png",
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: "m2",
    title: "A First Meetup",
    image: "https://d3p2634vqbf9ci.cloudfront.net/8_iai%20pets_81.png",
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
