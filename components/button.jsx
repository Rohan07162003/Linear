import Link from 'next/link'
import { cva,VariantProps } from 'class-variance-authority'
import classNames from "classnames";

const buttonClasses = cva("rounded-full inline-flex items-center",{
    variants:{
        variant:{
            primary:"bg-primary-gradient hover:text-shadow hover:box-shadow-primary hover:shadow-primary transition-[shadow,text-shadow]",
            secondary:"text-offwhite bg-white bg-opacity-10 border border-white-a08 backdrop-filter-[12px]",
            tertiary:"",
        },
        size:{
            small: "text-xs px-3 h-7",
            medium: "text-sm px-4 h-8 ",
            large: "text-md px-6 h-12",
        },
    },
    defaultVariants:{
        variant:"primary",
        size:"medium",
    }
})
const Button = ({children,href,variant,className}) => {
  return (
    <Link className={classNames((buttonClasses({variant})),className)} href={href}>{children}</Link>
    
  )
}

export default Button