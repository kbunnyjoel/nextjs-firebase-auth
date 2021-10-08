import type { NextPage } from 'next'
import { Grommet, Box, Text } from 'grommet';
import styled from 'styled-components';

const theme = {
  global: {
    backgroundColor: 'yellow',
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

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
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: 1 }}
      >
        <Text alignSelf="center">simple text</Text>
      </Box>
    </StyledGrommet>
  )
}

export default Home
