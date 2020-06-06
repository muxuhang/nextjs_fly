
import Link from 'next/link'
import styles from './styles/user.module.sass'
export default function User() {
  return (
    <div className={styles.user}>
      <Link href={'/'}><a className={styles.links}>首页</a></Link>
    </div>
  )
}
