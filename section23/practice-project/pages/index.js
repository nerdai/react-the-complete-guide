import Head from "next/head";
import { MongoClient } from "mongodb";
import { CLIENT_STATIC_FILES_RUNTIME } from "next/dist/shared/lib/constants";

import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image: "https://d3p2634vqbf9ci.cloudfront.net/8_iai%20pets_78.png",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A First Meetup",
//     image: "https://d3p2634vqbf9ci.cloudfront.net/8_iai%20pets_81.png",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//
//   // fetch data from an API
//   // this will run on server
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

// this code is executed here on server
export async function getStaticProps() {
  // fetch data from an API

  const dbUrl = `mongodb+srv://nerdai:${process.env.DB_PASSWORD}@cluster0.d79yy1m.mongodb.net/meetupsDB?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(dbUrl);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray(); // find all docs in this collection

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
