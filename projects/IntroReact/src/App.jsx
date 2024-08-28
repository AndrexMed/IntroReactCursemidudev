import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatedUserName = (username) => `@${username}`;

  return (
    <>
      <div className="App">
        <TwitterFollowCard
          isFollowing
          username="elgio"
          name="Giovanni Andres Alzate"
          formatedUserName={formatedUserName}
        />

        <TwitterFollowCard
          isFollowing={false}
          username="aleja"
          name="Alejandra Andres Alzate"
          formatedUserName={formatedUserName}
        />

        <TwitterFollowCard
          username="julieta"
          name="Julieta Andres Alzate"
          formatedUserName={formatedUserName}
        />
      </div>
    </>
  );
}
