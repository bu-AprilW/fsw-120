import React from "react"
import "./App.css"
import VacationCard from "./Vacation"
import vacations from "./vacaData"

function App() {
  return (

    <div className="vacaSpots">
      {vacations.map(vacation => {
        console.log(vacation.price)
        return (
          <VacationCard className="card"
            key={vacation.place}
            imgUrl={vacation.imgUrl}
            class={vacation.imageclass}
            place={vacation.place}
            price={vacation.price}
            timeToGo={vacation.timeToGo}
            background={vacation.timeToGo === "Winter" ? "orchid" :
              vacation.timeToGo === "Spring" ? "crimson" :
                vacation.timeToGo === "Summer" ? "lightseagreen" : "gold"
            }
                
          />
    )
})}
</div>
  )
}

export default App