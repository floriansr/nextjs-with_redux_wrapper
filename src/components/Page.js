import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'

const Page = ({ title, linkTo, tick }) => {
  console.log("Page -> tick", tick)
  return (<>
    <div>
          <h1>{title}</h1>
      <Clock lastUpdate={tick.lastUpdate} light={tick.light} />
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  </>)
}

export default connect((state) => state)(Page)