import "./index.scss";

const Button = ({ text, type, isloading, appearence, icon, click }) => {
  return (
    <button className='btn' type={type} disabled={isloading} onClick={click} data-appearence={appearence} >
       {isloading ? "Loading..." : <>{icon} {text}</>}
    </button>
  )
}

export { Button }