import React from "react";
import InfoBox from "./InfoBox";
import "./index.css";

function App() {
  return (
    <div className="boxcontainer">
      <InfoBox
      backgroundColor="#808080"
      title="Box 1"
      subtitle="THIS COLOR IS GRAY"
      information="This is the first box."
      />
      <InfoBox
      backgroundColor="#ffe4c4"
      title="Box 2"
      subtitle="THIS COLOR IS BISQUE"
      information="This is the second box."
      />
      <InfoBox
      backgroundColor="#bc8f8f"
      title="Box3"
      subtitle="THIS COLOR IS ROSY BROWN"
      information="This is the third box."
      />
      <InfoBox
      backgroundColor="#f0ffff"
      title="Box 4"
      subtitle="THIS COLOR IS AZURE"
      information="This is the fourth box."
      />
      <InfoBox
      backgroundColor="#d8bfd8"
      title="Box 5"
      subtitle="THIS COLOR IS THISTLE"
      information="This is the fifth box."
      />
      <InfoBox
      backgroundColor="#fffacd"
      title="Box 6"
      subtitle="THIS COLOR IS LEMON CHIFFON"
      information="This is the sixth box."
      />
      <InfoBox
      backgroundColor="#fa8072"
      title="Box 7"
      subtitle="THIS COLOR IS SALMON"
      information="This is the seventh box."
      />
      <InfoBox
      backgroundColor="#afeeee"
      title="Box 8"
      subtitle="THIS COLOR IS PALE TURQUOISE"
      information="This is the eighth box."
      />
      <InfoBox
      backgroundColor="#ff69b4"
      title="Box 9"
      subtitle="THIS COLOR IS HOT PINK"
      information="This is the ninth box."
      />
      <InfoBox
      backgroundColor="#d2b48c"
      title="Box 10"
      subtitle="THIS COLOR IS TAN"
      information="This is the tenth box."
      />
    </div>
  );
}


export default App;
