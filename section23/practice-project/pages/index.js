import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://d3p2634vqbf9ci.cloudfront.net/8_iai%20pets_78.png",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image: "https://d3p2634vqbf9ci.cloudfront.net/8_iai%20pets_81.png",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
];

function HomePage(props) {
  return (
      <MeetupList meetups={props.meetups} />
  );
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  // fetch data from an API
  // this will run on server
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

// // this code is executed here on server
// export async function getStaticProps() {
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS     
//     },
//     revalidate: 1
//   };
// }

export default HomePage;
