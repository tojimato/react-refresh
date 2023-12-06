import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage(params) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=> {
    setIsLoading(true);
    fetch(
      "https://react-refresh-3abcc-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for(const key in data){
          const meetup = {
            id : key,
            ...data[key]
          }
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
    setIsLoading(false);
  }, [])
  

  if (isLoading) {
    return (
      <section>
        <p> Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All MeetUps</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
