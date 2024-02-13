"use client";

import Container from './container';
import classNames from 'classnames';
import { useInView } from "react-intersection-observer";
export default function Features({ children, color, colorDark }) {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: false });
  return (
    <section
      ref={ref}
      className={classNames(
        "after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[40rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0",
        inView &&
          "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
        !inView && "before:rotate-180 before:opacity-40"
      )}
      style={
        {
          "--feature-color": color,
          "--feature-color-dark": colorDark,
        }
      }
    >
      <div className="mb-16 w-full mt-[25.2rem] md:mb-[12.8rem]">
        {children}
      </div>
    </section>
  );
}

export const Mainfeature = ({ image, text, title, imageSize = "small" }) => {
  return (
    <>
      <div className='relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]'>
        <div className={classNames(
          "max-w-[90%] text-center w-[50rem] mx-auto",
          imageSize === "small" ? "md:w-[78rem]" : "md:w-[102.4rem]"
        )}>
          <h2 className='text-gradient text-6xl md:text-8xl mb-11 p-3'>{title}</h2>
          <div className='after:bg-[rgba(255,_255,_255,_0.15)] after:absolute after:inset-0 after:rounded-[inherit] after:[mask:linear-gradient(black,transparent)] relative rounded-[14px] before:rounded-[inherit] before:p-[1px] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor]'>
            <img src={image} className='w-full h-auto ' />
          </div>
        </div>
      </div>
      <div className='max-w-[90%] text-center mx-auto'>
        <p className='md:w-[50%] w-[90%] text-2xl md:text-4xl text-white my-16 mx-auto leading-tight'>{text}</p>
        <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
      </div>
    </>

  )
}
export const Featuregrid = ({ features }) => {
  return (
    <div className='md:text-md text-sm text-primary-text grid grid-cols-2 md:grid-cols-3 lg:w-[80%] gap-y-9 mb-[14rem] w-[90%] mx-auto'>{features.map(({ title, text, icon: Icon }) => (
      <div key={title} className='max-w-[25.6rem] md:[&_svg]:inline [&_svg]:fill-white lg:mx-auto md:[&_svg]:mr-[6px] [&_svg]:mb-[2px]'>
        <Icon />
        <span className='text-white block md:inline'>{title}</span>
        {" "}{text}
      </div>
    ))}</div>
  )
}
const Featurecard = ({ features }) => {
  return (
    <Container>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {features.map(({ title, text, image, imageClassName }) => (
          <div
            key={title}
            className="relative aspect-[1.1/1] overflow-hidden rounded-[2.4rem] border border-white-a08 bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] py-6 px-8 before:pointer-events-none before:absolute before:inset-0 before:bg-glass-gradient md:rounded-[4.8rem] md:p-14"
          >
            <h3 className="mb-2 text-2xl text-white">{title}</h3>
            <p className="max-w-[31rem] text-md text-primary-text">{text}</p>
            <img
              className={classNames("absolute max-w-none", imageClassName)}
              src={image}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
Features.Main = Mainfeature;
Features.Grid = Featuregrid;
Features.Cards = Featurecard;


