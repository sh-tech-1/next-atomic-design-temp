import { Fragment } from 'react'
import Head from '../components/Head'
import { Footer } from '../components/molecules'
import { NavigationBar } from '../components/organisms'
import { PageTemplate } from '../components/templates'

const Home = () => {
	return (
		<Fragment>
			<Head title={'Home'}>
				<title>aaa</title>
			</Head>
			<PageTemplate navigation={<NavigationBar />} footer={<Footer />} />
		</Fragment>
	)
}

export default Home
