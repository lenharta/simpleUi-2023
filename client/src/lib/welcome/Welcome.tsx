type WelcomeComponentProps = {
  text: string;
};

const Welcome = ({ text }: WelcomeComponentProps) => {
  return (
    <div className="Welcome">
      <h1 className="text-size-4">{text}</h1>
    </div>
  );
};
export default Welcome;
