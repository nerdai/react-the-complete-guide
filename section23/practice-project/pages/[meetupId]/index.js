import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        src={props.meetupData.image}
        alt="A Firs Meetup"
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const dbUrl = `mongodb+srv://nerdai:${process.env.DB_PASSWORD}@cluster0.d79yy1m.mongodb.net/meetupsDB?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(dbUrl);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  const dbUrl = `mongodb+srv://nerdai:${process.env.DB_PASSWORD}@cluster0.d79yy1m.mongodb.net/meetupsDB?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(dbUrl);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  // need to transform MongoDB id object to string so gotta pull it out
  const { _id: idObj, ...everythingElse } = selectedMeetup;

  client.close();

  return {
    props: {
      meetupData: {
        id: idObj.toString(),
        ...everythingElse,
      },
    },
  };
}

export default MeetupDetails;
