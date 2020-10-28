import React from "react";

function FunctionalComp(props) {
  //   return <h1>Hello {props.name}</h1>;
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

// Dividing into components
//Extracting Avtar
function Avatar(props) {
  return <img className="Avtar" src={props.user.avtar} alt={props.user.name} />;
}

// extracting username

function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user} />
      <div>
          {props.user.name}
      </div>
    </div>
  );
}

// combining smaller components

function Comment(props) {
    return (
        <div>
            <UserInfo user= {props.author} />
            <div>
                {props.text}
            </div>
            <div>
                {formatDate(props.date)}
            </div>
        </div>
    )
}

export default FunctionalComp;
