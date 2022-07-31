import { Tag } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ children, color='ghost', href, size ='s', className, ...props
}: Tag): JSX.Element => {
  return (
    <p 
    className={cn(styles.tag, className, {
      [styles.s]: size == 's',
      [styles.m]: size == 'm',
      [styles.ghost]: color == 'ghost',
      [styles.red]: color == 'red',
      [styles.grey]: color == 'grey',
      [styles.green]: color == 'green',
      [styles.primary]: color == 'primary',
    })}
    {...props}
    >{
        href
        ? <a href={href}>{children}</a>
        : <>{children}</>
    }
    </p>
  )
 
}