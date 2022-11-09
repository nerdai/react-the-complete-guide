import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      src="https://d3p2634vqbf9ci.cloudfront.net/8_iai%20pets_78.png"
      alt="A Firs Meetup"
      title="A First Meetup"
      address="Some Stree 5, Some City"
      description="The meetup description"
    ></MeetupDetail>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: "https://d3p2634vqbf9ci.cloudfront.net/8_iai%20pets_78.png",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Stree 5, Some City",
        description: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
