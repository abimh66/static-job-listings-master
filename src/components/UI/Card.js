const Card = (props) => {
  const classes = `flex w-full max-w-4xl pb-4 rounded-md px-5 bg-white shadow-lg ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
