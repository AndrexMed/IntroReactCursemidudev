import "./TwitterFollowCard.css";

export function TwitterFollowCard({
  formatedUserName,
  username,
  name,
  isFollowing,
}) {
  console.log(isFollowing);
  const imgSrc = `https://unavatar.io/${username}`;
  return (
    <article className="card">
      <span>
        <img style={{ width: "80px" }} src={imgSrc} alt="Avatar" />
      </span>
      <span>
        <div>
          <h4>{name}</h4>
        </div>
        <div>
          <h6>{formatedUserName(username)}</h6>
        </div>
      </span>
      <span>
        <button>Seguir</button>
      </span>
    </article>
  );
}
