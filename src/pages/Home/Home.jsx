import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Navbar from '../../components/Navbar'
import Filter from '../../components/Filter'
import Footer from '../../components/Footer'
import { companyName } from '../../common/variables'
import './home.css'

const Home = ({ history }) => {
    console.log(history)
    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <div className="content">
                    <h1 className="title">Find it, Love it, Live there.</h1>
                    <h3 className="subtitle">What are you looking for?</h3>
                    <Filter history={history} />
                </div>
                <div className="animation-container" />
            </div>

            <section className="company">
                <h4 className="sec-subtitle">Not your traditional agent</h4>
                <div className="divider" />
                <h2 className="sec-title">{companyName}</h2>
                <p className="section-text">
                    We at {companyName} believe moving doesn’t have to be stressful, you just need to have the right team
                    behind you. Our office will work with you to understand exactly what’s important to you as you make your
                    next move in Gibraltar or Spain.<br /><br />

                    You will find us very different from traditional agents, from the personal service provided by our team of
                    experienced and knowledgeable agents to our superb photography, expert social media skills and
                    competitive fees. We are the creative property experts!<br /><br />

                    Our services include Sales and Lettings, as well as Property Management, Corporate Services, Residential
                    Developments, Professional Valuations, Refurbishment/Interior Services and Block Management.<br /><br />

                    Beautiful properties. Bespoke services. Excellent results. {companyName}- An estate agent with a
                    difference!
                </p>
            </section>
            <Footer />
        </div>
    )
}

const ListingsQuery = gql`
  query {
      allListings {
        id
        type
        bathrooms
        bedrooms
        description
        images
        price
        title
        type
      },
  }
`

const HomeWithGraphQL = graphql(ListingsQuery, {
    props: ({ data }) => ({ ...data }),
})(Home)

export default HomeWithGraphQL
