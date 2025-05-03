import Link from "next/link";

const ButtonLogin = (props) => {
  if (props.isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Go to dashboard
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
  return <Link href="/dashboard">Login Button brohh</Link>;
};

export default ButtonLogin;
