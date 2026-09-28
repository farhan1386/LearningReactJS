// Without destructuring

function User(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <p>{props.role}</p>
        </div>
    );
}

// With destructuring

function User({ name, email, role }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{role}</p>
        </div>
    );
}