import { Box, Button, Container, Heading, Img, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { load } from 'react-require'
import agerFarmer from './agerfarmer.png'
import martinator from './martinator.png'
import tie from './tie.png'

const App = () => {
  const [start, setStart] = useState(true)
  const [turn, setTurn] = useState(false)
  const [firstBox, setFirstBox] = useState(false)
  const [secondBox, setSecondBox] = useState(false)
  const [thirdBox, setThirdBox] = useState(false)
  const [fourthBox, setFourthBox] = useState(false)
  const [fifthBox, setFifthBox] = useState(false)
  const [sixthBox, setSixthBox] = useState(false)
  const [seventhBox, setSeventhBox] = useState(false)
  const [eighthBox, setEighthBox] = useState(false)
  const [ninthBox, setNinthBox] = useState(false)
  const [count, setCount] = useState(0)

  const round = 'x'
  return (
    <Container w="100vw" h="100vh" maxW="100vw" bgColor="#1A2A33" display="flex" flexDirection="row" padding="0" justifyContent="space-between">
      <Box w="33vw" justifyContent="center" alignItems="center" display="flex" gap="30px" flexDir="column">
        <Text color="#31C3BD" fontSize="80px">Number</Text>
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
            <Link onClick={() => { setFirstBox(true); setCount(count + 1) }} _hover={{ border: 'none' }}>
              {firstBox ? <Box borderRight="4px" borderBottom="4px" h="204px" w="263px" pt="1px"><Img src={agerFarmer} h="150px" w="150px" ml="60px" mt="30px"/></Box> : <Box borderRight="4px" borderBottom="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>}
            </Link>
            <Link onClick={() => { setSecondBox(true); setCount(count + 1) }} _hover={{ border: 'none' }}>
              {secondBox ? <Box borderRight="4px" borderBottom="4px" h="204px" w="263px" pt="1px"><Img src={agerFarmer} h="150px" w="150px" ml="60px" mt="30px"/></Box> : <Box borderRight="4px" borderBottom="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>}
            </Link>
            <Link onClick={() => { setThirdBox(true); setCount(count + 1) }} _hover={{ border: 'none' }}>
              {thirdBox ? <Box borderRight="4px" h="200px" w="263px" pt="1px"><Img src={agerFarmer} h="150px" w="150px" ml="60px" mt="30px"/></Box> : <Box borderRight="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>}
            </Link>
          </Box>
          <Box>
            <Link onClick={() => { setFourthBox(true); setCount(count + 1) }} _hover={{ border: 'none' }}>
              {fourthBox ? <Box borderRight="4px" borderBottom="4px" h="204px" w="263px" pt="1px"><Img src={agerFarmer} h="150px" w="150px" ml="60px" mt="30px"/></Box> : <Box borderRight="4px" borderBottom="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>}
            </Link>
            <Link onClick={() => { setFifthBox(true); setCount(count + 1) }} _hover={{ border: 'none' }}>
              {fifthBox ? <Box borderRight="4px" borderBottom="4px" h="204px" w="263px" pt="1px"><Img src={agerFarmer} h="150px" w="150px" ml="60px" mt="30px"/></Box> : <Box borderRight="4px" borderBottom="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>}
            </Link>
            <Link onClick={() => { setSixthBox(true); setCount(count + 1) }} _hover={{ border: 'none' }}>
              {sixthBox ? <Box borderRight="4px" h="200px" w="263px" pt="1px"><Img src={agerFarmer} h="150px" w="150px" ml="60px" mt="30px"/></Box> : <Box borderRight="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>}
            </Link>
          </Box>
          <Box>
            <Link onClick={() => { setSeventhBox(true); setCount(count + 1) }} _hover={{ border: 'none' }}>
              {seventhBox ? <Box borderBottom="4px" h="204px" w="259px" pt="1px"><Img src={agerFarmer} h="150px" w="150px" ml="60px" mt="30px"/></Box> : <Box borderBottom="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>}
            </Link>
            <Link onClick={() => { setEighthBox(true); setCount(count + 1) }} _hover={{ border: 'none' }}>
              {eighthBox ? <Box borderBottom="4px" h="204px" w="259px" pt="1px"><Img src={agerFarmer} h="150px" w="150px" ml="60px" mt="30px"/></Box> : <Box borderBottom="4px" p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>}
            </Link>
            <Link onClick={() => { setNinthBox(true); setCount(count + 1) }} _hover={{ border: 'none' }}>
              {ninthBox ? <Box h="200px" w="259px" pt="1px"><Img src={agerFarmer} h="150px" w="150px" ml="60px" mt="30px"/></Box> : <Box p="25px 100px 25px 100px"><Text color="#1A2A33">o</Text></Box>}
            </Link>
          </Box>
        </Box>
        <Box mt="35px">
          {!start ? <Button w="262px" bgColor="#65E9E4" h="65px" fontSize="50px" boxShadow="0 8px #118C87" _active={{ boxShadow: '0 8px #23a19d', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#26bbb6' }} onClick={() => setStart(true)}>Reset</Button> : <Button w="262px" bgColor="#FFC860" h="65px" fontSize="50px" boxShadow="0 8px #CC8B13" _active={{ boxShadow: '0 8px #9b680b', transform: 'translateY(4px)' }} _hover={{ backgroundColor: '#ffb01d' }} onClick={() => setStart(false)}>Start</Button>}
        </Box>
        <Box display="flex" justifyContent="center" mt="25px" alignItems="center">
          <Img src={tie} h="80px"/>
          <Text color="#31C3BD" fontSize="80px">Number</Text>
        </Box>
      </Box>
      <Box w="33vw" justifyContent="center" alignItems="center" display="flex" gap="30px" flexDir="column">
        <Text color="#31C3BD" fontSize="80px">Number</Text>
        <Img src={martinator} alt="Ager Farmer" h="220px"/>
      </Box>
    </Container>
  )
}

export default App
