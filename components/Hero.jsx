import classNames from "classnames";
export const HeroTitle = ({ children,className}) => {
  return (
    <h1 className={classNames("text-6xl md:text-8xl my-6 pb-3 text-gradient",className)}>
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children,className }) => {
  return (
    <p className={classNames("text-lg md:text-xl mb-12 text-primary-text",className)}>
      {children}
    </p>
  );
};

export const Hero = ({ children }) => {
  return <div className="text-center">{children}</div>;
};
