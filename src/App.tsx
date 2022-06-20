import { Box, Button, Container, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { load } from 'react-require'
import agerFarmer from './agerfarmer.png'
import martinator from './martinator.png'
console.log(agerFarmer)

const App = () => {
  const round = 'x'
  return (
    <Container w="100vw" h="100vh" maxW="100vw" bgColor="#1A2A33" display="flex" flexDirection="row" padding="0" justifyContent="space-between">
      <Box w="33vw" justifyContent="center" alignItems="center" display="flex" gap="30px" flexDir="column">
        <Text color="#31C3BD" fontSize="80px">Zahl</Text>
        <Img src={agerFarmer} alt="Ager Farmer" w="220px" h="220px"/>
      </Box>
      <Box textAlign="center">
        <Box>
          <Heading color="#B9CFF0" fontSize="150px" fontFamily="sans-serif" fontWeight={500} mt="75px">TicTacToe</Heading>
        </Box>
        <Box display="flex" justifyContent="space-evenly" fontSize="80px" w="320px" ml="auto" mr="auto" mb="50px">
          <Text color="white">Round </Text>
          <Text color="#31C3BD">{round}</Text>
        </Box>
        <Box w="600px" color="grey" display="flex" fontSize="100px" justifyContent="space-evenly" ml="auto" mr="auto" >
          <Box>
            <Box borderRight="4px" borderBottom="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>
            <Box borderRight="4px" borderBottom="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>
            <Box borderRight="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>
          </Box>
          <Box>
            <Box borderBottom="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>
            <Box borderBottom="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>
            <Box p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>
          </Box>
          <Box>
            <Box borderBottom="4px" borderLeft="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>
            <Box borderBottom="4px" borderLeft="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>
            <Box borderLeft="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>
          </Box>
        </Box>
        <Box mt="35px">
          <Button w="262px" bgColor="#FFC860" h="65px" fontSize="50px" boxShadow="0 8px #CC8B13" _active={{ boxShadow: '0 8px #9b680b', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#ffb01d' }}>Start
          </Button>
        </Box>
      </Box>
      <Box w="33vw" justifyContent="center" alignItems="center" display="flex" gap="30px" flexDir="column">
        <Text color="#31C3BD" fontSize="80px">Zahl</Text>
        <Img src={martinator} alt="Ager Farmer" h="220px"/>
      </Box>
    </Container>
  )
}

export default App

// hallo
