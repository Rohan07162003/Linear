import classNames from "classnames"
const Container = ({children,className}) => {
  return (
    <div className={classNames("max-w-[120rem] mx-auto px-6",className)}>{children}</div>
  )
}

export default Container