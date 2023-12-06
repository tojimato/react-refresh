import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {  useNavigate } from "react-router-dom";

function NewMeetupPage(params) {
  const history = useNavigate();
  function addMeetupHandler(meetupData) {
    console.log(meetupData);
    fetch(
      "https://react-refresh-3abcc-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history('/');
    });
  }

  return (
    <section>
      <h1> Add New Meetup </h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
