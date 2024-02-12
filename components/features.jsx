import Container from './container';
import classNames from 'classnames';
export default function Features({ children, color }) {
  return (

    <section className='relative py-[12.8rem] flex flex-col items-center after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent)]' style={{ '--feature-color': color }}>
      {children}
    </section>

  );
}

export const Mainfeature = ({ image, text, title, imageSize = "small" }) => {
  return (
    <>
      <div className='relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]'>
        <div className={classNames(
          "max-w-[90%] text-center w-[50rem]",
          imageSize === "small" ? "md:w-[78rem]" : "md:w-[102.4rem]"
        )}>
          <h2 className='text-gradient text-6xl md:text-8xl mb-11 p-3'>{title}</h2>
          <div className='after:bg-[rgba(255,_255,_255,_0.15)] after:absolute after:inset-0 after:rounded-[inherit] after:[mask:linear-gradient(black,transparent)] relative rounded-[14px] before:rounded-[inherit] before:p-[1px] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor]'>
            <img src={image} className='w-full h-auto ' />
          </div>
        </div>
      </div>
      <div className='w-[78rem] max-w-[90%] text-center'>
        <p className='md:w-[80%] mx-auto text-2xl md:text-4xl text-white my-16 leading-tight'>{text}</p>
        <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
      </div>
    </>

  )
}
export const Featuregrid = ({ features }) => {
  return (
    <div className='md:text-md text-sm text-primary-text grid grid-cols-2 md:grid-cols-3 lg:w-[80%] gap-y-9 mb-[14rem] w-[90%]'>{features.map(({ title, text, icon: Icon }) => (
      <div key={title} className='max-w-[25.6rem] md:[&_svg]:inline [&_svg]:fill-white lg:mx-auto md:[&_svg]:mr-[6px] [&_svg]:mb-[2px]'>
        <Icon />
        <span className='text-white block md:inline'>{title}</span>
        {" "}{text}
      </div>
    ))}</div>
  )
}
export const Featurecard = ({ features }) => {
  return (

    <div className='w-[80%]'>
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
    </div>

  )
}
Features.Main = Mainfeature;
Features.Grid = Featuregrid;
Features.Cards = Featurecard;


