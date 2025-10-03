import ExpandableText from "./Components/ExpandableText";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center mt-5 bg-secondary">
      <ExpandableText maxChars={140}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        explicabo optio porro incidunt beatae maiores necessitatibus ratione
        reiciendis temporibus quasi. Recusandae quae necessitatibus aut. Aut
        cumque porro molestias repellendus velit iusto fugiat atque ducimus
        perspiciatis odit vel, quam facere, doloremque itaque, voluptate neque
        nesciunt quos tempora sunt repudiandae. Nesciunt, modi. Nihil, accusamus
        minima laborum animi vitae neque cupiditate at distinctio possimus,
        beatae sapiente tenetur sint quaerat velit dolores sequi fugiat
        inventore ea recusandae quis libero, architecto voluptates consectetur
        eos. Impedit, dolorem, quasi perferendis asperiores numquam nobis
        voluptatibus at quos repellat in quis aut. Cupiditate ad expedita vero
        sed doloremque impedit!
      </ExpandableText>
    </div>
  );
}

export default App;
