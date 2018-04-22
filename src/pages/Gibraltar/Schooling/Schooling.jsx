import React from 'react'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import Navbar from '../../../components/Navbar'
import Section from '../../../components/Section'
import Footer from '../../../components/Footer'

const About = ({ history }) => (
    <div className="text-page">
        <Navbar history={history} />
        <Section title="Schooling">
            <p className="section-text">
                There are numerous schools and one college in Gibraltar. All teacher training takes place in UK and
                teachers must have a registration number issued by the Department for Education (UK).<br /><br />
                Quick run down on the schooling system
            </p>
            <ul>
                <li>
                    Pre-school- The government provides many nursery places for pre-school children. There are also
                    private playgroups and nurseries registered with the Department of Education.
                </li>
                <li>
                    Primary education- This is free, full-time and compulsory for children in Gibraltar. Schools are all co-
                    educational and English is the language which pupils are taught in. All curricula are based on the
                    national curriculum for England.
                </li>
                <li>
                    Secondary education- Secondary education is also free, full-time and compulsory for Gibraltar
                    children between the age of 12 and 16. The secondary curriculum is defined by national curriculum
                    legislation.
                </li>
                <li>
                    Hebrew education- Gibraltar Hebrew School (also Talmud Torah Hebrew School) is a government
                    school which offers places from the age of 1 to 12 years. For those wishing to continue in a Jewish
                    School, secondary education is also available in Gibraltar Girl’s High School and Gibraltar Boy’s
                    Secondary School.
                </li>
                <li>
                    Catholic education- Loreto Convent School is an independent co-educational primary school, which
                    provides a private education from nursery to 12 years. Loreto School is a Catholic school but
                    welcomes children of all faiths.
                </li>
                <li>
                    Special education- St Martin’s School accommodates for a broad range of special needs for
                    children aged between 5 and 16. Notre Dame School and Bishop Fitzgerald schools are Learning
                    Support Facilities which cater for children of first school age whilst there is also a LSF at each
                    secondary school.
                </li>
                <li>
                    College education- The college provides tuition support for bodies such as ACCA, ILEX, ICSA, AAT
                    and the institute of bankers. There are several qualifications on offer from GCSE’s to AS/A levels, to
                    full-time students, as well as part-time evening courses.
                </li>
                <li>
                    Higher education- There are degree and higher national diploma courses available as well as
                    Gibraltar government scholarships available to eligible students.
                </li>
            </ul>

            <h3 className="left-title">Getting to and into Gibraltar</h3>
            <p className="section-text">
                For more information please contact the Gibraltar Department of Education +350 200 42514 <br /><br />
                <a href="https://www.gibraltar.gov.gi/new/department-education">https://www.gibraltar.gov.gi/new/department-education</a> (source)
            </p>

            <h3 className="left-title">Schools in Marina area</h3>
            <Paper className="table-container">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>St Anne's Middle School</TableCell>
                            <TableCell>Middle schools (from 8/9 - 12)</TableCell>
                            <TableCell>St Anne's Road Glacis Estate</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Bayside Comprehensive School (boys)</TableCell>
                            <TableCell>Secondary schools (from 12/13 - 18/19)</TableCell>
                            <TableCell>Bayside Road</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Westside School (girls)</TableCell>
                            <TableCell>Secondary schools (from 12/13 - 18/19)</TableCell>
                            <TableCell>Queensway</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <h3 className="left-title">Schools in South District</h3>
            <Paper className="table-container">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>St Joseph's First School and Nursery</TableCell>
                            <TableCell>Primary schools (from 4-8)</TableCell>
                            <TableCell>South Barrack Road</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>St Joseph's Middle School</TableCell>
                            <TableCell>Middle schools (from 8/9 - 12)</TableCell>
                            <TableCell>South Barrack Road</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Loreto Convent School</TableCell>
                            <TableCell>Independent schools (co-ed, all ages)</TableCell>
                            <TableCell>13A Europa Road</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <h3 className="left-title">Schools in Westside</h3>
            <Paper className="table-container">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Governor's Meadow School</TableCell>
                            <TableCell>Primary schools (from 4-8)</TableCell>
                            <TableCell>Europort Avenue</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>St Paul's First School and Nursery</TableCell>
                            <TableCell>Primary schools (from 4-8)</TableCell>
                            <TableCell>Varyl Begg Estate</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Bishop Fitzgerald School</TableCell>
                            <TableCell>Middle schools (from 8/9 - 12)</TableCell>
                            <TableCell>Europort Avenue</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <h3 className="left-title">Schools in Town area</h3>
            <Paper className="table-container">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Hebrew First School</TableCell>
                            <TableCell>Primary schools (from 4-8)</TableCell>
                            <TableCell>Bomb House Lane</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Notre Dame First School and Nursery</TableCell>
                            <TableCell>Primary schools (from 4-8)</TableCell>
                            <TableCell>Laguna Estate</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>St Mary's First School</TableCell>
                            <TableCell>Primary schools (from 4-8)</TableCell>
                            <TableCell>25 Town Range</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>St Martin's School</TableCell>
                            <TableCell>Special schools</TableCell>
                            <TableCell>Smith Dorrien Avenue</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Prior Park</TableCell>
                            <TableCell>Independent schools (co-ed, all ages)</TableCell>
                            <TableCell>Old Town</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>

            <h3 className="left-title">Schools in Upper Town</h3>
            <Paper className="table-container">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>St Bernard's First School and Nursery</TableCell>
                            <TableCell>Primary schools (from 4-8)</TableCell>
                            <TableCell>Castle Road</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Sacred Heart Middle School</TableCell>
                            <TableCell>Middle schools (from 8/9 - 12)</TableCell>
                            <TableCell>3 Lime Kiln Road</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Section>
        <Footer />
    </div>
)

export default About