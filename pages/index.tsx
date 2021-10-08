import type { NextPage } from 'next'
import { Grommet, Box, Text } from 'grommet';
import styled from 'styled-components';
import SignUp from '../components/signup'

const StyledGrommet = styled(Grommet)`
  height: 100vh;
`;

const Home: NextPage = () => {
  return (
    <StyledGrommet>
      <Box
        responsive={true}
        fill="vertical" flex="grow" direction="column"
        tag='header'
        justify='center'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: 1 }}
      >
        <SignUp />
      </Box>
    </StyledGrommet>
  )
}

export default Home
