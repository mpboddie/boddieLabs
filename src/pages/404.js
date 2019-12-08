import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import notFoundStyles from '../styles/pages/404.module.scss'

export default function NotFound() {
    return (
        <Layout page="404" bgColor="inherit">
            <div className={notFoundStyles.notFound__container}>
                <Link to="/">
                    <h1>It's not you, it's me...</h1>
                    <h2>This is never true. This is definitely you and not at all me.</h2>
                </Link>
            </div>
        </Layout>
    )
}
