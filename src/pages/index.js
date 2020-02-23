import React from "react"
// - import { Link } from "gatsby"
// +
import Link from "../components/link"
import { Box, Grid, Heading, Paragraph } from "grommet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Hi people</Heading>
    <Paragraph>Welcome to your new Gatsby site.</Paragraph>
    <Paragraph>Now go build something great.</Paragraph>
            <Grid align='stretch' pad={{ horizontal: 'large' }}
              rows={['flex']}
              columns={['flex', 'flex', 'flex', 'flex']}
              gap="small"
              margin="small"
              areas={[
                { name: 'one', start: [0, 0], end: [0, 0] },
                { name: 'two', start: [1, 0], end: [1, 0] },
                { name: 'three', start: [2, 0], end: [2, 0] },
                { name: 'four', start: [3, 0], end: [3, 0] },
              ]}
            >
              <Box flex gridArea="one" background="light-2">
                <Heading margin="small" size="small">One</Heading>
                <Paragraph margin="small">This is text. This is text. This is text. This is text. This is text. This is text. This is text. This is text. </Paragraph>
                <Paragraph margin="small">This is text. This is text. This is text. This is text. This is text. This is text. This is text. This is text. </Paragraph>
              </Box>
              <Box flex gridArea="two" background="light-2">
                <Heading margin="small" size="small">Two</Heading>
                <Paragraph margin="small">This is text. This is text. This is text. This is text. This is text. This is text. This is text. This is text. </Paragraph>
              </Box>
              <Box flex gridArea="three" background="light-2">
                <Heading margin="small" size="small">Three</Heading>
                <Paragraph margin="small">This is text. This is text. This is text. This is text. This is text. This is text. This is text. This is text. </Paragraph>
              </Box>
              <Box flex gridArea="four" background="light-2">
                <Heading margin="small" size="small">Four</Heading>
                <Paragraph margin="small">This is text. This is text. This is text. This is text. This is text. This is text. This is text. This is text. </Paragraph>
              </Box>
            </Grid>
    <Box width={{ max: "300px" }} pad="small">
      <Image />
    </Box>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
