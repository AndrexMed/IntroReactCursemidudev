import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <div className="App">
        <TwitterFollowCard isFollowing={true} username="elgio" name="Giovanni Andres Alzate" />
        <TwitterFollowCard isFollowing={false} username="aleja" name="Alejandra Andres Alzate" />
        <TwitterFollowCard username="julieta" name="Julieta Andres Alzate" />
      </div>
    </>
  );
}
