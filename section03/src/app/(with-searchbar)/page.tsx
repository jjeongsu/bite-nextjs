import styles from './page.module.css'

export default function Home() {
  console.log('home 컴포 실행')

  return <div className={styles.page}>인덱스 페이지</div>
}
