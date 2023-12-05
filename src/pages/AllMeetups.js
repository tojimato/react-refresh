import MeetupList from "../components/meetups/MeetupList";
import DUMMY_DATA from "../data/dummy-data";

function AllMeetupsPage(params) {
  return (
    <section>
      <h1>All MeetUps</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
